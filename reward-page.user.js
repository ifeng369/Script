// ==UserScript==
// @name         Microsoft Rewards 全任务助手 - 同源领取页
// @namespace    https://github.com/ifeng369/Script
// @version      1.3.0
// @description  配合《Microsoft Rewards 全任务助手》使用：在 rewards 页面内领取待领积分。优先点击页面自带的“领取积分”按钮（使用站点自己的 action 标识，不会因部署更新失效），按钮找不到时退回站点同源 server action 请求。定时脚本跑在扩展后台，Origin 为 chrome-extension://，服务端会直接 500，领取必须由页面上下文完成
// @author       ifeng369
// @match        https://rewards.bing.com/dashboard*
// @match        https://rewards.bing.com/earn*
// @storageName  FuckScripts_Shared_Auth
// @run-at       document-end
// @inject-into  content
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_log
// ==/UserScript==

(function () {
    "use strict";

    // 动态提取的标识由后台脚本写入共享存储；此处仅作兜底
    const CLAIM_FALLBACK_ID = "00491296f1d668ad46b65342c95cb9d72a62c1fa9d";
    const CLAIM_URL = "https://rewards.bing.com/earn";

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    const getRouterStateTree = (segment) => {
        const refreshFlag = 4096;
        const tree = ["", {
            children: ["(nav)", {
                children: [segment, { children: ["PAGE", {}, null, null, refreshFlag] }, null, null, refreshFlag]
            }, null, null, refreshFlag]
        }, null, null, refreshFlag + 16];
        return encodeURIComponent(JSON.stringify(tree));
    };

    const pageHtml = () => (document.documentElement ? document.documentElement.innerHTML : "").replace(/\\"/g, '"');

    const balance = () => {
        const m = pageHtml().match(/"balance":(\d+)/);
        return m ? parseInt(m[1]) : 0;
    };

    // "pointClaim":null 表示待领池为空；对象/数组表示有可领积分
    const hasPendingClaim = () => {
        const m = pageHtml().match(/"pointClaim":(null|\{|\[)/);
        return !!(m && m[1] !== "null");
    };

    const report = (ok, msg) => {
        GM_setValue("Config.claimPageResult", { at: Date.now(), ok: ok, msg: msg || "" });
        GM_log(`✨同源领取：${ok ? "成功" : "失败"}${msg ? ` 🔛${msg}` : ""}`);
        // 后台脚本打开的临时标签页：结果写回后自行关闭（非脚本打开的标签页浏览器会忽略）
        setTimeout(() => { try { window.close(); } catch (e) {} }, 2000);
    };

    const visible = (el) => !!el && el.offsetParent !== null;

    // 页面自带的领取入口（标题栏“领取积分”按钮 / 侧栏“领取”按钮）
    const findClaimButton = () => {
        const nodes = document.querySelectorAll('button, [role="button"], a');
        for (const el of nodes) {
            if (!visible(el)) continue;
            if (el.disabled || el.getAttribute("aria-disabled") === "true") continue;
            const txt = (el.innerText || el.textContent || "").replace(/\s/g, "");
            if (txt && txt.length <= 12 && /^领取/.test(txt)) return el;
        }
        return null;
    };

    const waitForButton = async (ms) => {
        const end = Date.now() + ms;
        do {
            const btn = findClaimButton();
            if (btn) return btn;
            await sleep(1000);
        } while (Date.now() < end);
        return null;
    };

    // 等待领取生效：待领池清空或余额增加
    const waitClaimed = async (before, ms) => {
        const end = Date.now() + ms;
        do {
            await sleep(1500);
            if (!hasPendingClaim()) return true;
            const now = balance();
            if (before > 0 && now > before) return true;
        } while (Date.now() < end);
        return false;
    };

    // 方式 A：点页面按钮，action 标识与请求头都由站点自己生成，部署更新也不会失效
    const claimByButton = async () => {
        const btn = await waitForButton(8000);
        if (!btn) return false;
        const before = balance();
        btn.click();
        return await waitClaimed(before, 20000);
    };

    // 方式 B：站点同源 server action（同源 Origin 可过校验）
    const claimByAction = async () => {
        const before = balance();
        let actionMap = {};
        try {
            actionMap = JSON.parse(GM_getValue("Config.actionMap", "{}") || "{}");
        } catch (e) {
            actionMap = {};
        }
        const headers = {
            "content-type": "text/plain;charset=UTF-8",
            "next-action": actionMap.reportClaimAllPoints || CLAIM_FALLBACK_ID,
            "next-router-state-tree": getRouterStateTree("earn"),
        };
        const dpl = GM_getValue("Config.actionDpl", "");
        if (dpl) headers["x-deployment-id"] = dpl;
        const resp = await fetch(CLAIM_URL, {
            method: "POST",
            credentials: "include",
            headers: headers,
            body: JSON.stringify([]),
        });
        const text = await resp.text();
        if (!resp.ok) throw new Error(`领取请求失败，状态码：${resp.status}`);
        if (!/^\d+:true\s*$/m.test(text)) return "服务端未返回成功帧，可能已领取";
        await sleep(1500);
        const after = balance();
        return before > 0 && after > before ? `本次领取 ${after - before} 积分，当前余额 ${after}` : "领取请求已成功";
    };

    const run = async () => {
        GM_log("页面脚本已在 rewards 页面运行");
        // 页面数据可能仍在流式渲染，最多等 15 秒
        let pending = hasPendingClaim();
        for (let i = 0; i < 5 && !pending; i++) {
            await sleep(3000);
            pending = hasPendingClaim();
        }
        if (!pending) {
            report(true, "无可领积分");
            return;
        }
        if (await claimByButton()) {
            report(true, "已点击页面领取按钮，待领积分已领取");
            return;
        }
        report(true, await claimByAction());
    };

    run().catch((e) => report(false, (e && e.message) || String(e)));
})();
