// ==UserScript==
// @name         Microsoft Rewards 全任务助手 - 同源领取页
// @namespace    https://github.com/ifeng369/Script
// @version      1.0.0
// @description  配合《Microsoft Rewards 全任务助手》使用：在 rewards 页面内以站点同源请求领取待领积分。定时脚本运行在扩展后台，Origin 为 chrome-extension://，server action 会直接 500，领取只能由页面上下文完成
// @author       ifeng369
// @match        https://rewards.bing.com/dashboard*
// @match        https://rewards.bing.com/earn*
// @storageName  FuckScripts_Shared_Auth
// @run-at       document-end
// @noframes
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_log
// ==/UserScript==

(function () {
    "use strict";

    // 动态提取的标识由后台脚本写入共享存储；此处仅作兜底
    const CLAIM_FALLBACK_ID = "00491296f1d668ad46b65342c95cb9d72a62c1fa9d";
    const CLAIM_URL = "https://rewards.bing.com/earn";

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
    };

    const claim = async () => {
        // 页面数据可能仍在流式渲染，最多等 15 秒
        let pending = hasPendingClaim();
        for (let i = 0; i < 5 && !pending; i++) {
            await new Promise(r => setTimeout(r, 3000));
            pending = hasPendingClaim();
        }
        if (!pending) {
            report(true, "无可领积分");
            return;
        }
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
        if (!resp.ok) {
            throw new Error(`领取请求失败，状态码：${resp.status}，响应：${(text || "").replace(/\s+/g, " ").slice(0, 100)}`);
        }
        if (!/^\d+:true\s*$/m.test(text)) {
            report(true, "服务端未返回成功帧，可能已领取");
            return;
        }
        await new Promise(r => setTimeout(r, 1500));
        const after = balance();
        report(true, before > 0 && after > before ? `本次领取 ${after - before} 积分，当前余额 ${after}` : "领取请求已成功");
    };

    claim().catch((e) => report(false, (e && e.message) || String(e)));
})();
