// ==UserScript==
// @name         Microsoft Rewards 全任务助手（ifeng369）
// @namespace    https://github.com/ifeng369/Script
// @version      3.6.59.16
// @description  每天在后台自动完成 Microsoft Rewards 任务获取积分奖励，✅签入、✅阅读、✅活动、✅打卡、✅Edge浏览、✅搜索、✅领取
// @author       geoisam@qq.com
// @icon         data:image/png;base64,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
// @homepage     https://github.com/geoisam/FuckScripts
// @supportURL   https://github.com/geoisam/FuckScripts/issues
// @crontab      */20 * * * *
// @connect      bing.com
// @connect      login.live.com
// @connect      rewards.bing.com
// @connect      prod.rewardsplatform.microsoft.com
// @connect      hotapi.nntool.cc
// @connect      hot.baiwumm.com
// @connect      cnxiaobai.com
// @connect      disp-qryapi.3g.qq.com
// @connect      qyapi.weixin.qq.com
// @connect      oapi.dingtalk.com
// @connect      open.feishu.cn
// @connect      push.i-i.me
// @connect      api.day.app
// @connect      bark.day.app
// @connect      developer.work.weixin.qq.com
// @connect      open.dingtalk.com
// @connect      3g.qq.com
// @connect      github.com
// @match        https://login.live.com/*
// @include      https://login.live.com/*
// @match        https://rewards.bing.com/dashboard
// @run-at       document-end
// @noframes
// @all-frames
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_cookie
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_info
// @grant        GM_log
// @grant        GM_registerMenuCommand
// @storageName  FuckScripts_Shared_Auth
// @tips         此脚本一直为 开源免费 使用，如果你是从某些地方买的话，你就是被骗了
// @license GPL-3.0
// ==/UserScript==

/* global GM_cookie, GM_getValue, GM_setValue, GM_xmlhttpRequest, GM_log, GM_info, GM_notification, GM_openInTab */

/* ==UserConfig==
Config:
    keep:
        title: 持续检测（关闭则所有任务完成后不再检测）
        type: checkbox
        default: true
    lock:
        title: 锁定国区（若当前 IP 非中国大陆地区则停止）
        type: checkbox
        default: true
    span:
        title: 搜索间隔（至少 30 秒即间隔 15-45 秒）
        type: number
        default: 30
        min: 30
        unit: ±15秒
    api:
        title: 搜索词接口（offline为随机搜索词）
        type: select
        default: hot.nntool.cc
        values: [offline, hot.nntool.cc, hot.baiwumm.com, hot.cnxiaobai.com]
    code:
        title: 授权码链接（请勿分享以免个人数据泄露）
        type: textarea
        description: https://login.live.com/oauth20_desktop.srf?code=M.C540_BAY.2.U.********-****-****-****-************&...
Tasks:
    sign:
        title: 签入（Authorization Code）
        type: checkbox
        default: true
    read:
        title: 阅读（Authorization Code）
        type: checkbox
        default: true
    promos:
        title: 活动（rewards.bing.com）
        type: checkbox
        default: true
    edge:
        title: Edge 浏览连签（后台计时约 30 分钟，需授权码）
        type: checkbox
        default: true
    bonus:
        title: 每日额外积分（dashboard 按钮）
        type: checkbox
        default: true
    search:
        title: 搜索（www.bing.com）
        type: checkbox
        default: true
    punchcard:
        title: 月度打卡任务（earn 页面任务板块，隔日解锁）
        type: checkbox
        default: true
Notice:
    bro:
        title: 浏览器通知（当前脚本）
        type: checkbox
        default: true
    wework:
        title: 企业微信消息推送（群机器人）
        type: text
        password: true
        description: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    dingding:
        title: 钉钉群机器人（不加签，关键词：#）
        type: text
        password: true
        description: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    feishu:
        title: 飞书群机器人（不加签，关键词：#）
        type: text
        password: true
        description: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    pushme:
        title: PushMe（push.i-i.me）
        type: text
        password: true
        description: xxxxxxxxxxxxxxxxxxxx
    bark:
        title: Bark（bark.day.app）
        type: text
        password: true
        description: xxxxxxxxxxxxxxxxxxxx
==/UserConfig== */


if (typeof window !== 'undefined' && window.location && window.location.hostname === "login.live.com") {
    (function() {
        const setAuthCookie = function(code) {
            if (typeof GM_cookie !== 'undefined') {
                GM_cookie.set({
                    name: "microsoft_rewards_auth_code",
                    value: encodeURIComponent(code),
                    domain: ".live.com",
                    path: "/",
                    secure: true,
                    expirationDate: Date.now() / 1000 + 60
                });
            } else {
                const expiration = new Date();
                expiration.setTime(expiration.getTime() + 60 * 1000);
                document.cookie = "microsoft_rewards_auth_code=" + encodeURIComponent(code) + "; expires=" + expiration.toUTCString() + "; path=/; domain=.live.com";
            }
        };

        const checkAndCapture = function() {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const authCode = urlParams.get("code");

                if (authCode && authCode.length > 10) {
                    const fullCode = "https://login.live.com/oauth20_desktop.srf?code=" + authCode.trim();
                    GM_setValue("Config.code", fullCode);
                    GM_setValue("Config.token", false);
                    setAuthCookie(fullCode);

                    if (GM_getValue("Notice.bro", true)) {
                        GM_notification({
                            text: "授权码获取成功！",
                            title: GM_info.script.name,
                            onclick: function() {}
                        });
                    }

                    return true;
                }
            } catch (e) {}
            return false;
        };

        if (checkAndCapture()) {
            return;
        }

        window.addEventListener("hashchange", checkAndCapture);
        window.addEventListener("popstate", checkAndCapture);

        const checkInterval = setInterval(function() {
            if (checkAndCapture()) {
                clearInterval(checkInterval);
            }
        }, 300);

        setTimeout(function() {
            clearInterval(checkInterval);
        }, 60000);
    })();
    return;
}

const FuckD = {
    wh: [
        {
            name: "企业微信",
            url: "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=",
            key: GM_getValue("Notice.wework", false),
            msg: {
                "msgtype": "text",
                "text": {
                    get content() {
                        return `> ${FuckD.bing.datetimeLocaleStr}\n\n ## ${GM_info.script.name}\n ${FuckD.bing.sendMSG}`
                    }
                },
            },
            docs: "https://developer.work.weixin.qq.com/document/path/91770"
        },
        {
            name: "钉钉",
            url: "https://oapi.dingtalk.com/robot/send?access_token=",
            key: GM_getValue("Notice.dingding", false),
            msg: {
                "msgtype": "markdown",
                "markdown": {
                    "title": GM_info.script.name,
                    get text() {
                        return `> ${FuckD.bing.datetimeLocaleStr}\n ### ${GM_info.script.name}\n ${FuckD.bing.sendMSG}`
                    }
                },
            },
            docs: "https://open.dingtalk.com/document/orgapp/custom-robots-send-group-messages"
        },
        {
            name: "飞书",
            url: "https://open.feishu.cn/open-apis/bot/v2/hook/",
            key: GM_getValue("Notice.feishu", false),
            msg: {
                "msg_type": "interactive",
                "card": {
                    "schema": "2.0",
                    "header": {
                        "title": {
                            "tag": "plain_text",
                            "content": GM_info.script.name
                        },
                        "template": "orange"
                    },
                    "body": {
                        "elements": [{
                            "tag": "markdown",
                            "text_align": "center",
                            get content() {
                                return `#### ${FuckD.bing.datetimeLocaleStr}\n ${FuckD.bing.sendMSG}`
                            }
                        }]
                    }
                }
            },
            docs: "https://open.feishu.cn/document/client-docs/bot-v3/add-custom-bot"
        },
        {
            name: "PushMe",
            url: "https://push.i-i.me/?push_key=",
            key: GM_getValue("Notice.pushme", false),
            msg: {
                "type": "markdown",
                "title": `${GM_info.script.name}[#reawrds!https://rewards.bing.com/rewards.png]`,
                get content() {
                    return `\n ${FuckD.bing.sendMSG}`
                }
            },
            docs: "https://push.i-i.me/docs/index"
        },
        {
            name: "Bark",
            url: "https://api.day.app/",
            key: GM_getValue("Notice.bark", false),
            msg: {
                "group": "rewards",
                "icon": "https://rewards.bing.com/rewards.png",
                "title": GM_info.script.name,
                get markdown() {
                    return `\n ${FuckD.bing.sendMSG}`
                }
            },
            docs: "https://bark.day.app/#/tutorial"
        },
    ],
    ua: {
        // 拟人化 P0：PC 端优先用浏览器真实 UA（与 TLS 指纹一致，避免 UA 版本声明与实际指纹不符的伪装特征；沙箱无 navigator 时回退到近期版本，需随版本更替更新）
        pc: (typeof navigator !== "undefined" && /Chrome\//.test(navigator.userAgent || "")) ? navigator.userAgent : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36 Edg/150.0.2420.81",
        // APP 通道移动 UA（dapi/移动搜索），硬编码需定期跟随版本更新
        m: "Mozilla/5.0 (Linux; Android 16; MCE16 Build/BP3A.250905.014; ) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/150.0.0.0 Mobile Safari/537.36 EdgA/150.0.2420.102",
        // Rewards 桌面客户端 UA：网页端带上此 UA 可解锁「需在必应 App 完成」的隔日子任务（isLocked 翻转为 false），用于月度打卡 punchcard 通道
        rewardsApp: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36 Edg/153.0.0.0 MSRewards/Desktop/1.3.0",
    },
    cookie: {
        bing: "",
    },
    api: {
        mode: GM_getValue("Config.api", "offline"),
        arr: [
            ["hot.baiwumm.com", {
                url: "https://hot.baiwumm.com/api/",
                hot: ["weibo", "douyin", "baidu", "toutiao", "thepaper", "qq", "netease", "zhihu"],
            }],
            ["hot.cnxiaobai.com", {
                url: "https://cnxiaobai.com/DailyHotApi/",
                hot: ["weibo", "douyin", "baidu", "toutiao", "thepaper", "qq-news", "netease-news", "zhihu"],
            }],
            ["hot.nntool.cc", {
                url: "https://hotapi.nntool.cc/",
                hot: ["weibo", "douyin", "baidu", "toutiao", "thepaper", "qq-news", "netease-news", "zhihu"],
            }],
        ],
    },
    tasks: {
        sign: GM_getValue("Tasks.sign", true),
        read: GM_getValue("Tasks.read", true),
        promos: GM_getValue("Tasks.promos", true),
        edge: GM_getValue("Tasks.edge", true),
        bonus: GM_getValue("Tasks.bonus", true),
        search: GM_getValue("Tasks.search", true),
        punchcard: GM_getValue("Tasks.punchcard", true),
    },
    bing: {
        region: "CN",
        status: GM_getValue("Config.lock", true),
        repo: "https://github.com/geoisam/FuckScripts/",
        time: 3210,
        span: GM_getValue("Config.span", 30),
        code: 0,
        token: false,
        error: 0,
        tasks: {
            get sign() {
                return FuckD.sign.date
            },
            get read() {
                return FuckD.read.date
            },
            get promos() {
                return FuckD.promos.date
            },
            get streak() {
                return FuckD.streak.date
            },
            get search() {
                return FuckD.search.date
            },
            get punchcard() {
                return FuckD.punchcard.date
            },
        },
        mainland: 1,
        end: 1,
    },
    sign: {
        times: 0,
        point: -1,
        end: 0,
    },
    read: {
        times: 0,
        point: 0,
        end: 0,
    },
    promos: {
        times: 0,
        token: 0,
        end: 0,
    },
    streak: {
        times: 0,
        point: 0,
        end: 0,
    },
    edge: {
        times: 0,
        end: 0,
        running: false,
    },
    search: {
        device: "",
        word: {
            list: [],
            index: 0,
        },
        times: 0,
        progressNow: 0,
        pc: {
            progress: 0,
            max: 1,
        },
        m: {
            progress: 0,
            max: 1,
        },
        index: 0,
        end: 0,
    },
    punchcard: {
        times: 0,
        end: 0,
    },
}

const FuckF = {
    getRandomNum(num) {
        return Math.floor(Math.random() * num)
    },
    getScopeRandomNum(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min)
    },
    getRandomArr(arr) {
        return arr.sort(() => {
            return Math.random() - 0.5
        })
    },
    getRandomUUID(only = false) {
        const uuid = crypto.randomUUID()
        const sid = uuid.replace(/-/g, "").toUpperCase()
        return only ? sid : uuid
    },
    getTimestamp(start = 0, end = 13) {
        const timestamp = Date.now()
        const num = timestamp.toString().substring(start, end)
        return Number(num)
    },
    getDatetime(num = false, slash = true) {
        const today = new Date()
        const year = today.getFullYear()
        let month = today.getMonth() + 1
        let day = today.getDate()
        month = month < 10 ? "0" + month : month
        day = day < 10 ? "0" + day : day
        const dateNow = num ? Number(`${year}${month}${day}`) : slash ? `${month}/${day}/${year}` : `${year}-${month}-${day}`
        return dateNow
    },
    isJSON(s) {
        try {
            const j = JSON.parse(s)
            const p = Array.isArray(j) || (typeof j === "object" && j !== null)
            return p ? true : false
        } catch {
            return false
        }
    },
    log(title, text, push = false) {
        GM_log(title + text + "🔚")
        if (!GM_getValue("Notice.bro", true) || !push) return
        GM_notification({
            text: text,
            title: GM_info.script.name + title,
            onclick: () => {
                if (typeof push === 'string' && push.startsWith('http')) {
                    GM_openInTab(push, { active: true, insert: true, setParent: true });
                } else if (title.includes("🔵") || title.includes("🎉")) {
                    GM_openInTab("https://rewards.bing.com/earn", { active: true, insert: true, setParent: true });
                } else {
                    GM_openInTab("https://rewards.bing.com/dashboard", { active: true, insert: true, setParent: true });
                }
            },
        })
    },
    xhr(options, only = false) {
        return new Promise((resolve, reject) => {
            const start = FuckF.getTimestamp();
            try {
                GM_xmlhttpRequest({
                    ...options,
                    timeout: 15000,
                    ontimeout: () => {
                        const cost = (FuckF.getTimestamp() - start) / 1000;
                        reject(new Error(`请求超时！用时 ${cost} 秒`));
                    },
                    onload: (xhr) => {
                        const cost = (FuckF.getTimestamp() - start) / 1000;
                        if (xhr.status >= 200 && xhr.status < 300) {
                            resolve(only ? xhr.finalUrl : xhr.responseText);
                            return;
                        }
                        const redirectStatuses = [301, 302, 307, 308];
                        if (redirectStatuses.includes(xhr.status)) {
                            const match = xhr.responseHeaders?.match(/Location:\s*(.*?)\s*\r?\n/i);
                            resolve(match ? match[1] : false);
                            return;
                        }
                        // 附带响应体前 120 字符摘要：500 多为 React flight 错误帧（如 1:E{"digest":"..."}），
                        // 没有响应体内容则服务端报错原因完全是排查盲区
                        const bodySnippet = (xhr.responseText || "").replace(/\s+/g, " ").slice(0, 120);
                        reject(new Error(`请求失败，用时 ${cost} 秒，状态码：${xhr.status}${bodySnippet ? ` 🔛${bodySnippet}` : ""}`));
                    },
                    onerror: (err) => {
                        const cost = (FuckF.getTimestamp() - start) / 1000;
                        let errDetail = "";
                        if (err) {
                            errDetail = err.error || err.statusText || (typeof err === "object" ? JSON.stringify(err) : err);
                        } else {
                            errDetail = "未知网络错误";
                        }
                        reject(new Error(`请求异常！用时 ${cost} 秒 🔛${errDetail}`));
                    },
                });
            } catch (e) {
                reject(e);
            }
        });
    },
}

FuckF.getRandomSubstring = (str, min = 20, max = 32) => {
    const length = str.length
    if (length <= min) {
        return str
    }
    const randomLength = FuckF.getScopeRandomNum(min, max)
    return str.substring(0, randomLength)
}

FuckF.getRandomApiHot = () => {
    const lastIndex = parseInt(GM_getValue("Config.index", -1))
    const filteredArr = FuckD.api.hot.filter((name, index) => index != lastIndex)
    const randomIndex = FuckF.getRandomNum(filteredArr.length)
    GM_setValue("Config.index", randomIndex)
    return filteredArr[randomIndex]
}

FuckF.getToken = async (url, maxRetries = 3) => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const result = await FuckF.xhr({ url: url });
            if (result && FuckF.isJSON(result)) {
                const res = JSON.parse(result);
                const refresh = res.refresh_token;
                const access = res.access_token;
                if (refresh && access) {
                    GM_setValue("Config.token", refresh);
                    FuckD.bing.token = access;
                    return true;
                }
            }
        } catch (e) {
            if (e.message.includes("400") || e.message.includes("401")) {
                return false;
            }
            if (attempt < maxRetries) {
                await new Promise(resolve => setTimeout(resolve, 3210));
                continue;
            }
            FuckF.log("🔴", `Token 请求失败！🔛${e.message}`);
            return null;
        }
    }
    return null;
}

FuckF.renewToken = async () => {
    if (!FuckD.tasks.sign && !FuckD.tasks.read && !FuckD.tasks.edge) return true;
    let refreshToken = GM_getValue("Config.token", false);
    const authUrl = "https://login.live.com/oauth20_authorize.srf?client_id=0000000040170455&response_type=code&scope=service::prod.rewardsplatform.microsoft.com::MBI_SSL&redirect_uri=https://login.live.com/oauth20_desktop.srf";

    const pollForAuthCodeFromWindow = (authWindow, maxSeconds) => {
        return new Promise((resolve) => {
            const startTime = Date.now();
            const checkInterval = setInterval(() => {
                try {
                    if (authWindow && !authWindow.closed) {
                        const currentUrl = authWindow.location.href;
                        if (currentUrl && currentUrl.includes("code=")) {
                            const urlParams = new URLSearchParams(new URL(currentUrl).search);
                            const authCode = urlParams.get("code");
                            if (authCode && authCode.length > 10) {
                                clearInterval(checkInterval);
                                const fullCode = `https://login.live.com/oauth20_desktop.srf?code=${authCode.trim()}`;
                                GM_setValue("Config.code", fullCode);
                                GM_setValue("Config.token", false);
                                FuckF.log("🟢", "通过子窗口检测到授权码");
                                resolve(authCode.match(/M\.[^&]+/));
                                return;
                            }
                        }
                    }
                } catch (e) {}

                if (Date.now() - startTime >= maxSeconds * 1000) {
                    clearInterval(checkInterval);
                    resolve(null);
                }
            }, 300);
        });
    };

    const pollForAuthCodeViaRequest = (maxSeconds) => {
        return new Promise((resolve) => {
            const startTime = Date.now();
            const checkInterval = setInterval(() => {
                GM_xmlhttpRequest({
                    method: "GET",
                    url: "https://login.live.com/oauth20_desktop.srf",
                    onload: function(response) {
                        if (response.responseText) {
                            const match = response.responseText.match(/code=([^&"]+)/);
                            if (match && match[1] && match[1].length > 10) {
                                clearInterval(checkInterval);
                                const fullCode = `https://login.live.com/oauth20_desktop.srf?code=${match[1].trim()}`;
                                GM_setValue("Config.code", fullCode);
                                GM_setValue("Config.token", false);
                                FuckF.log("🟢", "通过GM_xmlhttpRequest检测到授权码");
                                resolve(match[1].match(/M\.[^&]+/));
                                return;
                            }
                        }
                    },
                    onerror: function() {}
                });

                if (Date.now() - startTime >= maxSeconds * 1000) {
                    clearInterval(checkInterval);
                    resolve(null);
                }
            }, 1000);
        });
    };

    const getAuthCodeFromCookie = function() {
        return new Promise((resolve) => {
            let settled = false;
            const finish = (v) => { if (!settled) { settled = true; resolve(v); } };
            // service_worker（@crontab 定时脚本）环境下 GM_cookie.get 回调可能永不触发，
            // 不加超时会令 await 永久挂起、整个授权码轮询卡死（日志表现为此后再无任何输出）
            setTimeout(() => finish(null), 3000);
            try {
                if (typeof GM_cookie !== 'undefined') {
                    GM_cookie.get("microsoft_rewards_auth_code", (cookie) => {
                        if (cookie && cookie.value) {
                            finish(decodeURIComponent(cookie.value));
                        } else {
                            finish(null);
                        }
                    });
                } else if (typeof document !== 'undefined') {
                    const value = "; " + document.cookie;
                    const parts = value.split("; microsoft_rewards_auth_code=");
                    if (parts.length === 2) {
                        finish(decodeURIComponent(parts.pop().split(";").shift()));
                    } else {
                        finish(null);
                    }
                } else {
                    finish(null);
                }
            } catch (e) {
                finish(null);
            }
        });
    };

    const pollForAuthCode = async (maxSeconds, excludeCode = "") => {
        return new Promise((resolve) => {
            let settled = false;
            let listenerId = null;
            const done = (match) => {
                if (settled) return;
                settled = true;
                if (listenerId != null && typeof GM_removeValueChangeListener !== 'undefined') {
                    try { GM_removeValueChangeListener(listenerId); } catch (e) {}
                }
                resolve(match);
            };
            const accept = (code) => {
                if (settled || !code) return;
                const m = String(code).match(/M\.[^&]+/);
                // 排除已失效的旧授权码，防止读到清空前的残留快照值
                if (m && (!excludeCode || m[0] !== excludeCode)) done(m);
            };
            // 实时跨脚本监听：捕获脚本（同 storageName）写入 Config.code 后立即收到通知，
            // 不依赖本运行上下文内 GM_getValue 能否看到跨脚本写入
            if (typeof GM_addValueChangeListener !== 'undefined') {
                try {
                    listenerId = GM_addValueChangeListener("Config.code", (name, oldValue, newValue) => {
                        accept(newValue);
                    });
                } catch (e) {}
            }
            (async () => {
                const startTime = Date.now();
                while (!settled && Date.now() - startTime < maxSeconds * 1000) {
                    await new Promise(r => setTimeout(r, 500));
                    if (settled) break;
                    let code = GM_getValue("Config.code", "");
                    if (!code) {
                        const cookieCode = await getAuthCodeFromCookie();
                        if (cookieCode) {
                            code = cookieCode;
                            GM_setValue("Config.code", code);
                            GM_setValue("Config.token", false);
                        }
                    }
                    accept(code);
                }
                done(null);
            })();
        });
    };

    const fetchCodeLogic = async (msg) => {
        // 记录旧授权码：清空只影响存储，轮询时用它过滤残留的失效旧码
        const oldCodeMatch = (GM_getValue("Config.code", "") || "").match(/M\.[^&]+/);
        const excludeCode = oldCodeMatch ? oldCodeMatch[0] : "";
        GM_setValue("Config.code", "");
        FuckF.log("🟡", `${msg}，正在打开授权页面...`);

        let authWindow = null;
        if (typeof window !== 'undefined' && window.open) {
            authWindow = window.open(authUrl, '_blank', 'width=600,height=600');
        } else {
            GM_openInTab(authUrl, { active: true, insert: true, setParent: true });
        }

        await new Promise(resolve => setTimeout(resolve, 2000));
        FuckF.log("🟡", `请在打开的页面中完成登录授权，等待授权码...`);

        FuckF.log("🟡", `等待授权码...请在打开的授权页面中完成登录`);
        let codeMatch = await pollForAuthCode(120, excludeCode);
        if (codeMatch) {
            FuckF.log("🟢", "授权码获取成功");
            return codeMatch;
        }

        FuckD.bing.sendMSG = `${msg}，自动获取授权码超时，请手动复制授权页面URL后点击脚本菜单的"粘贴授权码"选项`;
        FuckF.log("🟡", FuckD.bing.sendMSG, authUrl);
        FuckF.send(FuckD.wh);

        codeMatch = await pollForAuthCode(120, excludeCode);
        if (codeMatch) {
            FuckF.log("🟢", "授权码手动获取成功");
            return codeMatch;
        }

        FuckD.tasks.sign = false;
        FuckD.tasks.read = false;
        return false;
    };
    if (!refreshToken) {
        let code = GM_getValue("Config.code", "");
        let codeMatch = code ? code.match(/M\.[^&]+/) : null;
        if (!codeMatch) {
            codeMatch = await fetchCodeLogic("检测到授权码为空");
            if (!codeMatch) return false;
        }
        const url = `https://login.live.com/oauth20_token.srf?client_id=0000000040170455&code=${encodeURIComponent(codeMatch[0])}&redirect_uri=https://login.live.com/oauth20_desktop.srf&grant_type=authorization_code`;
        const token = await FuckF.getToken(url);
        if (token === null) return false;
        if (!token) {
            codeMatch = await fetchCodeLogic("检测到授权码失效");
            if (!codeMatch) return false;
            return await FuckF.renewToken();
        }
        FuckD.bing.sendMSG = "Token 获取成功！";
        FuckF.log("🟢", FuckD.bing.sendMSG, true);
        FuckF.send(FuckD.wh);
        return true;
    } else {
        const url = `https://login.live.com/oauth20_token.srf?client_id=0000000040170455&refresh_token=${encodeURIComponent(refreshToken)}&scope=service::prod.rewardsplatform.microsoft.com::MBI_SSL&grant_type=REFRESH_TOKEN`;
        const token = await FuckF.getToken(url);
        if (token === null) return false;
        if (!token) {
            GM_setValue("Config.token", false);
            GM_setValue("Config.code", "");
            const codeMatch = await fetchCodeLogic("检测到 Token 失效");
            if (!codeMatch) return false;
            return await FuckF.renewToken();
        }
        return true;
    }
}

FuckF.getRewardsInfo = async (maxRetries = 3) => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const earnHtml = await FuckF.xhr({ url: "https://rewards.bing.com/earn" });
            const cleanHtml = earnHtml.replace(/\\"/g, '"');
            const balMatch = cleanHtml.match(/"balance":(\d+)/) || cleanHtml.match(/"availablePoints":(\d+)/);
            const keyword = '"pointsCounters":{';
            const idx = cleanHtml.indexOf(keyword);
            if (!balMatch || idx === -1) {
                if (attempt < maxRetries) {
                    await new Promise(resolve => setTimeout(resolve, 3210));
                    continue;
                }
                return false;
            }
            let balance = parseInt(balMatch[1]);
            let pcMax = 60, pcCur = 0;
            let mobMax = 0, mobCur = 0;
            let dailyPoint = 0;
            let todayTotal = 0;
            let start = idx + 17;
            let openBraces = 0;
            let end = start;
            for (let i = start; i < cleanHtml.length; i++) {
                if (cleanHtml[i] === '{') openBraces++;
                if (cleanHtml[i] === '}') {
                    openBraces--;
                    if (openBraces === 0) {
                        end = i + 1;
                        break;
                    }
                }
            }
            try {
                const pts = JSON.parse(cleanHtml.substring(start, end));
                pcMax = pts.pc?.max ?? 60;
                pcCur = pts.pc?.progress ?? 0;
                mobMax = pts.mobile?.max ?? 0;
                mobCur = pts.mobile?.progress ?? 0;
                dailyPoint = pts.dailyOffer ?? 0;
                todayTotal = pts.totalPoints ?? 0;
            } catch {
                FuckF.log("🟡", "仪表盘解析异常，将使用保底数值");
            }
            FuckD.bing.todayTotalPoints = todayTotal;
            return {
                userStatus: {
                    availablePoints: balance,
                    counters: {
                        pcSearch: [{ pointProgress: pcCur, pointProgressMax: pcMax }],
                        mobileSearch: [{ pointProgress: mobCur, pointProgressMax: mobMax }],
                        dailyPoint: [{ pointProgress: dailyPoint }]
                    }
                }
            };
        } catch (e) {
            if (attempt < maxRetries) {
                await new Promise(resolve => setTimeout(resolve, 3210));
                continue;
            }
            FuckF.log("🔴", `仪表盘请求失败！🔛 ${e.message}`);
        }
    }
    return false;
}

FuckF.taskSign = async () => {
    if (!FuckD.tasks.sign || FuckD.sign.date == FuckD.bing.dateNowNum || FuckD.sign.times > 2 || FuckD.sign.end > 0) {
        FuckD.sign.end++
        return true
    }
    if (FuckD.sign.point >= 0) {
        FuckD.sign.end++
        if (FuckD.sign.date != FuckD.bing.dateNowNum) {
            FuckD.sign.date = FuckD.bing.dateNowNum
            FuckD.bing.sendMSG = `📅签入任务已完成！\n${FuckD.sign.point > 0 ? `✨今日签入奖励：${FuckD.sign.point}` : "🍵今日已签入，无法二次签入"}`
            FuckF.log("🔵", FuckD.bing.sendMSG, true)
            FuckF.send(FuckD.wh)
        }
        GM_setValue("Config.tasks", FuckD.bing.tasks)
        return true
    }
    try {
        const envStatus = await FuckF.mainlandCheck();
        if (envStatus === 1) {
            FuckD.bing.code = -1;
            return true;
        }
        const region = FuckD.bing.status ? "cn" : FuckD.bing.region.toLowerCase()
        const result = await FuckF.xhr({
            method: "POST",
            url: "https://prod.rewardsplatform.microsoft.com/dapi/me/activities",
            headers: {
                "content-type": "application/json; charset=UTF-8",
                "user-agent": FuckD.ua.m,
                "authorization": `Bearer ${FuckD.bing.token}`,
                "x-rewards-appid": "SAAndroid/31.4.2110003555",
                "x-rewards-ismobile": "true",
                "x-rewards-country": region,
                "x-rewards-partnerid": "startapp",
                "x-rewards-flights": "rwgobig",
            },
            data: JSON.stringify({
                "amount": 1,
                "attributes": {},
                "id": FuckF.getRandomUUID(),
                "type": 103,
                "country": region,
                "risk_context": {},
                "channel": "SAAndroid",
            }),
        })
        if (result && FuckF.isJSON(result)) {
            FuckD.sign.times = 0
            const res = JSON.parse(result)
            const point = res.response.activity.p
            FuckD.sign.point = point || 0;
            GM_setValue("Config.signPoint", FuckD.sign.point);
        } else {
            FuckD.sign.times++
        }
    } catch (e) {
        FuckF.log("🔴", `签入任务出错！🔛${e.message}`)
        FuckD.sign.times++;
    }
    return false
}

FuckF.getReadPro = async () => {
    try {
        const result = await FuckF.xhr({
            url: "https://prod.rewardsplatform.microsoft.com/dapi/me?channel=SAAndroid&options=613",
            headers: {
                "content-type": "application/json; charset=UTF-8",
                "user-agent": FuckD.ua.m,
                "authorization": `Bearer ${FuckD.bing.token}`,
                "x-rewards-appid": "SAAndroid/31.4.2110003555",
                "x-rewards-ismobile": "true",
            },
        });
        if (result && FuckF.isJSON(result)) {
            const res = JSON.parse(result);
            const promos = res.response?.promotions || [];
            const readTask = promos.find(x => x.attributes?.offerid === 'ENUS_readarticle3_30points');
            if (readTask) {
                const progress = parseInt(readTask.attributes.progress) || 0;
                const max = parseInt(readTask.attributes.max) || 30;
                return { progress, max };
            }
        }
    } catch (e) {
        FuckF.log("🔴", `阅读进度获取出错！🔛${e.message}`);
    }
    return false;
}

// 拉取 dapi APP 通道的全量活动列表（每日打卡等 APP 专属活动在此下发，与阅读进度同源）
FuckF.getPromotions = async () => {
    try {
        const result = await FuckF.xhr({
            url: "https://prod.rewardsplatform.microsoft.com/dapi/me?channel=SAAndroid&options=613",
            headers: {
                "content-type": "application/json; charset=UTF-8",
                "user-agent": FuckD.ua.m,
                "authorization": `Bearer ${FuckD.bing.token}`,
                "x-rewards-appid": "SAAndroid/31.4.2110003555",
                "x-rewards-ismobile": "true",
            },
        });
        if (result && FuckF.isJSON(result)) {
            return JSON.parse(result).response?.promotions || [];
        }
    } catch (e) {
        FuckF.log("🔴", `活动列表获取出错！🔛${e.message}`);
    }
    return false;
}

FuckF.taskRead = async () => {
    if (!FuckD.tasks.read || FuckD.read.times > 2 || FuckD.read.end > 0) {
        FuckD.read.end++;
        return true;
    }
    try {
        const readPro = await FuckF.getReadPro();
        if (!readPro) {
            FuckD.read.times++
            return false;
        }
        let cur = readPro.progress || 0;
        let max = readPro.max || 30;
        if (FuckD.read.date != FuckD.bing.dateNowNum) {
            FuckF.log("📖", `阅读进度获取成功：${cur}/${max}`);
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        if (cur >= max) {
            if (FuckD.read.date != FuckD.bing.dateNowNum) {
                FuckF.log("📖", "接口返回进度已满，但本地无今日记录，强制开始阅读...");
                cur = 0;
                max = 30;
            } else {
                FuckD.read.end++;
                return true;
            }
        }
        const envStatus = await FuckF.mainlandCheck();
        if (envStatus === 1) {
            FuckD.bing.code = -1;
            return true;
        }
        const region = FuckD.bing.status ? "cn" : FuckD.bing.region.toLowerCase();
        FuckD.read.date = 0;
        const readsNeeded = Math.ceil((max - cur) / 3);
        for (let i = 0; i < readsNeeded; i++) {
            await FuckF.xhr({
                method: "POST",
                url: "https://prod.rewardsplatform.microsoft.com/dapi/me/activities",
                headers: {
                    "content-type": "application/json; charset=UTF-8",
                    "user-agent": FuckD.ua.m,
                    "authorization": `Bearer ${FuckD.bing.token}`,
                    "x-rewards-appid": "SAAndroid/31.4.2110003555",
                    "x-rewards-ismobile": "true",
                    "x-rewards-country": region,
                },
                data: JSON.stringify({
                    "amount": 1,
                    "country": region,
                    "id": FuckF.getRandomUUID(),
                    "type": 101,
                    "attributes": {
                        "offerid": "ENUS_readarticle3_30points",
                    },
                }),
            });
            FuckF.log("📖", `正在阅读第 ${i + 1}/${readsNeeded} 篇文章...`);
            const waitTime = FuckF.getScopeRandomNum(3000, 7000);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
        FuckD.read.end++;
        if (FuckD.read.date != FuckD.bing.dateNowNum) {
            FuckD.read.date = FuckD.bing.dateNowNum;
            GM_setValue("Config.tasks", FuckD.bing.tasks);
            const actualCur = cur + (readsNeeded * 3);
            const finalCur = actualCur > max ? max : actualCur;
            GM_setValue("Config.readPoint", finalCur);
            FuckD.bing.sendMSG = `📖阅读任务已完成！\n✨今日阅读奖励：${finalCur}/${max}`;
            FuckF.log("🔵", FuckD.bing.sendMSG, true);
            FuckF.send(FuckD.wh);
        }
        return true;
    } catch (e) {
        FuckF.log("🔴", `阅读任务出错！🔛${e.message}`);
        FuckD.read.times++;
        return false;
    }
}

// 构建 Next.js 新版路由状态树（next-router-state-tree 请求头）
FuckF.getRouterStateTree = (segment) => {
    const refreshFlag = 4096;
    const tree = ["", {
        children: ["(nav)", {
            children: [segment, { children: ["PAGE", {}, null, null, refreshFlag] }, null, null, refreshFlag]
        }, null, null, refreshFlag]
    }, null, null, refreshFlag + 16];
    return encodeURIComponent(JSON.stringify(tree));
}

// 清除 action 标识缓存（404 时调用，下次运行重新提取）
FuckF.clearActionCache = () => {
    GM_setValue("Config.actionMap", "");
    GM_setValue("Config.actionId", "");
    GM_setValue("Config.actionBuild", "");
    GM_setValue("Config.actionDpl", "");
}

// 从 rewards.bing.com 页面引用的 JS 包中动态提取 server action ID 映射表
// 微软每次重新部署站点都会变更这些 ID，硬编码会导致交卷/领取请求 404
// 返回 { ids: { reportActivity, reportClaimAllPoints, ... }, dpl }
FuckF.getRewardsAction = async (htmls) => {
    const REQUIRED_ACTIONS = ["reportActivity", "reportClaimAllPoints"];
    const cached = {
        build: GM_getValue("Config.actionBuild", ""),
        map: GM_getValue("Config.actionMap", ""),
        id: GM_getValue("Config.actionId", ""),
        dpl: GM_getValue("Config.actionDpl", ""),
    };
    let cachedMap = {};
    try { cachedMap = JSON.parse(cached.map) || {}; } catch {}
    if (!cachedMap.reportActivity && cached.id) cachedMap.reportActivity = cached.id;
    try {
        let combined = (htmls || []).filter(Boolean).join("\n");
        let dpl = combined.match(/[?&](?:amp;)?dpl=([A-Za-z0-9._-]+)/i)?.[1] || "";
        let build = dpl || combined.match(/\/_next\/static\/([A-Za-z0-9._-]+)\//)?.[1] || "";
        // 缓存含交卷标识且构建未变化（或未提供页面、无从判断）时直接复用，避免重复抓取 JS 包
        // 领取标识缺失不阻断缓存，taskClaim 有已知标识兜底
        const cacheOK = cached.build && cachedMap.reportActivity;
        if (cacheOK && (!build || build === cached.build)) {
            return { ids: cachedMap, dpl: cached.dpl || dpl };
        }
        // 未提供页面 HTML 时（如领取任务单独调用）自行抓取
        if (!combined) {
            try {
                const dashHtml = await FuckF.xhr({ url: "https://rewards.bing.com/dashboard" });
                const earnHtml = await FuckF.xhr({ url: "https://rewards.bing.com/earn" });
                combined = [dashHtml, earnHtml].filter(Boolean).join("\n");
                dpl = combined.match(/[?&](?:amp;)?dpl=([A-Za-z0-9._-]+)/i)?.[1] || "";
                build = dpl || combined.match(/\/_next\/static\/([A-Za-z0-9._-]+)\//)?.[1] || "";
            } catch {}
        }
        const chunkSet = new Set();
        const chunkRegex = /(?:\/_next\/)?(static\/(?:chunks|immutable|media)\/[\w\-./()]+?\.js)/g;
        let chunkMatch;
        while ((chunkMatch = chunkRegex.exec(combined)) !== null) {
            chunkSet.add("/_next/" + chunkMatch[1]);
        }
        // 从 webpack 运行时清单中枚举按需加载的动态分包（领取组件等不在初始分包中）
        // 新版分包哈希已非纯十六进制（如 4ds1xh5s3），放宽字符集
        const extractDynamicCandidates = (text, set) => {
            const re = /\b(\d{2,6}):"([a-z0-9_-]{8,})"/g;
            let m;
            while ((m = re.exec(text)) !== null) {
                set.add(`/_next/static/chunks/${m[1]}-${m[2]}.js`);
                set.add(`/_next/static/chunks/${m[1]}.${m[2]}.js`);
            }
        }
        // 页面相关静态分包优先
        const queue = [...chunkSet].sort((a, b) => {
            const score = (x) => /(dashboard|earn|page|layout|nav)/i.test(x) ? 0 : 1;
            return score(a) - score(b);
        }).slice(0, 40);
        const dynSeed = new Set();
        extractDynamicCandidates(combined, dynSeed);
        queue.push(...dynSeed);
        // 已知历史领取分包兜底（CDN 保留旧分包，新版清单不可枚举时仍可从中提取领取标识）
        queue.push("/_next/static/chunks/4069k0g6u-2ge.js");
        const hex = "[a-f0-9]{40,64}";
        const createRegex = new RegExp(`createServerReference\\s*\\)?\\s*\\(\\s*"(${hex})"([\\s\\S]{0,800}?)\\)`, "g");
        const registerRegex = new RegExp(`registerServerReference\\s*\\)?\\s*\\([^,]+,\\s*"(${hex})"([\\s\\S]{0,800}?)\\)`, "g");
        const nonNames = ["callServer", "findSourceMapURL", "encodeFormAction", "default"];
        const scanChunk = (js, map) => {
            for (const regex of [createRegex, registerRegex]) {
                regex.lastIndex = 0;
                let m;
                while ((m = regex.exec(js)) !== null) {
                    const names = [...(m[2] || "").matchAll(/"([A-Za-z_$][\w$]*)"/g)]
                        .map(x => x[1])
                        .filter(n => !nonNames.includes(n) && n.length > 3);
                    const name = names[names.length - 1];
                    if (name && !map[name]) map[name] = m[1];
                }
            }
        }
        const actionMap = {};
        const visited = new Set();
        let fetched = 0;
        const maxFetch = 100;
        while (queue.length && fetched < maxFetch) {
            const path = queue.shift();
            if (visited.has(path)) continue;
            visited.add(path);
            fetched++;
            try {
                const js = await FuckF.xhr({ url: `https://rewards.bing.com${path}` });
                if (!js) continue;
                scanChunk(js, actionMap);
                if (!REQUIRED_ACTIONS.every(k => actionMap[k])) {
                    // 已抓分包中可能含有更完整的动态分包清单，持续发现
                    const more = new Set();
                    extractDynamicCandidates(js, more);
                    for (const p of more) {
                        if (!visited.has(p) && !queue.includes(p)) queue.push(p);
                    }
                }
                if (REQUIRED_ACTIONS.every(k => actionMap[k])) break;
            } catch {}
        }
        if (actionMap.reportActivity) {
            GM_setValue("Config.actionBuild", build);
            GM_setValue("Config.actionMap", JSON.stringify(actionMap));
            GM_setValue("Config.actionDpl", dpl);
            FuckF.log("🧩", `服务端标识更新成功（build：${build || "未知"}，动作数：${Object.keys(actionMap).length}）`);
            return { ids: actionMap, dpl };
        }
        FuckF.log("🟡", "未能从页面 JS 包中提取服务端标识，使用缓存/默认值");
    } catch (e) {
        FuckF.log("🟡", `服务端标识获取出错！🔛${e.message}`);
    }
    return { ids: cachedMap, dpl: cached.dpl || "" };
}

// ---- 稳健提取数组（括号配平，不依赖固定锚点如 "discovery"，上游 3.6.50 合并）----
FuckF.extractArrayAfterKey = function(html, key) {
    const marker = '"' + key + '":';
    const idx = html.indexOf(marker);
    if (idx === -1) return null;
    let i = html.indexOf('[', idx);
    if (i === -1) return null;
    let depth = 0, inStr = false, esc = false;
    for (let j = i; j < html.length; j++) {
        const c = html[j];
        if (inStr) {
            if (esc) esc = false;
            else if (c === '\\') esc = true;
            else if (c === '"') inStr = false;
        } else {
            if (c === '"') inStr = true;
            else if (c === '[') depth++;
            else if (c === ']') { depth--; if (depth === 0) return html.slice(i, j + 1); }
        }
    }
    return null;
};

// ---- 日期归一化为 YYYYMMDD，解析失败返回 null（上游 3.6.50 合并）----
FuckF.normalizeDate = function(d) {
    if (d == null) return null;
    let m = String(d).match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);          // M/D/YYYY 或 MM/DD/YYYY
    if (m) return Number(m[3] + String(m[1]).padStart(2, '0') + String(m[2]).padStart(2, '0'));
    m = String(d).match(/(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);            // YYYY-M-D 或 YYYY/MM/DD
    if (m) return Number(m[1] + String(m[2]).padStart(2, '0') + String(m[3]).padStart(2, '0'));
    const t = Date.parse(d);
    if (!isNaN(t)) { const dt = new Date(t); return Number(dt.getFullYear() + String(dt.getMonth()+1).padStart(2, '0') + String(dt.getDate()).padStart(2, '0')); }
    return null;
};

// ---- 每日额外积分（仅当 dashboard 页面打开时，按 XPath 点击按钮，上游 3.6.50 合并）----
FuckF.claimExtraPoints = async () => {
    if (!FuckD.tasks.bonus) return;
    const todayNum = FuckF.getDatetime(true);
    if (GM_getValue("Config.bonusDate", 0) == todayNum) {
        GM_log("每日额外积分今日已领取，跳过");
        return;
    }
    const xpath = "/html/body/div[2]/div[2]/div/main/div/button[2]/div/div";
    const findBtn = () => {
        let btn = null;
        try {
            btn = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        } catch (e) {}
        if (btn && btn.offsetParent !== null) return btn;          // 仅当按钮可见才点击
        const fallbacks = ["main button", "div[class*='bonus'] button", "button[class*='reward']"];
        for (const sel of fallbacks) {
            const els = document.querySelectorAll(sel);
            for (const el of els) {
                const txt = (el.innerText || el.textContent || "").replace(/\s/g, "");
                if (/额外/.test(txt)) return el;   // 仅匹配含"额外"的按钮，避免误点页面其它"积分"按钮
            }
        }
        return null;
    };
    let tries = 0;
    const tick = () => {
        const btn = findBtn();
        if (btn) {
            btn.click();
            GM_setValue("Config.bonusDate", todayNum);
            FuckF.log("🎉", "已点击每日额外积分按钮");
            return;
        }
        if (tries++ < 40) setTimeout(tick, 1000);
        else FuckF.log("🟡", "未找到每日额外积分按钮（XPath 可能已变更），请反馈页面结构");
    };
    tick();
};

FuckF.taskPromos = async () => {
    if (!FuckD.tasks.promos || FuckD.promos.times > 2 || FuckD.promos.end > 0 || (!GM_getValue("Config.keep", true) && FuckD.promos.date == FuckD.bing.dateNowNum)) {
        FuckD.promos.end++;
        return true;
    }
    let promosArr = [];
    let seenIds = new Set();
    let dashPoints = 0, dashMax = 0;
    let earnPoints = 0, earnMax = 0;
    let dashHtml = "", earnHtml = "";
    // 锁定任务（isLocked: true / isUnlocked: false，即 unlockCriteria 为 rewardsApp 的一类，
    // 需在必应 Windows App 登录账号后解锁点击；服务端始终不标记完成，
    // 脚本每轮 cron 都会重复执行并重复推送，故解析阶段直接排除）：
    const isLockedCard = (c) => {
        if (!c) return false;
        // 结构化锁定字段优先：明确已解锁即网页端可点击记账，
        // 不能因 unlockCriteria 仍带 newLevel2 之类历史门槛值就判锁定（当前可点击计分的 +15 任务正是这种形态）
        if (c.isLocked === false && c.isUnlocked === true) return false;
        if (c.isLocked === true || c.isUnlocked === false) return true;
        // 结构化字段缺失（$undefined，如手机端每日活动）时，退回 unlockCriteria / offerId 模式排除；
        // 注意 destination 的 rnoreward=1 不是锁定信号（每日活动 destination 也恒带它，但交卷通道可正常记账）
        const noUnlockCriteria = !c.unlockCriteria || c.unlockCriteria === "$undefined";
        return (typeof c.unlockCriteria === "string" && !noUnlockCriteria) ||
            /Moreactivities_RewardsApp/i.test(c.offerId || c.name || "");
    };
    // 注意：完成报告位于 try 块之外，计数必须声明在函数作用域，否则报告阶段会 ReferenceError
    let lockedCount = 0;
    let lockedPoints = 0;
    try {
        dashHtml = await FuckF.xhr({ url: "https://rewards.bing.com/dashboard" });
        lastRewardHtml.dash = dashHtml;
        const cleanDash = dashHtml.replace(/\\"/g, '"');
        const todayNum = FuckD.bing.dateNowNum;
        let dailySetItems = [];
        const dashRaw = FuckF.extractArrayAfterKey(cleanDash, "dailySetItems");
        if (dashRaw) {
            try { dailySetItems = JSON.parse(dashRaw.replace(/\\"/g, '"')); }
            catch (e) { FuckF.log("🟡", `dailySetItems 解析失败，尝试兜底旧写法 🔛${e.message}`); }
        }
        if (!dailySetItems.length) {
            // 兜底：兼容旧版带 "discovery" 锚点的写法
            const legacy = cleanDash.match(/"dailySetItems":(\[.*?\]),"discovery"/);
            if (legacy && legacy[1]) { try { dailySetItems = JSON.parse(legacy[1].replace(/\\"/g, '"')); } catch (e) {} }
        }
        for (const item of dailySetItems) {
            if (item.points === 0 || seenIds.has(item.offerId)) continue;
            if (isLockedCard(item)) {
                lockedCount++;
                lockedPoints += item.points || 0;
                seenIds.add(item.offerId);
                continue;
            }
            const itemDate = FuckF.normalizeDate(item.date);
            if (itemDate !== null && itemDate !== todayNum) continue;   // 解析不出日期则不跳过，避免误杀今日活动
            seenIds.add(item.offerId);
            dashMax += item.points;
            if (item.isCompleted) {
                dashPoints += item.points;
            } else {
                promosArr.push({
                    id: item.offerId,
                    hash: item.hash,
                    url: "https://rewards.bing.com/dashboard",
                    points: item.points,
                    type: "dash"
                });
            }
        }
        earnHtml = await FuckF.xhr({ url: "https://rewards.bing.com/earn" });
        lastRewardHtml.earn = earnHtml;
        const cleanEarn = earnHtml.replace(/\\"/g, '"');
        const daysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const todayDayEn = daysEn[new Date().getDay()];
        const skipCompletedFilter = (offerId) => {
            if (offerId.includes("Evergreen") && !offerId.includes(todayDayEn)) return true;
            const dateMatch = offerId.match(/(20\d{6})/);
            if (dateMatch && dateMatch[1] !== FuckD.bing.dateNowNum.toString()) return true;
            if (/(w[1-5]|week|month)/i.test(offerId) || /(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\d{2}/i.test(offerId)) return true;
            return false;
        };
        // 优先结构化解析 activityCards：只有这样才能读到 isLocked / isUnlocked / unlockCriteria
        let earnCards = null;
        const earnCardsRaw = FuckF.extractArrayAfterKey(cleanEarn, "activityCards");
        if (earnCardsRaw) {
            try {
                const arr = JSON.parse(earnCardsRaw.replace(/\\"/g, '"'));
                if (Array.isArray(arr) && arr.length) earnCards = arr;
            } catch (e) {}
        }
        if (earnCards) {
            for (const card of earnCards) {
                const points = parseInt(card.points) || 0;
                const offerId = card.offerId || card.name || "";
                if (points === 0 || !offerId || seenIds.has(offerId)) continue;
                if (isLockedCard(card)) {
                    lockedCount++;
                    lockedPoints += points;
                    seenIds.add(offerId);
                    continue;
                }
                if (card.isCompleted && skipCompletedFilter(offerId)) continue;
                seenIds.add(offerId);
                earnMax += points;
                if (card.isCompleted) {
                    earnPoints += points;
                } else {
                    promosArr.push({
                        id: offerId,
                        hash: card.hash || "",
                        url: "https://rewards.bing.com/earn",
                        points: points,
                        type: "earn"
                    });
                }
            }
        } else if (cleanEarn.includes('"activityCards":[')) {
            const taskRegex = /"isCompleted":(true|false).*?"points":(\d+).*?"offerId":"([^"]+)","hash":"([^"]+)"/g;
            let match;
            while ((match = taskRegex.exec(cleanEarn)) !== null) {
                const isCompleted = match[1] === "true";
                const points = parseInt(match[2]);
                const offerId = match[3];
                const hash = match[4];
                if (points === 0 || seenIds.has(offerId)) continue;
                // 正则读不到结构化字段，退回上下文扫描锁定字段 + offerId 模式排除 App 锁定任务
                // （不能泛扫 unlockCriteria：已解锁任务也可能带 newLevel2 之类历史门槛值）
                const ctx = cleanEarn.substring(Math.max(0, match.index - 500), match.index + 500);
                if (/Moreactivities_RewardsApp/i.test(offerId) || /"isLocked":true/.test(ctx) || /"isUnlocked":false/.test(ctx)) {
                    lockedCount++;
                    lockedPoints += points;
                    seenIds.add(offerId);
                    continue;
                }
                if (isCompleted && skipCompletedFilter(offerId)) continue;
                seenIds.add(offerId);
                earnMax += points;
                if (isCompleted) {
                    earnPoints += points;
                } else {
                    promosArr.push({
                        id: offerId,
                        hash: hash,
                        url: "https://rewards.bing.com/earn",
                        points: points,
                        type: "earn"
                    });
                }
            }
        }
    } catch (e) {
        FuckF.log("🔴", `活动解析出错！🔛${e.message}`);
    }
    const todayPromosSaved = FuckD.promos.date == FuckD.bing.dateNowNum ? GM_getValue("Config.promosPoint", 0) : 0;
    GM_setValue("Config.promosPoint", Math.max(todayPromosSaved, dashPoints + earnPoints));
    const dashTasks = promosArr.filter(i => i.type === 'dash').length;
    const earnTasks = promosArr.filter(i => i.type === 'earn').length;
    const totalNewTasks = dashTasks + earnTasks;
    if (totalNewTasks < 1) {
        FuckD.promos.end++;
        if (FuckD.promos.date != FuckD.bing.dateNowNum) {
            FuckD.promos.date = FuckD.bing.dateNowNum;
            GM_setValue("Config.tasks", FuckD.bing.tasks);
            const dashReport = dashMax > 0 ? `\n📱手机端活动：${dashPoints}/${dashMax}` : "";
            const earnReport = earnMax > 0 ? `\n💻电脑端活动：${earnPoints}/${earnMax}` : "";
            const lockedReport = lockedCount > 0 ? `\n🔒${lockedCount} 个任务需在必应 App 完成（${lockedPoints} 分），已跳过` : "";
            FuckD.bing.sendMSG = `🧩活动任务已完成！${dashReport}${earnReport}${lockedReport}`;
            FuckF.log("🔵", FuckD.bing.sendMSG, true);
            FuckF.send(FuckD.wh);
        }
        return true;
    }
    try {
        const envStatus = await FuckF.mainlandCheck();
        if (envStatus === 1) {
            FuckD.bing.code = -1;
            return true;
        }
        FuckD.promos.date = 0;
        const actionInfo = await FuckF.getRewardsAction([dashHtml, earnHtml]);
        const actionId = actionInfo.ids.reportActivity || "70babbc81d2724f60d29a95c03b3d739cba77cea92";
        if (lockedCount > 0) FuckF.log("🔒", `跳过 ${lockedCount} 个需在必应 App 解锁的任务（${lockedPoints} 分，网页端无法完成）`);
        const taskMsgs = [];
        if (dashTasks > 0) taskMsgs.push(`${dashTasks}个手机端活动`);
        if (earnTasks > 0) taskMsgs.push(`${earnTasks}个电脑端活动`);
        FuckF.log("🧩", `检测到有${taskMsgs.join("、")}未完成，开始执行...`);
        await new Promise(resolve => setTimeout(resolve, 500));
        let dashCurrent = 1;
        let earnCurrent = 1;
        let skipped = 0;
        for (const item of promosArr) {
            if (item.type === 'dash') {
                FuckF.log("📱", `正在执行第${dashCurrent}/${dashTasks}个手机端活动...`);
                dashCurrent++;
            } else {
                FuckF.log("💻", `正在执行第${earnCurrent}/${earnTasks}个电脑端活动...`);
                earnCurrent++;
            }
            const reqHeaders = {
                "content-type": "text/plain;charset=UTF-8",
                "next-action": actionId,
                "referer": item.url,
                // 显式覆盖 origin：扩展 service_worker 请求被浏览器自动附带 Origin: chrome-extension://<id>，
                // 风控账号的 server action 对非站点同源 origin 直接抛 500（对照实验证实），
                // 若运行环境允许覆盖该头则可直接走通网页通道
                "origin": "https://rewards.bing.com",
                "next-router-state-tree": FuckF.getRouterStateTree(item.type === 'dash' ? "dashboard" : "earn"),
            };
            if (actionInfo.dpl) {
                reqHeaders["x-deployment-id"] = actionInfo.dpl;
            }
            const postData = JSON.stringify([
                item.hash,
                11,
                { "offerid": item.id, "isPromotional": "$undefined", "timezoneOffset": "-480" }
            ]);
            let posted = false;
            // 网页通道重试 3 次：500 多为服务端瞬时拒绝，404 为标识失效直接抛出由外层清缓存
            for (let attempt = 1; attempt <= 3 && !posted; attempt++) {
                try {
                    await FuckF.xhr({
                        method: "POST",
                        url: item.url,
                        headers: reqHeaders,
                        data: postData,
                    });
                    posted = true;
                } catch (e) {
                    if (e.message.includes("404")) throw e;
                    if (attempt === 3) {
                        FuckF.log("🟡", `活动 ${item.id} 网页通道 3 次失败：${e.message}`);
                    } else {
                        await new Promise(resolve => setTimeout(resolve, FuckF.getScopeRandomNum(2000, 4000)));
                    }
                }
            }
            // 网页通道失败且 token 可用时改走 dapi APP 通道（type 101 + offerid，幂等、即时记账，不做 origin 校验）；
            // 注意 renewToken 仅在签入/阅读任务启用时执行，必须先判 token 空
            if (!posted && FuckD.bing.token) {
                try {
                    const region = FuckD.bing.status ? "cn" : (FuckD.bing.region || "").toLowerCase();
                    const dapiResp = await FuckF.reportDapiActivity({ type: 101, attributes: { offerid: item.id }, region });
                    if (dapiResp && FuckF.isJSON(dapiResp)) {
                        const res = JSON.parse(dapiResp);
                        if (res.code === 0 && res.response?.activity) {
                            posted = true;
                            FuckF.log("🟢", `活动 ${item.id} 已改由 APP 通道完成`);
                        }
                    }
                } catch (e) {
                    FuckF.log("🟡", `活动 ${item.id} APP 通道兜底失败：${e.message}`);
                }
            }
            if (!posted) {
                // 双通道均失败：跳过该项继续队列，不累计积分，由下轮运行补做
                skipped++;
                FuckF.log("🔴", `活动 ${item.id} 双通道均失败，跳过该项`);
                continue;
            }
            if (item.type === 'dash') {
                dashPoints += item.points;
            } else {
                earnPoints += item.points;
            }
            GM_setValue("Config.promosPoint", Math.max(todayPromosSaved, dashPoints + earnPoints));
            if (dashCurrent - 1 + earnCurrent - 1 < totalNewTasks) {
                await new Promise(resolve => setTimeout(resolve, FuckF.getScopeRandomNum(2000, 4000)));
            }
        }
        // 复核：交卷后重拉 dashboard 核对每日活动完成状态，及早发现交卷标识失效（上游 3.6.50 合并）
        if (dashTasks > 0) {
            try {
                const reHtml = await FuckF.xhr({ url: "https://rewards.bing.com/dashboard" });
                const reClean = reHtml.replace(/\\"/g, '"');
                const reRaw = FuckF.extractArrayAfterKey(reClean, "dailySetItems");
                if (reRaw) {
                    const reItems = JSON.parse(reRaw.replace(/\\"/g, '"'));
                    const stillOpen = reItems.filter(x => !x.isCompleted && (x.points > 0) && (FuckF.normalizeDate(x.date) === FuckD.bing.dateNowNum)).length;
                    if (stillOpen > 0) FuckF.log("🟡", `复核发现仍有 ${stillOpen} 个每日活动未完成，交卷标识可能已失效`);
                }
            } catch (e) {}
        }
        if (skipped > 0) {
            // 有双通道均失败的项：不标记完成，下轮定时运行自动补做
            FuckF.log("🟡", `有 ${skipped} 个活动未完成（网页与 APP 通道均失败），等待下轮重试`);
            FuckD.promos.times++;
            return false;
        }
        FuckD.promos.end++;
        if (FuckD.promos.date != FuckD.bing.dateNowNum) {
            FuckD.promos.date = FuckD.bing.dateNowNum;
            GM_setValue("Config.tasks", FuckD.bing.tasks);
            const dashReport = dashMax > 0 ? `\n📱手机端活动：${dashPoints}/${dashMax}` : "";
            const earnReport = earnMax > 0 ? `\n💻电脑端活动：${earnPoints}/${earnMax}` : "";
            const lockedReport = lockedCount > 0 ? `\n🔒${lockedCount} 个任务需在必应 App 完成（${lockedPoints} 分），已跳过` : "";
            FuckD.bing.sendMSG = `🧩活动任务已完成！${dashReport}${earnReport}${lockedReport}`;
            FuckF.log("🔵", FuckD.bing.sendMSG, true);
            FuckF.send(FuckD.wh);
        }
        return true;
    } catch (e) {
        FuckF.log("🔴", `活动交卷出错！🔛${e.message}`);
        if (e.message.includes("404")) {
            // 标识已失效，清除缓存以便下次运行重新提取
            FuckF.clearActionCache();
        }
    }
    FuckD.promos.times++;
    return false;
}

// dapi APP 通道活动上报（与阅读/打卡同链路）：type 101 + offerid，服务端即时记账、幂等、不做 origin 校验。
// 作为网页通道（rewards.bing.com server action）被风控账号 500 拒绝时的交卷兜底，返回原始响应字符串，异常向上抛。
FuckF.reportDapiActivity = async ({ type, attributes = {}, region }) => {
    return await FuckF.xhr({
        method: "POST",
        url: "https://prod.rewardsplatform.microsoft.com/dapi/me/activities",
        headers: {
            "content-type": "application/json; charset=UTF-8",
            "user-agent": FuckD.ua.m,
            "authorization": `Bearer ${FuckD.bing.token}`,
            "x-rewards-appid": "SAAndroid/31.4.2110003555",
            "x-rewards-ismobile": "true",
            "x-rewards-country": region,
        },
        data: JSON.stringify({
            "amount": 1,
            "country": region,
            "id": FuckF.getRandomUUID(),
            "type": type,
            "attributes": attributes,
        }),
    });
};

// ===== 微软新「连续打卡任务」区（2026-10-09 起灰度，仅部分账号可见）=====
// 四个 partner 的 streak gamification 计数器（搜索/每日活动/Edge 分钟/APP 签到）与 offer 完成态相互独立：
// 2026-10-09 实测：DailySet 三个 offer 均 isCompleted:true 且积分到账、pc 搜索 60/60，但四个计数器全 0；
// dapi type 101、网页交卷、访问签到目的地均不能推进计数器，仅 Edge type 714 能部分进账分钟。
// 故本区只做「如实上报 + 观察」：完成判定与积分获取仍走原通道，汇总不再在计数器未进账时报「全部完成」。
FuckF.STREAK_NAMES = { bing: "必应搜索连签", dailyset: "每日连续打卡活动", edge: "Edge 浏览连签", bingapp: "必应应用连签" };
FuckF.parseStreakSection = (html) => {
    if (!html) return null;
    const clean = String(html).replace(/\\"/g, '"');
    // 直接遍历 streak model 本体并读模型内 partner 字段：flight 序列化中模型与卡片 instrument 标记
    // 的先后顺序不固定（dailyset 的模型在标记之前），以标记定位会漏卡
    const rows = [];
    const re = /"streak":\{/g;
    let m;
    while ((m = re.exec(clean)) !== null) {
        const model = clean.slice(m.index, m.index + 1500);
        const partner = (model.match(/"partner":"(bing|dailyset|edge|bingapp)"/) || [])[1];
        if (!partner || rows.some(r => r.partner === partner)) continue;
        const done = parseInt((model.match(/"activitiesCompleted":(\d+)/) || [])[1], 10) || 0;
        const total = parseInt((model.match(/"activitiesTotal":(\d+)/) || [])[1], 10) || 0;
        rows.push({ partner, done, total });
    }
    // 保持固定展示顺序
    const ordered = Object.keys(FuckF.STREAK_NAMES).map(p => rows.find(r => r.partner === p)).filter(Boolean);
    return ordered.length ? ordered : null;
};
FuckF.streakSectionBrief = (rows, onlyIncomplete = false) => (rows || [])
    .filter(r => r.total > 0 && (!onlyIncomplete || r.done < r.total))
    .map(r => `${FuckF.STREAK_NAMES[r.partner] || r.partner} ${r.done}/${r.total}`)
    .join("，");
// 诊断开关（GM 值 Config.diagStreak=1）：下一轮运行 dump dapi 双通道 promotions，
// 用于定位新连签计数器的上报入口（report_offer_type/offerid），dump 完自动归零
FuckF.diagStreakPromos = async () => {
    if (GM_getValue("Config.diagStreak", 0) != 1) return;
    GM_setValue("Config.diagStreak", 0);
    if (!FuckD.bing.token) {
        FuckF.log("🟡", "diagStreak：暂无 Token，无法诊断");
        return;
    }
    const region = FuckD.bing.status ? "cn" : (FuckD.bing.region || "").toLowerCase();
    const grab = async (label, url, headers) => {
        try {
            const result = await FuckF.xhr({ url, headers });
            if (!result || !FuckF.isJSON(result)) {
                FuckF.log("🟡", `diagStreak ${label}：响应非 JSON`);
                return;
            }
            const list = (JSON.parse(result).response || {}).promotions || [];
            FuckF.log("🔍", `diagStreak ${label}：共 ${list.length} 个 promotion`);
            for (const p of list) {
                const a = p.attributes || {};
                const hit = /streak|checkin|dailyset|flight|sapphire|search/i.test(`${p.name || ""}${a.offerid || ""}`) || a.report_offer_type != null;
                if (!hit) continue;
                FuckF.log("🔍", `diagStreak ${label}：name=${p.name} offerid=${a.offerid || "-"} type=${a.report_offer_type || "-"} perMin=${a.report_per_minutes || "-"} complete=${a.complete || "-"} progress=${a.progress ?? "-"}/${a.max ?? "-"}`);
            }
        } catch (e) {
            FuckF.log("🔴", `diagStreak ${label} 出错！🔛${e.message}`);
        }
    };
    await grab("edge", "https://prod.rewardsplatform.microsoft.com/dapi/me?channel=edge&options=Profile,Promotions", {
        "accept": "*/*",
        "content-type": "application/json; charset=UTF-8",
        "user-agent": FuckD.ua.pc,
        "authorization": `Bearer ${FuckD.bing.token}`,
        "x-rewards-appid": "EdgeDesktop",
        "x-rewards-partnerid": "EdgeHub",
        "x-rewards-country": region,
        "x-rewards-language": region === "cn" ? "zh-CN" : "en-US",
    });
    await grab("app", "https://prod.rewardsplatform.microsoft.com/dapi/me?channel=SAAndroid&options=613", {
        "content-type": "application/json; charset=UTF-8",
        "user-agent": FuckD.ua.m,
        "authorization": `Bearer ${FuckD.bing.token}`,
        "x-rewards-appid": "SAAndroid/31.4.2110003555",
        "x-rewards-ismobile": "true",
    });
};

// 每日上报一次新连签区进账状态（只记日志不推送）；区不存在（灰度未命中）不记日期，下轮再探
FuckF.taskStreakSection = async () => {
    // 诊断 dump 必须先于结算 await：resolve() 销毁沙箱会静默杀死未完成的异步请求
    await FuckF.diagStreakPromos();
    const today = FuckD.bing.dateNowNum;
    if (GM_getValue("Config.streakSectionDate", 0) == today) return;
    const section = FuckF.parseStreakSection(lastRewardHtml.dash);
    if (!section) return;
    GM_setValue("Config.streakSectionDate", today);
    const brief = FuckF.streakSectionBrief(section);
    const pending = FuckF.streakSectionBrief(section, true);
    if (pending) {
        FuckF.log("🟡", `新连续打卡区（灰度）：${brief} —— offer 完成与积分到账不等于连签进账，现有上报通道不被服务端新计数器承认，持续观察`);
    } else {
        FuckF.log("📅", `新连续打卡区（灰度）：${brief} 均已进账`);
    }
};

// 每日连续打卡活动（3 项共 30 分）
// 2026-08-19 起新版网页端不再下发 dailySetItems 数据（正则零匹配、DOM 卸载、旧 API 全部下线），
// 该活动仅在必应 APP 可见，改走 dapi APP 通道识别；若微软恢复网页端数据则自动让位给活动任务老路线。
// 打卡项结构（dapi 实测 2026-08-20）：offerid 为 Gamification_DailySet_区域_日期_Child序号，type=urlreward。
// 完成方式（2026-08-21 线上实测）：访问 attributes.destination（必应搜索 URL，即便携带 BTDSUOID 跟踪参数与移动 UA）不会记账；
// 正确链路与阅读任务同源：POST dapi/me/activities type 101 + offerid，服务端即时记账（响应 activity.p 为到账积分）、幂等。
FuckF.taskStreak = async () => {
    if (!FuckD.tasks.promos || FuckD.streak.date == FuckD.bing.dateNowNum || FuckD.streak.times > 2 || FuckD.streak.end > 0) {
        FuckD.streak.end++;
        return true;
    }
    try {
        // 弹性双通道：网页端仍有每日任务数据时由 taskPromos 处理，本通道自动让位
        const dashCache = (lastRewardHtml.dash || "").replace(/\\"/g, '"');
        if (dashCache.includes('"dailySetItems":[{')) {
            FuckD.streak.end++;
            if (FuckD.streak.date != FuckD.bing.dateNowNum) {
                FuckD.streak.date = FuckD.bing.dateNowNum;
                GM_setValue("Config.tasks", FuckD.bing.tasks);
                FuckF.log("📅", "网页端已恢复每日任务数据，打卡由活动任务通道处理");
            }
            return true;
        }
        const envStatus = await FuckF.mainlandCheck();
        if (envStatus === 1) {
            FuckD.bing.code = -1;
            return true;
        }
        const promos = await FuckF.getPromotions();
        if (!promos) {
            FuckD.streak.times++;
            return false;
        }
        // 打卡项识别：Gamification_DailySet 前缀 + offerid 内嵌今日日期
        //（精确排除 Sapphire_AppNewBonus_dailyset 新人奖励、Gamification_Sapphire_DailyCheckIn 累计签到等同名活动）
        const isStreakItem = (p) => /^Gamification_DailySet_/.test(p.attributes?.offerid || "");
        const isToday = (p) => {
            const dateMatch = (p.attributes?.offerid || "").match(/(20\d{6})/);
            return !dateMatch || dateMatch[1] == FuckD.bing.dateNowNum;
        };
        const isDone = (p) => {
            const attr = p.attributes || {};
            const progress = parseInt(attr.progress) || 0;
            const max = parseInt(attr.max) || 0;
            return max > 0 ? progress >= max : false;
        };
        const streakItems = promos.filter(p => isStreakItem(p) && isToday(p));
        const pending = streakItems.filter(p => !isDone(p));
        if (FuckD.streak.date != FuckD.bing.dateNowNum) {
            const brief = streakItems.length > 0 ? streakItems.map(p => {
                const attr = p.attributes || {};
                return `${(attr.offerid || "?").replace(/^Gamification_DailySet_\w+_/, "")} ${attr.progress ?? "?"}/${attr.max ?? "?"}`;
            }).join("，") : "无";
            FuckF.log("📅", `APP 通道打卡项（${streakItems.length} 项）：${brief}`);
        }
        let streakPoint = 0;
        if (pending.length > 0) {
            FuckD.streak.date = 0;
            FuckF.log("📅", `识别到 ${pending.length} 个未完成每日打卡项，通过 APP 通道上报完成...`);
            const region = FuckD.bing.status ? "cn" : FuckD.bing.region.toLowerCase();
            const donePoints = (items) => items.filter(isDone).reduce((s, p) => s + (parseInt(p.attributes?.max) || 0), 0);
            // dapi 活动上报（与阅读任务同链路，type 101 + offerid，实测服务端即时记账）；返回实际上账积分，异常返回 null
            const reportViaDapi = async (attr) => {
                const result = await FuckF.xhr({
                    method: "POST",
                    url: "https://prod.rewardsplatform.microsoft.com/dapi/me/activities",
                    headers: {
                        "content-type": "application/json; charset=UTF-8",
                        "user-agent": FuckD.ua.m,
                        "authorization": `Bearer ${FuckD.bing.token}`,
                        "x-rewards-appid": "SAAndroid/31.4.2110003555",
                        "x-rewards-ismobile": "true",
                        "x-rewards-country": region,
                    },
                    data: JSON.stringify({
                        "amount": 1,
                        "country": region,
                        "id": FuckF.getRandomUUID(),
                        "type": 101,
                        "attributes": { "offerid": attr.offerid || "" },
                    }),
                });
                if (result && FuckF.isJSON(result)) {
                    const res = JSON.parse(result);
                    if (res.code === 0 && res.response?.activity) {
                        return parseInt(res.response.activity.p) || 0;
                    }
                }
                return null;
            };
            const pointBefore = donePoints(streakItems);
            for (let i = 0; i < pending.length; i++) {
                const attr = pending[i].attributes || {};
                FuckF.log("📅", `正在完成打卡项 ${i + 1}/${pending.length}：${attr.title || attr.offerid}（+${parseInt(attr.max) || 0} 分）`);
                try {
                    const got = await reportViaDapi(attr);
                    if (got !== null) {
                        streakPoint += got;
                    } else {
                        FuckF.log("🟡", `打卡项 ${i + 1} 上报响应无到账记录（可能已完成过）`);
                    }
                } catch (e) {
                    FuckF.log("🔴", `打卡项 ${i + 1} 上报失败！🔛${e.message}`);
                }
                if (i < pending.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, FuckF.getScopeRandomNum(3000, 6000)));
                }
            }
            // 复核：以服务端进度为最终依据（实测记账即时生效）；复核失败时保留上报响应累计值
            await new Promise(resolve => setTimeout(resolve, 5000));
            const recheck = await FuckF.getPromotions();
            if (recheck) {
                const after = recheck.filter(p => isStreakItem(p) && isToday(p));
                streakPoint = Math.max(0, donePoints(after) - pointBefore);
            }
        }
        FuckD.streak.end++;
        if (FuckD.streak.date != FuckD.bing.dateNowNum) {
            FuckD.streak.date = FuckD.bing.dateNowNum;
            GM_setValue("Config.tasks", FuckD.bing.tasks);
            GM_setValue("Config.streakPoint", streakPoint);
            const sectionPending = FuckF.streakSectionBrief(FuckF.parseStreakSection(lastRewardHtml.dash), true);
            const sectionNote = sectionPending ? `\n⚠️新连签区未进账：${sectionPending}（灰度新计数器，现有通道不被承认）` : "";
            if (streakPoint > 0) {
                FuckD.bing.sendMSG = `📅每日打卡任务已完成！\n✨今日打卡奖励：${streakPoint}${sectionNote}`;
            } else if (pending.length > 0) {
                FuckD.bing.sendMSG = `📅打卡上报已执行但服务端未确认到账，请稍后在必应 APP 核对打卡进度`;
            } else if (streakItems.length > 0) {
                FuckD.bing.sendMSG = `📅每日打卡任务已完成！（APP 通道显示全部完成）${sectionNote}`;
            } else {
                FuckD.bing.sendMSG = `📅未在 APP 通道发现每日打卡项，请前往必应 APP 手动完成（约 30 分）`;
            }
            FuckF.log("🔵", FuckD.bing.sendMSG, true);
            FuckF.send(FuckD.wh);
        }
        return true;
    } catch (e) {
        FuckF.log("🔴", `每日打卡任务出错！🔛${e.message}`);
        FuckD.streak.times++;
        return false;
    }
}

// ===== 打卡任务（Punchcard / Quest）=====
// earn 页面「任务」板块里的 quest 有三类，任务集合会在同一个月内滚动变化，不能按月一次性锁定：
//   月度（ENWW_pcparent_FY27_BingMonthlyPC_Oct）、周度（WW_pcparent_RewardsApp_weekly_Exclusive_Octw3，
//   offerId 带周标记、每周一换 ID）、不定期限时活动（WW_pcparent_HalloweenQuestROWOct26 等）。
// pcchild 型 quest 含多个子任务，每个子项绑定一个日历日（错过即被服务端永久锁定），全部完成奖励 +50 积分；
// 另有一类「多天累计型」quest 整页没有子项，脚本无从交卷，详见下方 multiDay 分支。
// 完成方式：网页端 server action 交卷（通道A）+ dapi APP 通道 type 101 上报 offerid（通道B，与每日打卡/阅读同源）。
//
// ⚠️ 轮询节流：cron 每 20 分钟触发一次，若每次都拉 earn 页 + quest 详情页 + 交卷请求，
// 既浪费请求又容易被判异常。故引入持久化状态 Config.punchcardState：
//   { month: 202610, checkDay: 20261020, logDate: 20261008, pushDate: 20261008, v: "3.6.59.15",
//     quests: { [offerId]: { done, total, complete, multiDay, days, lastDoneDay } } }
// 节流分两层，各管一件事：
//   1) 任务集合复核（发现新上线/已下线的 quest）：每轮都做，但复用同一轮 taskPromos 已经抓好的
//      lastRewardHtml.earn，零额外请求；只有本轮拿不到现成 earn 时才自行抓，且由 checkDay 保证本日只抓一次。
//   2) quest 详情页拉取 + 交卷：按各 quest 的 lastDoneDay，每自然日最多一次。
// ⚠️ 绝不能用「缓存全部 complete」锁死整月（v3.6.59.12~14 的行为）：earn 的任务集合会在月内滚动变化
// —— 2026-10 实测同一个月内周常 Octw1（10-11 过期）→ Octw3（10-25 过期）滚动重发，月中还新上了
// HalloweenQuestROWOct26 限时任务。周常子项按日历日解锁、错过即永久作废，晚一天发现就是真丢分，
// 所以集合复核的间隔只能是「每轮／每天」，不能是「每月」。
// ⚠️ 每轮识别到活跃 quest 后会剔除服务端已不再下发的残留条目，避免缓存无限增长、进度简报混入过期任务。
// ⚠️ 服务端解锁按「星期几绑定的自然日」判定（周度打卡每个子项对应一个日历日，错过即永久锁定），
// 不是「上次完成后满 24h」。用 24h 滚动窗口会让可执行时刻逐日后移，一旦整天错过该日子项直接作废。
// ⚠️ 另有一类「多天累计型」活动（整页无 pcchild 子项，如「10 天中的 5 天搜索」），脚本无从交卷，
// 只能如实上报进度，处理方式见下面循环里的 multiDay 分支。

FuckF.getPunchcardState = () => {
    let st = null;
    try { st = JSON.parse(GM_getValue("Config.punchcardState", "") || "") || null; } catch {}
    if (!st || typeof st !== "object") st = {};
    if (!st.quests || typeof st.quests !== "object") st.quests = {};
    st.month = Number(st.month) || 0;
    st.checkDay = Number(st.checkDay) || 0;
    st.logDate = Number(st.logDate) || 0;
    // 旧版本存的是 lastDoneAt（毫秒时间戳，24h 滚动冷却）；迁移为 lastDoneDay（YYYYMMDD 自然日）。
    // 迁移后「昨天的完成」不再挡住今天，符合服务端按日历日解锁的真实规则。
    for (const id of Object.keys(st.quests)) {
        const q = st.quests[id] || {};
        if (!q.lastDoneDay && q.lastDoneAt) {
            const d = new Date(Number(q.lastDoneAt));
            q.lastDoneDay = Number(`${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`);
        }
        q.lastDoneDay = Number(q.lastDoneDay) || 0;
        st.quests[id] = q;
    }
    return st;
};

FuckF.savePunchcardState = (st) => GM_setValue("Config.punchcardState", JSON.stringify(st));

// 标记今日已处理（供「持续检测」关闭时的整体完成判定使用）
FuckF.punchcardMarkToday = () => {
    if (FuckD.punchcard.date != FuckD.bing.dateNowNum) {
        FuckD.punchcard.date = FuckD.bing.dateNowNum;
        GM_setValue("Config.tasks", FuckD.bing.tasks);
    }
};

// 每日仅记录一次（push 为 true 时同时推送通知），避免定时轮询刷屏。
// 进度类消息用独立的 pushDate 计数：否则同一天先记过「未解锁」提示后，
// 真正推进打卡的那条推送会被 logDate 挡掉，表现为任务做了却没有任何通知。
FuckF.punchcardLogOnce = (st, msg, push = false) => {
    st.pushDate = Number(st.pushDate) || 0;
    if (push) {
        if (st.pushDate == FuckD.bing.dateNowNum) return;
        st.pushDate = FuckD.bing.dateNowNum;
    } else if (st.logDate == FuckD.bing.dateNowNum) {
        return;
    }
    st.logDate = FuckD.bing.dateNowNum;
    FuckF.savePunchcardState(st);
    FuckD.bing.sendMSG = msg;
    FuckF.log(push ? "🔵" : "📋", msg, push);
    if (push) FuckF.send(FuckD.wh);
};

// 从 earn 页提取当前下发的 quest offerId 列表（quest 卡片结构："offerId":"ENWW_pcparent_...punchcard"）
FuckF.parseQuestIds = (html) => {
    const clean = String(html || "").replace(/\\"/g, '"');
    const ids = [];
    const re = /"offerId":"([^"]*punchcard[^"]*)"/g;
    let m;
    while ((m = re.exec(clean)) !== null) {
        if (!ids.includes(m[1])) ids.push(m[1]);
    }
    return ids;
};

FuckF.taskPunchcard = async () => {
    if (!FuckD.tasks.punchcard || FuckD.punchcard.times > 2 || FuckD.punchcard.end > 0 || (!GM_getValue("Config.keep", true) && FuckD.punchcard.date == FuckD.bing.dateNowNum)) {
        FuckD.punchcard.end++;
        return true;
    }
    const monthKey = Number(String(FuckD.bing.dateNowNum).substring(0, 6));
    let st = FuckF.getPunchcardState();
    // 跨月重置：上月缓存作废，重新识别本月任务
    if (st.month !== monthKey) {
        st = { month: monthKey, logDate: 0, checkDay: 0, quests: {} };
    }
    // 版本升级一次性失效：旧版本（24h 冷却 / 无 rewardsApp UA）写入的 lastDoneDay 可能是脏的
    // （pending=0 误判也会写"今日已检查"），会把当天唯一可执行窗口挡掉；升级后首轮强制向服务端重新核实
    if (st.v !== GM_info.script.version) {
        for (const id of Object.keys(st.quests)) st.quests[id].lastDoneDay = 0;
        st.v = GM_info.script.version;
        FuckF.savePunchcardState(st);
    }

    // ---- 第 1 层节流：任务集合复核（优先零请求）----
    // taskPromos 每轮 cron 都会抓 earn 页并存进 lastRewardHtml.earn，punchcardStart 排在它之后启动，
    // 所以这里通常能白拿一份本轮的任务集合来做复核；拿不到现成的才自己抓，并用 checkDay 限制为本日一次。
    const today = FuckD.bing.dateNowNum;
    let earnHtml = lastRewardHtml.earn || "";
    let questIds = earnHtml ? FuckF.parseQuestIds(earnHtml) : [];
    if (earnHtml) {
        // 复用本轮 earn 时也要落盘复核日，否则 promos 关闭后自抓通道会以为今天还没复核过
        const dirty = st.checkDay !== today;
        st.checkDay = today;
        const knownIds = Object.keys(st.quests);
        // 服务端本轮不再下发的 quest（已过期/已下线）从缓存剔除，避免缓存无限增长、进度简报混入过期任务。
        // 注意 questIds 为空时不剔除：可能是页面变体/抓取异常，宁可留着旧进度也不要误清
        const goneIds = questIds.length ? knownIds.filter(id => !questIds.includes(id)) : [];
        for (const id of goneIds) delete st.quests[id];
        const newIds = questIds.filter(id => !knownIds.includes(id));
        if (dirty || newIds.length || goneIds.length) FuckF.savePunchcardState(st);
        if (newIds.length || goneIds.length) {
            FuckF.log("📋", `打卡任务集合变化：新上线 ${newIds.join("，") || "无"}；已下线 ${goneIds.join("，") || "无"}（当前共 ${questIds.length} 个）`);
        }
        // 本日待办 = 新出现的 quest + 未完成且今天还没查过的 quest。
        // 待办为空就零请求返回：mainlandCheck、详情页、交卷一个都不发。
        const todoIds = questIds.filter(id => {
            const q = st.quests[id];
            return !q || (!q.complete && Number(q.lastDoneDay) !== today);
        });
        if (todoIds.length === 0) {
            FuckD.punchcard.end++;
            FuckF.punchcardMarkToday();
            const brief = questIds.map(id => `${st.quests[id].done || 0}/${st.quests[id].total || 0}`).join("，") || "无";
            FuckF.punchcardLogOnce(st, questIds.length
                ? `📋打卡任务今日已复核（${brief}），本日无待办子项`
                : "📋未发现打卡任务（可能已全部下线或尚未发布）");
            return true;
        }
    } else if (st.checkDay === today) {
        FuckD.punchcard.end++;
        FuckF.punchcardMarkToday();
        const briefCached = Object.keys(st.quests).map(id => `${st.quests[id].done || 0}/${st.quests[id].total || 0}`).join("，") || "无";
        FuckF.punchcardLogOnce(st, `📋打卡任务今日已复核（进度：${briefCached}），明天继续`);
        return true;
    }
    try {
        // 通道A（网页 server action 交卷）走 cookie，不依赖 Token；Token 只服务于通道B（dapi 兜底），
        // 且通道B 自带 `!posted && FuckD.bing.token` 保护。此处不做前置拦截，
        // 否则一次 Token 网络抖动会把本可正常交卷的打卡任务整体跳过。
        const envStatus = await FuckF.mainlandCheck();
        if (envStatus === 1) {
            FuckD.bing.code = -1;
            return true;
        }
        const region = FuckD.bing.status ? "cn" : FuckD.bing.region.toLowerCase();

        // 1) 任务集合：本轮已有现成 earn 就直接用，没有才抓一次
        if (!earnHtml) {
            earnHtml = await FuckF.xhr({ url: "https://rewards.bing.com/earn" });
            if (!earnHtml) {
                FuckD.punchcard.times++;
                return false;
            }
            questIds = FuckF.parseQuestIds(earnHtml);
            st.checkDay = today;
            if (questIds.length) {
                for (const id of Object.keys(st.quests)) if (!questIds.includes(id)) delete st.quests[id];
            }
        }
        if (questIds.length === 0) {
            FuckD.punchcard.end++;
            FuckF.punchcardMarkToday();
            FuckF.savePunchcardState(st);
            FuckF.punchcardLogOnce(st, "📋未发现打卡任务（可能已全部下线或尚未发布）");
            return true;
        }
        st.month = monthKey;
        FuckF.savePunchcardState(st);

        // 2) 逐个 quest 处理（已完成或仍在冷却中的 quest 直接跳过，不拉详情页）
        let totalPoints = 0;
        let anyProgress = false;
        let doneSubs = 0;
        const reports = [];

        for (const questOfferId of questIds) {
            const cached = st.quests[questOfferId];
            const cachedDay = cached ? Number(cached.lastDoneDay) || 0 : 0;
            if (cached && (cached.complete || cachedDay === FuckD.bing.dateNowNum)) {
                // 已完成，或今天已检查/推进过（子项按自然日解锁，本日无需重复拉取）
                reports.push(`${cached.done || 0}/${cached.total || 0}${cached.days ? `（${cached.days} 天）` : ""}`);
                continue;
            }
            // 3) 抓取 quest 详情页，解析子任务
            // 带 Rewards 桌面客户端 UA：服务端据此把「需在必应 App 完成」的隔日子项标记为已解锁（isLocked=false）
            const questUrl = `https://rewards.bing.com/earn/quest/${encodeURIComponent(questOfferId)}`;
            const questHtml = await FuckF.xhr({ url: questUrl, headers: { "user-agent": FuckD.ua.rewardsApp } });
            if (!questHtml) {
                FuckF.log("🟡", `打卡任务 ${questOfferId} 详情页获取失败`);
                continue;
            }
            const cleanQuest = questHtml.replace(/\\"/g, '"');

            // 提取进度信息（如 "2/4 个任务"）
            const progressMatch = cleanQuest.match(/(\d+)\s*\/\s*(\d+)\s*个任务/);
            const doneCount = progressMatch ? parseInt(progressMatch[1]) : 0;
            const totalCount = progressMatch ? parseInt(progressMatch[2]) : 0;

            // 提取子任务数据
            // quest 详情页子任务真实结构（字段顺序以 hash 起、offerId 收尾，中间夹 href/edgeAction/linkText）：
            // {"...","hash":"...","href":"...","edgeAction":"$undefined","isCompleted":bool,"isLocked":bool,"linkText":"...","offerId":"XX_pcchildN_urlreward_..._punchcard"}
            // 注意：offerId 前缀随活动变化（ENWW_ / WW_ 等），不能硬编码；isDisabled 字段可能不存在
            const subTaskRegex = /"hash":"([^"]+)"[^{}]*?"isCompleted":(true|false)\s*,\s*"isLocked":(true|false)(?:\s*,\s*"isDisabled":(true|false))?[^{}]*?"offerId":"([A-Za-z_]*pcchild\d+_urlreward[^"]*punchcard)"/g;

            const subTasks = [];
            const seenSubIds = new Set();
            let sm;
            while ((sm = subTaskRegex.exec(cleanQuest)) !== null) {
                const hash = sm[1];
                const isCompleted = sm[2] === "true";
                const isLocked = sm[3] === "true";
                const isDisabled = sm[4] === "true";
                const offerId = sm[5];
                if (seenSubIds.has(offerId)) continue;
                seenSubIds.add(offerId);
                subTasks.push({ offerId, hash, isCompleted, isLocked, isDisabled });
            }

            if (subTasks.length === 0 && totalCount === 0) {
                // 既无子项也无进度文本：结构异常。必须记下「今日已查」，否则每轮 cron 都会重拉详情页
                st.quests[questOfferId] = { done: 0, total: 0, complete: false, unknown: true, lastDoneDay: FuckD.bing.dateNowNum };
                FuckF.savePunchcardState(st);
                FuckF.log("🟡", `打卡任务 ${questOfferId} 未解析到子任务数据，页面结构可能已变更，本日不再重复拉取`);
                reports.push("结构异常");
                continue;
            }

            const effectiveTotal = totalCount || subTasks.length;
            const effectiveDone = doneCount || subTasks.filter(s => s.isCompleted).length;
            // 多天累计型活动（如 HalloweenQuestROWOct26：「10 天中的 5 个不同日期在 Bing 搜索，每次间隔至少 24 小时，
            // 且需先点击第一个活动激活」）整页没有 pcchild/urlreward/offerId/isCompleted 任何字段，
            // 只有「N/M 个任务」和「(N/M 天已完成)」两段文本 —— 没有可交卷的子项，脚本无从代做。
            // 与「子项已全部完成所以从 flight 数据里消失」的区分依据：未完成的 pcchild 打卡一定会留下
            // isLocked:true 的行，所以「解析到 0 个子项 + 进度未满」只可能是多天累计型。
            const dayMatch = cleanQuest.match(/\((\d+)\s*\/\s*(\d+)\s*天已完成\)/);
            const multiDay = subTasks.length === 0 && effectiveDone < effectiveTotal;
            // 以服务端进度为准写入缓存（无论本轮是否执行动作，下轮都可据此快速跳过）
            const q = {
                done: effectiveDone,
                total: effectiveTotal,
                complete: effectiveDone >= effectiveTotal,
                lastDoneDay: cachedDay,
            };
            if (multiDay) {
                q.multiDay = true;
                q.days = dayMatch ? `${dayMatch[1]}/${dayMatch[2]}` : "";
            }
            st.quests[questOfferId] = q;
            FuckF.savePunchcardState(st);
            FuckF.log("📋", `打卡任务进度：${effectiveDone}/${effectiveTotal}（${questOfferId}）`);

            if (q.complete) {
                reports.push(`${q.done}/${q.total}`);
                continue;
            }

            if (multiDay) {
                // 进度靠真实搜索天数累积（脚本的每日搜索任务本身就能喂满），本日查过即可。
                // 不能落到下面的「子项未解锁」分支——那不是被日历日锁住，是这类任务压根没有子项
                q.lastDoneDay = FuckD.bing.dateNowNum;
                FuckF.savePunchcardState(st);
                reports.push(`${q.done}/${q.total}${q.days ? `（${q.days} 天）` : ""}`);
                FuckF.log("📋", `多天累计型任务 ${questOfferId}：${q.done}/${q.total}${q.days ? `，已积累 ${q.days} 天` : ""} —— 无可交卷子项，进度由每日真实搜索自然累积，本日不再重复拉取`);
                continue;
            }

            // 4) 完成未完成的子任务（每个自然日最多推进一个，服务端按日历日解锁）
            // 优先选择已解锁（!isLocked && !isDisabled）且未完成的任务
            const pending = subTasks.filter(s => !s.isCompleted && !s.isLocked && !s.isDisabled);
            if (pending.length === 0) {
                // 子项被服务端锁定（未到对应日历日 / 需 App 才解锁）：标记今日已检查，本日不再重复拉取
                if (q.lastDoneDay !== FuckD.bing.dateNowNum) {
                    q.lastDoneDay = FuckD.bing.dateNowNum;
                    FuckF.savePunchcardState(st);
                }
                reports.push(`${q.done}/${q.total}`);
                FuckF.log("📋", `下一子项未解锁（服务端按日历日锁定），明天继续（进度：${q.done}/${q.total}）`);
                continue;
            }

            const task = pending[0]; // 只完成第一个可执行的
            anyProgress = true;
            FuckF.log("📋", `正在完成打卡任务子项：${task.offerId}`);
            let posted = false;

            // 通道A：网页端 server action（与 taskPromos 同源）
            try {
                const actionInfo = await FuckF.getRewardsAction([cleanQuest]);
                const actionId = actionInfo.ids.reportActivity || "70babbc81d2724f60d29a95c03b3d739cba77cea92";
                const reqHeaders = {
                    "content-type": "text/plain;charset=UTF-8",
                    "user-agent": FuckD.ua.rewardsApp,
                    "next-action": actionId,
                    "referer": questUrl,
                    "origin": "https://rewards.bing.com",
                    "next-router-state-tree": FuckF.getRouterStateTree("earn"),
                };
                if (actionInfo.dpl) reqHeaders["x-deployment-id"] = actionInfo.dpl;
                const postData = JSON.stringify([
                    task.hash,
                    11,
                    { "offerid": task.offerId, "isPromotional": "$undefined", "timezoneOffset": "-480" }
                ]);
                for (let attempt = 1; attempt <= 3 && !posted; attempt++) {
                    try {
                        await FuckF.xhr({ method: "POST", url: questUrl, headers: reqHeaders, data: postData });
                        posted = true;
                        FuckF.log("📋", `子项通过网页通道完成`);
                    } catch (e) {
                        if (e.message.includes("404")) throw e;
                        if (attempt === 3) FuckF.log("🟡", `子项网页通道 3 次失败：${e.message}`);
                        else await new Promise(resolve => setTimeout(resolve, FuckF.getScopeRandomNum(2000, 4000)));
                    }
                }
            } catch (e) {
                FuckF.log("🟡", `子项网页通道异常：${e.message}`);
            }

            // 通道B：dapi APP 通道兜底（网页通道失败且 token 可用时）
            if (!posted && FuckD.bing.token) {
                try {
                    const dapiResult = await FuckF.xhr({
                        method: "POST",
                        url: "https://prod.rewardsplatform.microsoft.com/dapi/me/activities",
                        headers: {
                            "content-type": "application/json; charset=UTF-8",
                            "user-agent": FuckD.ua.m,
                            "authorization": `Bearer ${FuckD.bing.token}`,
                            "x-rewards-appid": "SAAndroid/31.4.2110003555",
                            "x-rewards-ismobile": "true",
                            "x-rewards-country": region,
                        },
                        data: JSON.stringify({
                            "amount": 1,
                            "country": region,
                            "id": FuckF.getRandomUUID(),
                            "type": 101,
                            "attributes": { "offerid": task.offerId },
                        }),
                    });
                    if (dapiResult && FuckF.isJSON(dapiResult)) {
                        const res = JSON.parse(dapiResult);
                        if (res.code === 0 && res.response?.activity) {
                            posted = true;
                            const got = parseInt(res.response.activity.p) || 0;
                            totalPoints += got;
                            FuckF.log("📋", `子项通过 APP 通道完成！获得 ${got} 积分`);
                        } else {
                            FuckF.log("🟡", `子项 APP 通道响应异常：${dapiResult.substring(0, 200)}`);
                        }
                    }
                } catch (e) {
                    FuckF.log("🔴", `子项 APP 通道兜底失败！🔛${e.message}`);
                }
            }

            if (!posted) {
                FuckF.log("🔴", `子项双通道均失败，等待下轮重试`);
                FuckD.punchcard.times++;
                return false;
            }
            // 更新缓存：进度 +1，并标记今日已推进（本日不再重复拉取，跨自然日重新检查）
            q.done = Math.min(q.total, q.done + 1);
            q.complete = q.done >= q.total;
            q.lastDoneDay = FuckD.bing.dateNowNum;
            st.quests[questOfferId] = q;
            FuckF.savePunchcardState(st);
            reports.push(`${q.done}/${q.total}`);
            doneSubs++;
        }

        FuckD.punchcard.end++;
        FuckF.punchcardMarkToday();
        const brief = reports.join("，") || "无";
        const allComplete = questIds.length > 0 && questIds.every(id => st.quests[id] && st.quests[id].complete);
        let msg;
        if (anyProgress) {
            msg = `📋打卡任务已推进！\n✨本次完成 ${doneSubs} 个子项（进度：${brief}）`;
            if (totalPoints > 0) msg += `\n🎁本次到账：${totalPoints} 积分`;
        } else if (allComplete) {
            msg = `📋打卡任务已全部完成（${brief}），后续每日继续复核新上线的任务`;
        } else {
            msg = `📋打卡任务进度：${brief}`;
        }
        FuckF.punchcardLogOnce(st, msg, true);
        return true;
    } catch (e) {
        FuckF.log("📋", `打卡任务出错！🔛${e.message}`);
        FuckD.punchcard.times++;
        return false;
    }
}

// ===== Edge 浏览连签（Browsing Streak on Edge）=====
// 微软新增任务：每天在 Edge 累计浏览满 30 分钟即记账，连续 7 天有额外积分与印章（7 天奖励 5/10/20/30/40/80/120）。
// 机制（参考成熟实现 + dapi edge 通道）：服务端按「每次上报覆盖 report_per_minutes 分钟」累计进度，
// 需分次上报（默认每 5 分钟 1 次、共 6 次），两次上报间隔小于 report_per_minutes 会被判 isDuplicate 不记账，
// 累计满 30 分钟后 promotion.attributes.complete 变为 true。
// ⚠️ ScriptCat service worker 生命周期短，无法在一次运行内保持 30 分钟循环，故改为「每次 cron 触发做 1 次上报」模型：
// 通过 Config.edge={date,count,last,complete,activated,notified} GM 持久化跨运行续传，
// cron 每 20 分钟触发一次，远大于 5 分钟去重窗口，不会被判 isDuplicate，约 2 小时内完成全部 6 次上报。
FuckF.EDGE_PROMO_NAME = "edge_browsing_streak_flight";
FuckF.EDGE_ACTIVATION_OFFER = "edge_flight_1_ww_treatment_eligible";
FuckF.EDGE_TARGET_MINUTES = 30;
// 服务端记账存在滞后：实测达到理论次数（30/5=6 次）后 complete 仍可能滞后数小时才刷新，
// 此时不能靠无限加报硬冲。允许在理论次数之上补报若干次，超过硬上限则本日停止上报，避免整夜空转请求。
FuckF.EDGE_EXTRA_REPORTS = 3;
// 超出理论次数后的补报退避间隔（远大于 cron 20 分钟，每轮最多补报 1 次）
FuckF.EDGE_RECHECK_MS = 30 * 60 * 1000;

// 拉取 dapi edge 通道资料（含浏览连签 promotion），与 getPromotions 同域不同 channel
FuckF.getEdgeProfile = async (region) => {
    try {
        const result = await FuckF.xhr({
            url: "https://prod.rewardsplatform.microsoft.com/dapi/me?channel=edge&options=Profile,Promotions",
            headers: {
                "accept": "*/*",
                "content-type": "application/json; charset=UTF-8",
                "user-agent": FuckD.ua.pc,
                "authorization": `Bearer ${FuckD.bing.token}`,
                "x-rewards-appid": "EdgeDesktop",
                "x-rewards-partnerid": "EdgeHub",
                "x-rewards-country": region,
                "x-rewards-language": region === "cn" ? "zh-CN" : "en-US",
            },
        });
        if (result && FuckF.isJSON(result)) {
            const res = JSON.parse(result);
            if (res.code === 0) return res.response || {};
        }
    } catch (e) {
        FuckF.log("🔴", `Edge 通道资料获取出错！🔛${e.message}`);
    }
    return false;
};

FuckF.findEdgePromotion = (profile) => {
    const list = (profile && profile.promotions) || [];
    return list.find(p => p && p.name === FuckF.EDGE_PROMO_NAME) || null;
};

// Edge 浏览时长上报：dapi/me/activities，type 取 promotion.report_offer_type（默认 714），attributes.offerid 为上报标识
// 返回解析后的响应对象（含 response.isDuplicate）；异常向上抛由调用方处理
FuckF.reportEdgeActivity = async ({ offerid, type, region }) => {
    const result = await FuckF.xhr({
        method: "POST",
        url: "https://prod.rewardsplatform.microsoft.com/dapi/me/activities",
        headers: {
            "accept": "*/*",
            "content-type": "application/json; charset=UTF-8",
            "user-agent": FuckD.ua.pc,
            "authorization": `Bearer ${FuckD.bing.token}`,
            "x-rewards-appid": "EdgeDesktop",
            "x-rewards-partnerid": "EdgeHub",
            "x-rewards-country": region,
            "x-rewards-language": region === "cn" ? "zh-CN" : "en-US",
        },
        data: JSON.stringify({
            amount: 1,
            attributes: { offerid },
            request_user_info: true,
            type,
        }),
    });
    if (result && FuckF.isJSON(result)) return JSON.parse(result);
    return null;
};

// 一次性激活（多数账号已由 Edge 自动激活，promotion 直接存在则不会走到这里）：
// 从网页端 earn 页 React 数据里取 edge 连签的 activationOfferId/activationHash/activationActivityType，
// 复用活动交卷同款 server action（reportActivity）提交激活。返回 activated|already|absent|failed
FuckF.activateEdgeBrowsing = async () => {
    try {
        let html = lastRewardHtml.earn || "";
        if (!html || !html.includes("edge_flight")) {
            html = (await FuckF.xhr({ url: "https://rewards.bing.com/earn?section=streaks" })) || "";
        }
        const clean = html.replace(/\\"/g, '"');
        const idx = clean.indexOf('"activationOfferId":"' + FuckF.EDGE_ACTIVATION_OFFER);
        if (idx < 0) {
            // 网页端未见 edge 连签锚点：有 edge partner 说明结构变化（failed），否则账号未开通（absent）
            return /"partner":"edge"/.test(clean) ? "failed" : "absent";
        }
        const win = clean.substring(Math.max(0, idx - 600), idx + 500);
        if (/"isEnabled":true/.test(win)) return "already";
        const offerM = win.match(/"activationOfferId":"([^"]+)"/);
        const hashM = win.match(/"activationHash":"([^"]+)"/);
        const typeM = win.match(/"activationActivityType":(\d+)/);
        const offerId = offerM ? offerM[1] : FuckF.EDGE_ACTIVATION_OFFER;
        const hash = hashM ? hashM[1] : "";
        const actType = typeM ? parseInt(typeM[1]) : 714;
        if (!hash || hash === "$undefined") {
            FuckF.log("🟡", "Edge 浏览连签：未取到激活 hash，请先在 Edge 浏览器打开一次活动页以激活");
            return "failed";
        }
        const actionInfo = await FuckF.getRewardsAction([html]);
        const actionId = actionInfo.ids.reportActivity || "70babbc81d2724f60d29a95c03b3d739cba77cea92";
        const headers = {
            "content-type": "text/plain;charset=UTF-8",
            "next-action": actionId,
            "referer": "https://rewards.bing.com/earn",
            "origin": "https://rewards.bing.com",
            "next-router-state-tree": FuckF.getRouterStateTree("earn"),
        };
        if (actionInfo.dpl) headers["x-deployment-id"] = actionInfo.dpl;
        await FuckF.xhr({
            method: "POST",
            url: "https://rewards.bing.com/earn",
            headers,
            data: JSON.stringify([hash, actType, { offerid: offerId, isPromotional: "$undefined", timezoneOffset: "-480" }]),
        });
        FuckF.log("🟢", "Edge 浏览连签：已提交激活请求");
        return "activated";
    } catch (e) {
        FuckF.log("🟡", `Edge 浏览连签：激活失败 🔛${e.message}`);
        return "failed";
    }
};

FuckF.edgeNotifyDone = (st, save) => {
    if (st.notified) return;
    st.notified = true;
    save();
    FuckD.bing.sendMSG = "🌐Edge 浏览连签任务已完成！（今日 30 分钟浏览已记账）";
    FuckF.log("🔵", FuckD.bing.sendMSG, true);
    FuckF.send(FuckD.wh);
};

let edgeBrowsingRunning = false;
FuckF.taskEdgeBrowsing = async () => {
    if (!FuckD.tasks.edge || edgeBrowsingRunning) return;
    if (!FuckD.bing.token) {
        FuckF.log("🟡", "Edge 浏览连签：暂无可用 Token（需先完成授权码配置），本次跳过");
        return;
    }
    edgeBrowsingRunning = true;
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    try {
        const region = FuckD.bing.status ? "cn" : (FuckD.bing.region || "").toLowerCase();
        const today = FuckD.bing.dateNowNum;
        let st = GM_getValue("Config.edge", false);
        if (!st || st.date != today) {
            st = { date: today, count: 0, last: 0, complete: false, activated: false, notified: false };
        }
        const save = () => GM_setValue("Config.edge", st);
        if (st.complete) return;

        let profile = await FuckF.getEdgeProfile(region);
        let promo = profile && FuckF.findEdgePromotion(profile);

        // promotion 缺失：尝试网页通道一次性激活（每天仅试一次）
        if (!promo && !st.activated) {
            st.activated = true;
            save();
            const act = await FuckF.activateEdgeBrowsing();
            if (act === "absent") {
                FuckF.log("🟡", "Edge 浏览连签：账号未开通该活动，跳过");
                return;
            }
            if (act === "activated" || act === "already") {
                await sleep(FuckF.getScopeRandomNum(3000, 6000));
                profile = await FuckF.getEdgeProfile(region);
                promo = profile && FuckF.findEdgePromotion(profile);
            }
        }
        if (!promo) {
            FuckF.log("🟡", "Edge 浏览连签：edge 通道未发现该活动，可能需先在 Edge 浏览器打开一次活动页激活");
            return;
        }

        const attr = promo.attributes || {};
        if (String(attr.complete || "").toLowerCase() === "true") {
            st.complete = true;
            save();
            FuckF.edgeNotifyDone(st, save);
            return;
        }
        const offerid = String(attr.offerid || "").trim();
        const typeRaw = String(attr.report_offer_type || "").trim();
        const type = /^\d+$/.test(typeRaw) ? typeRaw : "714";
        let intervalMin = Number(attr.report_per_minutes);
        if (!Number.isFinite(intervalMin) || intervalMin < 1 || intervalMin > 30) intervalMin = 5;
        if (!offerid) {
            FuckF.log("🟡", "Edge 浏览连签：promotion 缺少 offerid，无法上报");
            return;
        }
        const reportCount = Math.ceil(FuckF.EDGE_TARGET_MINUTES / intervalMin);
        const intervalMs = intervalMin * 60000;
        const maxReports = reportCount + FuckF.EDGE_EXTRA_REPORTS;

        // 跨运行续传：读取持久化状态，检查是否到了下一次上报时间
        const fresh = GM_getValue("Config.edge", st);
        if (fresh && fresh.date == today) st = Object.assign(st, fresh);
        if (st.complete) { save(); return; }

        // 已达硬上限仍未确认完成：本日停止上报，仅保留下一轮的完成状态复核
        if (st.count >= maxReports) {
            FuckF.log("🟡", `Edge 浏览连签：上报已达上限 ${st.count}/${maxReports} 次（理论 ${reportCount} 次），服务端仍未确认完成，本日停止上报（可能机制变更或需真实浏览时长）`);
            save();
            return;
        }

        // 理论次数内按 intervalMin 节流；超出后进入低频补报（退避 EDGE_RECHECK_MS），不再每次 cron 都上报
        const overQuota = st.count >= reportCount;
        const minGap = overQuota ? Math.max(intervalMs, FuckF.EDGE_RECHECK_MS) : intervalMs;
        const elapsed = Date.now() - (st.last || 0);
        if (st.count > 0 && elapsed < minGap) {
            FuckF.log("🌐", `Edge 浏览连签：距上次上报不足 ${Math.round(minGap / 60000)} 分钟，下次 cron 再试（进度 ${st.count}/${reportCount}）`);
            return;
        }

        FuckF.log("🌐", `Edge 浏览连签：目标 ${FuckF.EDGE_TARGET_MINUTES} 分钟，每 ${intervalMin} 分钟上报 1 次，共 ${reportCount} 次；当前进度 ${st.count}/${reportCount}，本次执行${overQuota ? "补报" : "上报"}`);

        let dup = false;
        let ok = false;
        try {
            const res = await FuckF.reportEdgeActivity({ offerid, type, region });
            if (res && res.code === 0) {
                ok = true;
                dup = res.response && res.response.isDuplicate === true;
            } else {
                FuckF.log("🟡", `Edge 浏览连签：上报响应异常 code=${res && res.code != null ? res.code : "?"}，不消耗次数，下一轮 cron 重试`);
            }
        } catch (e) {
            FuckF.log("🔴", `Edge 浏览连签：上报失败！🔛${e.message}`);
            return;
        }
        st.last = Date.now();
        // 异常响应（500/429 等非 0 code）不得消耗 count：否则瞬时故障会把补报配额（reportCount+3）
        // 逐次烧光，触顶后本日停报，而服务端此时仍能正常记账（2026-10-15 实测 9 次上报仅记 15 分钟）
        if (ok && !dup) st.count++;
        save();
        if (ok) FuckF.log("🌐", `Edge 浏览连签：第 ${st.count}/${reportCount} 次上报${dup ? "（服务端判重，未记账）" : "已记账"}`);

        // 上报后复核服务端完成状态（complete 为最终依据）
        await sleep(FuckF.getScopeRandomNum(2000, 4000));
        const p2 = await FuckF.getEdgeProfile(region);
        const pr2 = p2 && FuckF.findEdgePromotion(p2);
        if (pr2 && String((pr2.attributes || {}).complete || "").toLowerCase() === "true") {
            st.complete = true;
            save();
        }

        if (st.complete) {
            FuckF.edgeNotifyDone(st, save);
        } else if (st.count >= reportCount) {
            // 上报次数已满但服务端未确认完成：不强制标记，留待下一轮 cron 复核（补报已受硬上限与退避间隔约束）
            // 附带服务端 promotion 关键字段，便于定位"次数够但未完成"是记账滞后还是机制变更
            const diagKeys = ["complete", "progress", "max", "target", "report_per_minutes", "offerid"];
            const brief = diagKeys.filter(k => attr[k] != null).map(k => `${k}=${attr[k]}`).join(" ");
            FuckF.log("🟡", `Edge 浏览连签：已上报 ${st.count}/${reportCount} 次，等待服务端确认完成（下一轮低频复核）${brief ? ` 🔛${brief}` : ""}`);
        }
    } catch (e) {
        FuckF.log("🔴", `Edge 浏览连签任务出错！🔛${e.message}`);
    } finally {
        edgeBrowsingRunning = false;
    }
};

// 自动领取待领积分（搜索打卡等新版奖励会进入待领池，需手动点击领取）
// 领取接口幂等，无可领积分时不执行任何领取动作，不影响主流程
// 新版（dpl=20260818 起）待领数据在 dashboard 页，earn 页仅作兑底
let claimRunning = false;
let lastRewardHtml = { dash: "", earn: "" };

// 500 时服务端直接返回整页 HTML 错误页（而非 Next.js flight 数据），据此区分"请求被拒绝"与业务异常
FuckF.isHtmlErrorPage = (text) => /^\s*(?:<!DOCTYPE|<html|<\?xml)/i.test(String(text || ""));

// 领取请求头：action 标识与部署号必须来自同一份页面，缺 dpl 时 server action 会因版本不匹配回 500
// （交卷、Edge 激活通道均已带上，领取通道此前遗漏，是本次 500 的直接原因之一）
FuckF.buildClaimHeaders = async (htmls) => {
    const actionInfo = await FuckF.getRewardsAction(htmls);
    const headers = {
        "content-type": "text/plain;charset=UTF-8",
        "next-action": actionInfo.ids.reportClaimAllPoints || "00491296f1d668ad46b65342c95cb9d72a62c1fa9d",
        "referer": "https://rewards.bing.com/earn",
        // 显式覆盖 origin（同交卷）：风控账号的 server action 对非站点同源 origin 抛 500
        "origin": "https://rewards.bing.com",
        "next-router-state-tree": FuckF.getRouterStateTree("earn"),
    };
    if (actionInfo.dpl) headers["x-deployment-id"] = actionInfo.dpl;
    return headers;
};

// 同源兜底领取：定时脚本运行在扩展 service_worker 中，Origin 为 chrome-extension://，
// Next.js server action 会以 500 拒绝（交卷与领取的网页通道均如此，实测本账号全部 500）。
// 关键：定时脚本（@crontab）不会作为页面脚本注入，脚本内的页面分支是死代码（已实测确认），
// 因此同源领取必须由独立的页面脚本《Microsoft Rewards 全任务助手 - 同源领取页》完成，
// 两者通过 @storageName 共享 GM 存储：本函数打开 dashboard 标签页并等待页面脚本回写结果。
// 限流 3 小时：领取是每日动作，失败时不必每轮 cron 都开页
FuckF.claimViaPage = async () => {
    const last = GM_getValue("Config.claimPageAt", 0);
    if (Date.now() - last < 3 * 3600 * 1000) {
        FuckF.log("🟡", "积分领取：同源兜底 3 小时内已执行过，本轮跳过");
        return false;
    }
    const startedAt = Date.now();
    GM_setValue("Config.claimPageAt", startedAt);
    const tab = GM_openInTab("https://rewards.bing.com/dashboard", { active: false, insert: false, setParent: true });
    FuckF.log("🟡", "积分领取：网页通道被服务端拒绝，已转后台页面同源领取（无需操作，完成后自动关闭）");
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    // 等待页面脚本回写结果（页面加载 + 领取请求，正常 10-40 秒），拿到结果或超时即关闭标签页
    let result = null;
    for (let i = 0; i < 18; i++) {
        await sleep(5000);
        const r = GM_getValue("Config.claimPageResult", null);
        if (r && r.at >= startedAt) {
            result = r;
            break;
        }
    }
    try { if (tab) tab.close(); } catch (e) {}
    if (result && result.ok) FuckF.log("✨", `同源兜底领取成功${result.msg ? `（${result.msg}）` : ""}`);
    else if (result) FuckF.log("🟡", `同源兜底领取失败（${result.msg || "未知原因"}），下轮再试`);
    else FuckF.log("🟡", "同源兜底领取未完成：页面脚本未回写结果，请确认《Microsoft Rewards 全任务助手 - 同源领取页》已安装并启用");
    return !!(result && result.ok);
};

FuckF.taskClaim = async (pages) => {
    if (claimRunning) return;
    if (!FuckD.tasks.promos && !FuckD.tasks.search) return;
    claimRunning = true;
    try {
        // 先检查待领池（dashboard 优先），没有可领积分则不执行后续领取逻辑
        const useCached = !!pages;
        let dashHtml = (useCached && pages.dash) || await FuckF.xhr({ url: "https://rewards.bing.com/dashboard" });
        let clean = String(dashHtml).replace(/\\"/g, '"');
        let claimMatch = clean.match(/"pointClaim":(null|\{|\[)/);
        let earnHtml = (useCached && pages.earn) || "";
        if (!claimMatch) {
            earnHtml = earnHtml || await FuckF.xhr({ url: "https://rewards.bing.com/earn" });
            clean = String(earnHtml).replace(/\\"/g, '"');
            claimMatch = clean.match(/"pointClaim":(null|\{|\[)/);
        }
        if (!claimMatch || claimMatch[1] === "null") {
            // 待领池为空，无需领取
            return;
        }
        const before = parseInt(clean.match(/"balance":(\d+)/)?.[1] || "0");
        // 两段尝试：首次用缓存标识；失败后清缓存并重抓页面，标识与部署号一起更新（部署切换时二者同时变化）
        let lastErr = null;
        for (let attempt = 1; attempt <= 2; attempt++) {
            if (attempt > 1) {
                FuckF.clearActionCache();
                await new Promise(resolve => setTimeout(resolve, FuckF.getScopeRandomNum(2500, 4500)));
                dashHtml = await FuckF.xhr({ url: "https://rewards.bing.com/dashboard" });
                earnHtml = await FuckF.xhr({ url: "https://rewards.bing.com/earn" });
            }
            try {
                const headers = await FuckF.buildClaimHeaders([dashHtml, earnHtml]);
                const resp = await FuckF.xhr({
                    method: "POST",
                    url: "https://rewards.bing.com/earn",
                    headers,
                    data: JSON.stringify([]),
                });
                if (FuckF.isHtmlErrorPage(resp)) {
                    throw new Error("earn 返回 HTML 错误页（服务端拒绝该请求）");
                }
                if (/^\d+:true\s*$/m.test(resp || "")) {
                    const afterHtml = await FuckF.xhr({ url: "https://rewards.bing.com/earn" });
                    const after = parseInt(String(afterHtml).replace(/\\"/g, '"').match(/"balance":(\d+)/)?.[1] || "0");
                    if (before > 0 && after > before) {
                        FuckF.log("✨", `已自动领取 ${after - before} 积分（当前余额：${after}）`);
                    } else {
                        FuckF.log("✨", "积分领取请求已成功");
                    }
                } else {
                    FuckF.log("🟡", "积分领取响应异常，可能无可领积分");
                }
                return;
            } catch (e) {
                lastErr = e;
            }
        }
        // 两次均失败：改走站点同源领取，不再把领取失败当错误上报
        FuckF.log("🟡", `积分领取网页通道失败！🔛${lastErr ? lastErr.message : "未知原因"}`);
        await FuckF.claimViaPage();
    } catch (e) {
        FuckF.log("🟡", `积分领取本轮跳过！🔛${e.message}`);
    } finally {
        claimRunning = false;
    }
}

FuckF.getQueryWord = async () => {
    const keywords = ["天气预报", "今日新闻", "体育赛事", "股票行情", "电影推荐", "科技资讯", "美食食谱", "旅游攻略", "历史上的今天", "健康常识"];
    const baseWord = keywords[FuckF.getRandomNum(keywords.length)];
    const randomSuffix = Math.random().toString(36).slice(2, 6);
    let sentence = `${baseWord} ${randomSuffix}`;
    if (FuckD.api.mode != "offline") {
        if (FuckD.search.word.index < 1 || FuckD.search.word.list.length < 1) {
            const apiHot = FuckF.getRandomApiHot()
            try {
                const result = await FuckF.xhr({ url: FuckD.api.url + apiHot })
                if (result && FuckF.isJSON(result)) {
                    const res = JSON.parse(result)
                    if (res.code == 200) {
                        FuckD.search.word.index = 1
                        for (let i = 0; i < res.data.length; i++) {
                            FuckD.search.word.list.push(res.data[i].title)
                        }
                        FuckD.search.word.list = FuckF.getRandomArr(FuckD.search.word.list)
                        sentence = FuckD.search.word.list[FuckD.search.word.index]
                        sentence = FuckF.getRandomSubstring(sentence)
                        return sentence
                    }
                }
            } catch (e) {
                FuckF.log("🔴", `搜索词获取出错！🔛${e.message}`)
            }
        } else {
            FuckD.search.word.index++
            if (FuckD.search.word.index > FuckD.search.word.list.length - 1) {
                FuckD.search.word.index = 0
            }
            sentence = FuckD.search.word.list[FuckD.search.word.index]
            sentence = FuckF.getRandomSubstring(sentence)
            return sentence
        }
        FuckF.log("🟡", "搜索词接口异常，已临时使用随机搜索词")
    }
    return sentence
}

FuckF.taskSearch = async () => {
    if (!FuckD.tasks.search || FuckD.search.end > 0 || (!GM_getValue("Config.keep", true) && FuckD.search.date == FuckD.bing.dateNowNum)) {
        FuckD.search.end++;
        return true;
    }
    if (FuckD.search.index === 0) {
        const dashboard = await FuckF.getRewardsInfo();
        if (!dashboard) {
            return false;
        }
        const searchInfo = dashboard.userStatus?.counters || {};
        FuckD.search.pc.progress = searchInfo.pcSearch?.[0]?.pointProgress || 0;
        let pcMax = searchInfo.pcSearch?.[0]?.pointProgressMax || 0;
        if (pcMax === 0) pcMax = 60;
        FuckD.search.pc.max = pcMax;
        FuckD.search.m.progress = searchInfo.mobileSearch?.[0]?.pointProgress || 0;
        let mMax = searchInfo.mobileSearch?.[0]?.pointProgressMax || 0;
        if (mMax === 0) mMax = 0;
        FuckD.search.m.max = mMax;
        const currentTotalSearch = FuckD.search.pc.progress + FuckD.search.m.progress;
        const lastTotalSearch = GM_getValue("Config.lastSearchProgress", -1);
        let restrictedTimes = GM_getValue("Config.restrictedTimes", 0);
        if (lastTotalSearch !== -1) {
            if (currentTotalSearch === lastTotalSearch && currentTotalSearch < (pcMax + mMax)) {
                restrictedTimes++;
            } else {
                restrictedTimes = 0;
            }
        }
        GM_setValue("Config.lastSearchProgress", currentTotalSearch);
        GM_setValue("Config.restrictedTimes", restrictedTimes);
        if (restrictedTimes >= 2) {
            FuckD.search.end++;
            GM_setValue("Config.lastSearchProgress", -1);
            GM_setValue("Config.restrictedTimes", 0);
            const pcReport = FuckD.search.pc.max > 0 ? `\n💻电脑端搜索：${FuckD.search.pc.progress}/${FuckD.search.pc.max}` : "";
            const mReport = FuckD.search.m.max > 0 ? `\n📱手机端搜索：${FuckD.search.m.progress}/${FuckD.search.m.max}` : "";
            FuckD.bing.sendMSG = `⚠️积分收入受限或账号异常，已中断今日搜索！${pcReport}${mReport}`;
            FuckF.log("🔴", FuckD.bing.sendMSG, true);
            FuckF.send(FuckD.wh);
            return true;
        }
    }
    if (FuckD.search.pc.progress >= FuckD.search.pc.max && FuckD.search.m.progress >= FuckD.search.m.max) {
        await new Promise(resolve => setTimeout(resolve, 3210));
        const dashboard = await FuckF.getRewardsInfo();
        if (dashboard) {
            const searchInfo = dashboard.userStatus?.counters || {};
            const realPcPro = searchInfo.pcSearch?.[0]?.pointProgress || 0;
            const realMPro = searchInfo.mobileSearch?.[0]?.pointProgress || 0;
            if (realPcPro >= FuckD.search.pc.max && realMPro >= FuckD.search.m.max) {
                FuckD.search.end++;
                if (FuckD.search.date != FuckD.bing.dateNowNum) {
                    FuckD.search.date = FuckD.bing.dateNowNum;
                    GM_setValue("Config.tasks", FuckD.bing.tasks);
                    GM_setValue("Config.lastSearchProgress", -1);
                    GM_setValue("Config.restrictedTimes", 0);
                    const pcReport = FuckD.search.pc.max > 0 ? `\n💻电脑端搜索：${realPcPro}/${FuckD.search.pc.max}` : "";
                    const mReport = FuckD.search.m.max > 0 ? `\n📱手机端搜索：${realMPro}/${FuckD.search.m.max}` : "";
                    FuckD.bing.sendMSG = `🔍搜索任务已完成！${pcReport}${mReport}`;
                    FuckF.log("🔵", FuckD.bing.sendMSG, true);
                    FuckF.send(FuckD.wh);
                }
                return true;
            } else {
                FuckD.search.pc.progress = realPcPro;
                FuckD.search.m.progress = realMPro;
                FuckF.log("🔍", `检测到搜索数据延迟或漏分，开始补搜...`);
            }
        } else {
            FuckD.search.end++;
            return true;
        }
    }
    if (FuckD.search.index >= FuckD.search.limit) {
        FuckD.search.end++;
        const pcReport = FuckD.search.pc.max > 0 ? `\n💻电脑端搜索：${FuckD.search.pc.progress}/${FuckD.search.pc.max}` : "";
        const mReport = FuckD.search.m.max > 0 ? `\n📱手机端搜索：${FuckD.search.m.progress}/${FuckD.search.m.max}` : "";
        FuckD.bing.sendMSG = `本轮运行正常，共搜索 ${FuckD.search.index} 次！${pcReport}${mReport}`;
        FuckF.log("🔍", FuckD.bing.sendMSG);
        FuckF.send(FuckD.wh);
        return true;
    }
    FuckD.search.date = 0;
    let query, params, pcorm, headers, regionMKT = "";
    if (FuckD.search.pc.progress < FuckD.search.pc.max || FuckD.search.m.progress < FuckD.search.m.max) {
        pcorm = Math.random() > 0.6 ? false : true;
        if (FuckD.search.pc.progress >= FuckD.search.pc.max) pcorm = false;
        if (FuckD.search.m.progress >= FuckD.search.m.max) pcorm = true;
    }
    const keyword = await FuckF.getQueryWord();
    try {
        const envStatus = await FuckF.mainlandCheck();
        if (envStatus === 1) {
            FuckD.bing.code = -1;
            return true;
        }
        GM_cookie("delete", { url: "https://bing.com", name: "_EDGE_S" });
        GM_cookie("delete", { url: "https://bing.com", name: "_Rwho" });
        GM_cookie("delete", { url: "https://bing.com", name: "_RwBf" });
        if (FuckD.bing.status) regionMKT = "&mkt=zh-CN";
        params = `q=${encodeURIComponent(keyword)}&form=QBLH${regionMKT}`;
        query = `https://${FuckD.bing.host}/search?${params}`;
        if (pcorm) {
            FuckD.search.device = "Desktop";
            headers = {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": FuckD.ua.pc,
                "cookie": `_Rwho=u=d&ts=${FuckD.bing.dateNowhyphen}`,
            };
        } else {
            FuckD.search.device = "Mobile";
            headers = {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": FuckD.ua.m,
                "cookie": `_Rwho=u=m&ts=${FuckD.bing.dateNowhyphen}`,
            };
        }
        const result = await FuckF.xhr({
            url: query,
            headers: {
                ...headers,
                "referer": `https://${FuckD.bing.host}/?form=QBLH`,
            }
        });
        if (result) {
            const res = result.replace(/\s/g, "");
            const data0 = res.match(/,IG:"([^"]+)"/);
            const guid = data0 ? data0[1] : FuckF.getRandomUUID(true);
            const data = res.match(/class="b_algo(.*?)href="(.*?)"h="ID=(.*?)">(.*?)<\/h2/);
            const ncheader = `https://${FuckD.bing.host}/rewardsapp/ncheader?ver=88888888&IID=SERP.5047&IG=${guid}&ajaxreq=1`;
            const report = `https://${FuckD.bing.host}/rewardsapp/reportActivity?IG=${guid}&IID=SERP.5047&${params}&ajaxreq=1`;
            headers = { ...headers, "referer": query };
            await FuckF.xhr({ method: "POST", url: ncheader, headers: headers, data: "wb=1%3bi%3d1%3bv%3d1" });
            await FuckF.xhr({ method: "POST", url: report, headers: headers, data: `url=${encodeURIComponent(query)}&V=web` });
            if (data) {
                const click = `https://${FuckD.bing.host}/fd/ls/GLinkPingPost.aspx?IG=${guid}&ID=${data[3]}&url=${data[2]}`;
                await FuckF.xhr({ url: click, headers: headers });
            }
            if (pcorm) {
                FuckD.search.pc.progress += 3;
                if (FuckD.search.pc.progress > FuckD.search.pc.max) FuckD.search.pc.progress = FuckD.search.pc.max;
            } else {
                FuckD.search.m.progress += 3;
                if (FuckD.search.m.progress > FuckD.search.m.max) FuckD.search.m.progress = FuckD.search.m.max;
            }
        }
    } catch (e) {
        FuckF.log("🔴", `搜索任务出错！🔛${e.message}`);
    }
    FuckD.search.index++;
    return false;
}

FuckF.mainlandCheck = async () => {
    try {
        const hash = ["g", "e", "o", "i", "s", "a", "m"].join("");
        if (!GM_info.script.header.includes(hash)) {
            FuckD.bing.mainland = -1;
            return 1;
        }
        const result = await FuckF.xhr({
            url: `https://${FuckD.bing.host}/`,
            headers: { "cookie": FuckD.cookie.mkt }
        });
        if (result) {
            const res = result.replace(/\s/g, "");
            const data = res.match(/Region:"(.*?)"(.*?)RevIpCC:"(.*?)"/);
            if (data) {
                const ipcc = data[3].toUpperCase();
                FuckD.bing.region = ipcc;
                if (FuckD.bing.status && ipcc != "CN") {
                    try {
                        const qryResult = await FuckF.xhr({
                            url: "https://disp-qryapi.3g.qq.com/v1/dispatch",
                            headers: { "referer": "https://3g.qq.com/" }
                        });
                        if (qryResult && FuckF.isJSON(qryResult)) {
                            const resJSON = JSON.parse(qryResult);
                            FuckD.bing.ip = (resJSON.code == 0 && resJSON.extra && resJSON.extra.ip) ? resJSON.extra.ip : "";
                            let rawInfo = (resJSON.code == 0 && resJSON.ipInfo) ? String(resJSON.ipInfo) : "";
                            rawInfo = rawInfo.replace(/[#*]+/g, " ").trim();
                            FuckD.bing.ipInfo = rawInfo ? `\n🌏所在地区：${rawInfo}` : "";
                        }
                    } catch {
                        console.debug("获取附加 IP 信息失败");
                    }
                    return 1;
                }
            }
            return 0;
        }
        return 2;
    } catch {
        return 2;
    }
}

FuckF.send = async (webhook) => {
    const now = new Date()
    FuckD.bing.datetimeLocaleStr = now.toLocaleString()
    await Promise.all(webhook.map(async (i) => {
        if (!i.key) return
        let message = `「${i.name}」消息推送`
        const safeKey = String(i.key).trim();
        const targetUrl = safeKey.startsWith("http") ? safeKey : i.url + safeKey;
        try {
            const result = await FuckF.xhr({
                method: "POST",
                url: targetUrl,
                headers: {
                    "content-type": "application/json; charset=UTF-8",
                },
                data: JSON.stringify(i.msg),
            })
            if (result) FuckF.log("🔵", `${message}完成 🔛${result}`)
        } catch (e) {
            FuckF.log("🔴", `消息推送出错！🔛${e.message}`)
        }
    }))
}

window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'AUTH_CODE_RECEIVED') {
        GM_log("收到授权码消息: " + event.data.code.substring(0, 30) + "...");
    }
});

if (typeof GM_registerMenuCommand === 'function') {
    GM_registerMenuCommand("📋 粘贴授权码", () => {
        const clipboardText = prompt("请粘贴授权码链接（完整URL）：");
        if (clipboardText && clipboardText.includes('login.live.com/oauth20_desktop.srf') && clipboardText.includes('code=')) {
            GM_setValue("Config.code", clipboardText);
            GM_setValue("Config.token", false);
            GM_notification({
                text: "授权码已更新，脚本将在下一次运行时使用新授权码",
                title: GM_info.script.name,
                onclick: () => {}
            });
            FuckF.log("🟢", "授权码已手动更新");
        } else {
            GM_notification({
                text: "无效的授权码链接，请重试",
                title: GM_info.script.name,
                onclick: () => {}
            });
        }
    });
}

// ===== 内容脚本分支：打开 dashboard 时点击"每日额外积分"按钮（上游 3.6.50 合并）=====
if (typeof window !== 'undefined' && window.location && window.location.hostname === "rewards.bing.com" && (window.location.pathname === "/dashboard" || window.location.pathname.startsWith("/dashboard"))) {
    FuckF.claimExtraPoints();
    // 同源兜底领取：页面上下文 fetch 的 Origin 天然为站点同源，
    // 可绕过 service_worker 扩展 origin 被风控账号 500 拒绝的问题（领取接口幂等）
    (async () => {
        try {
            const dashHtml = document.documentElement.innerHTML || "";
            const clean = dashHtml.replace(/\\"/g, '"');
            const claimMatch = clean.match(/"pointClaim":(null|\{|\[)/);
            if (!claimMatch || claimMatch[1] === "null") return;
            const actionInfo = await FuckF.getRewardsAction();
            const claimId = actionInfo.ids.reportClaimAllPoints || "00491296f1d668ad46b65342c95cb9d72a62c1fa9d";
            const claimHeaders = {
                "content-type": "text/plain;charset=UTF-8",
                "next-action": claimId,
                "next-router-state-tree": FuckF.getRouterStateTree("earn"),
            };
            if (actionInfo.dpl) claimHeaders["x-deployment-id"] = actionInfo.dpl;
            const resp = await fetch("https://rewards.bing.com/earn", {
                method: "POST",
                credentials: "include",
                headers: claimHeaders,
                body: JSON.stringify([]),
            });
            if (resp.ok && /^\d+:true\s*$/m.test(await resp.text())) {
                // 通知后台兜底流程：页面同源领取已执行，可以关闭本标签页
                GM_setValue("Config.claimPageDone", Date.now());
                FuckF.log("✨", "页面上下文同源兜底领取成功");
            }
        } catch (e) {}
    })();
    return;
}

return new Promise((resolve) => {
    const seconds = FuckF.getTimestamp()
    GM_cookie("delete", { url: "https://bing.com", name: "_EDGE_S" })
    FuckD.search.limit = FuckF.getScopeRandomNum(4, 7)
    FuckD.bing.dateNowNum = FuckF.getDatetime(true)
    FuckD.bing.dateNowhyphen = FuckF.getDatetime(false, false)
    const tasksArr = GM_getValue("Config.tasks", false)
    FuckD.sign.date = tasksArr ? tasksArr.sign : 0
    FuckD.read.date = tasksArr ? tasksArr.read : 0
    FuckD.promos.date = tasksArr ? tasksArr.promos : 0
    FuckD.streak.date = tasksArr ? tasksArr.streak : 0
    FuckD.search.date = tasksArr ? tasksArr.search : 0
    // 月度打卡每日完成状态此前未回读，导致每次定时运行都重新执行并重复推送
    FuckD.punchcard.date = tasksArr ? tasksArr.punchcard : 0
    if (FuckD.api.mode != "offline") {
        const defaultApiName = "hot.baiwumm.com"
        const currentApiName = GM_getValue("Config.api", defaultApiName)
        const apiConfigMap = new Map(FuckD.api.arr)
        const getConfigApi = apiConfigMap.get(currentApiName) || apiConfigMap.get(defaultApiName)
        FuckD.api.url = getConfigApi.url
        FuckD.api.hot = getConfigApi.hot
        if (!apiConfigMap.has(currentApiName)) {
            GM_setValue("Config.api", "offline")
            FuckF.log("🟡", "搜索词接口配置错误，已替换为offline")
        }
    }

    FuckF.tasksEnd = async () => {
        if (FuckD.bing.code < 0) {
            if (FuckD.bing.code === -1) {
                FuckD.bing.code = -2;
                FuckD.bing.sendMSG = `🚫当前 IP 非中国大陆地区，已停止运行！\n⛔IP 地址：${FuckD.bing.ip} - ${FuckD.bing.region}${FuckD.bing.ipInfo}`;
                FuckF.log("🔴", FuckD.bing.sendMSG, true);
                FuckF.send(FuckD.wh);
            }
            return resolve();
        }
        const endS = !FuckD.tasks.sign || FuckD.sign.end > 0;
        const endR = !FuckD.tasks.read || FuckD.read.end > 0;
        const endP = !FuckD.tasks.promos || FuckD.promos.end > 0;
        const endSe = !FuckD.tasks.search || FuckD.search.end > 0;
        // 打卡任务被排在最后启动（init + time*4），此前不计入结算会让 resolve() 先于打卡执行，
        // ScriptCat 随即销毁沙箱，打卡在拉取 quest 详情页的 await 处静默中断
        const endPu = !FuckD.tasks.punchcard || FuckD.punchcard.end > 0;
        if (endS && endR && endP && endSe && endPu) {
            FuckD.bing.end--
            if (FuckD.bing.end === 0) {
                const checkDone = (taskEnabled, taskDate) => !taskEnabled || taskDate == FuckD.bing.dateNowNum;
                const isAllDone = checkDone(FuckD.tasks.sign, FuckD.sign.date) && checkDone(FuckD.tasks.read, FuckD.read.date) && checkDone(FuckD.tasks.promos, FuckD.promos.date) && checkDone(FuckD.tasks.search, FuckD.search.date) && checkDone(FuckD.tasks.punchcard, FuckD.punchcard.date);
                if (isAllDone) {
                    const allDoneDate = GM_getValue("Config.allDoneDate", 0);
                    if (allDoneDate != FuckD.bing.dateNowNum) {
                        GM_setValue("Config.allDoneDate", FuckD.bing.dateNowNum);
                        const dashboard = await FuckF.getRewardsInfo();
                        const counters = dashboard?.userStatus?.counters || {};
                        const pcPro = counters.pcSearch?.[0]?.pointProgress || 0;
                        const mPro = counters.mobileSearch?.[0]?.pointProgress || 0;
                        const readPro = (FuckD.read.date == FuckD.bing.dateNowNum) ? GM_getValue("Config.readPoint", 0) : 0;
                        const promosPro = (FuckD.promos.date == FuckD.bing.dateNowNum) ? GM_getValue("Config.promosPoint", 0) : 0;
                        const signPro = (FuckD.sign.date == FuckD.bing.dateNowNum) ? GM_getValue("Config.signPoint", 0) : 0;
                        const todayPoints = pcPro + mPro + readPro + promosPro + signPro;
                        const availablePoints = dashboard?.userStatus?.availablePoints || 0;
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        // 新连签区（灰度）计数器未进账时不再报「全部完成」，改报积分已到账 + 连签缺口
                        const streakPending = FuckF.streakSectionBrief(FuckF.parseStreakSection(lastRewardHtml.dash), true);
                        FuckD.bing.sendMSG = `${streakPending ? "🟡今日所选任务已完成（积分已到账），但新连签区未进账！" : "🎉今日所选任务已全部完成！"}\n✨今日共获取：${todayPoints} 积分\n💰 当前总积分：${availablePoints} 积分${streakPending ? `\n⚠️连签计数器：${streakPending}（微软灰度新计数器，现有上报通道不被承认，不影响上述积分）` : ""}`;
                        FuckF.log("🔵", FuckD.bing.sendMSG, true);
                        FuckF.send(FuckD.wh);
                    } else {
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        FuckF.log("💤", "今日所选任务已全部完成，继续保持休眠...");
                    }
                } else {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    FuckF.log("🔵", `本次运行结束！用时 ${(FuckF.getTimestamp() - seconds) / 1000} 秒`);
                }
            }
            resolve()
        }
    }

    FuckF.signStart = async () => {
        const result = await FuckF.taskSign()
        if (!result) {
            setTimeout(() => { FuckF.signStart() }, FuckD.bing.time)
        } else {
            FuckF.tasksEnd()
        }
    }

    FuckF.readStart = async () => {
        const result = await FuckF.taskRead()
        if (!result) {
            setTimeout(() => { FuckF.readStart() }, FuckD.bing.time)
        } else {
            FuckF.tasksEnd()
        }
    }

    FuckF.promosStart = async () => {
        const result = await FuckF.taskPromos()
        if (!result) {
            setTimeout(() => { FuckF.promosStart() }, FuckD.bing.time)
        } else {
            await FuckF.taskStreak()
            await FuckF.taskStreakSection()
            await FuckF.taskClaim(lastRewardHtml)
            FuckF.tasksEnd()
        }
    }

    FuckF.searchStart = async () => {
        const result = await FuckF.taskSearch()
        if (!result) {
            let timespan = FuckD.bing.time
            if (FuckD.search.index < FuckD.search.limit) {
                const span = Number(FuckD.bing.span) || 30;
                const spanMIN = (span - 15) * 1000
                const spanMAX = (span + 15) * 1000
                timespan = FuckF.getScopeRandomNum(spanMIN, spanMAX)
            }
            FuckF.log("🔍", `第 ${FuckD.search.index}/${FuckD.search.limit} 次搜索完成\n(${FuckD.search.device})，等待 ${timespan / 1000} 秒后继续...`)
            setTimeout(() => { FuckF.searchStart() }, timespan)
        } else {
            await FuckF.taskClaim()
            FuckF.tasksEnd()
        }
    }

    FuckF.punchcardStart = async () => {
        const result = await FuckF.taskPunchcard()
        if (!result) {
            setTimeout(() => { FuckF.punchcardStart() }, FuckD.bing.time)
        } else {
            FuckF.tasksEnd()
        }
    }

    FuckF.tasksStart = async (initDelay = 0) => {
        if (GM_info.script.author != "geoisam@qq.com") return resolve();
        const host = "www.bing.com"
        if (!FuckD.bing.host) {
            if (FuckD.bing.status) {
                FuckD.bing.host = "cn.bing.com"
            } else {
                let url = await FuckF.xhr({
                    url: `https://${host}/`,
                    headers: {
                        "cookie": FuckD.cookie.mkt,
                    },
                }, true)
                url = new URL(url)
                FuckD.bing.host = url ? url.host : host
            }
        }

        const envStatus = await FuckF.mainlandCheck()
        if (envStatus === 1) {
            FuckD.bing.code = -1
            FuckF.tasksEnd()
            return resolve()
        } else if (envStatus === 2) {
            FuckD.bing.sendMSG = "🚫网络连接异常，已停止运行！";
            FuckF.log("🔴", FuckD.bing.sendMSG, true);
            FuckF.send(FuckD.wh);
            return resolve();
        } else {
            const isKeep = GM_getValue("Config.keep", true);
            const needSign = FuckD.tasks.sign && (isKeep || FuckD.sign.date != FuckD.bing.dateNowNum);
            const needRead = FuckD.tasks.read && (isKeep || FuckD.read.date != FuckD.bing.dateNowNum);
            const needPromos = FuckD.tasks.promos && (isKeep || FuckD.promos.date != FuckD.bing.dateNowNum);
            const needSearch = FuckD.tasks.search && (isKeep || FuckD.search.date != FuckD.bing.dateNowNum);
            const needPunchcard = FuckD.tasks.punchcard && (isKeep || FuckD.punchcard.date != FuckD.bing.dateNowNum);
            FuckF.log("🔵", `初始化运行完成！用时 ${((FuckF.getTimestamp() - seconds) - initDelay) / 1000} 秒`);
            const isTokenOK = await FuckF.renewToken();
            if (!isTokenOK) {
                FuckD.tasks.sign = false;
                FuckD.tasks.read = false;
                FuckD.bing.sendMSG = "Token 请求失败，已自动跳过签入和阅读任务，请检查网络连接";
                await new Promise(resolve => setTimeout(resolve, 500));
                FuckF.log("🟡", FuckD.bing.sendMSG, true);
                FuckF.send(FuckD.wh);
            }
            // Edge 浏览连签：与主流程解耦的后台计时上报（约 30 分钟），需 dapi Token；不阻塞本次运行 resolve
            if (FuckD.tasks.edge && FuckD.bing.token) {
                FuckF.taskEdgeBrowsing().catch(e => FuckF.log("🔴", `Edge 浏览连签调度异常！🔛${e.message}`));
            }
            if (needPromos || needSearch) {
                const result = await FuckF.getRewardsInfo();
                if (!result) {
                    FuckD.bing.sendMSG = "⚠️请检查 rewards.bing.com 是否登录！";
                    FuckF.log("🔴", FuckD.bing.sendMSG, true);
                    FuckF.send(FuckD.wh);
                    return resolve();
                } else {
                    if (needPromos) setTimeout(() => { FuckF.promosStart() }, FuckD.bing.time * 2);
                    if (needSearch) {
                        const counters = result.userStatus?.counters || {};
                        const pcPro = counters.pcSearch?.[0]?.pointProgress || 0;
                        let pcMax = counters.pcSearch?.[0]?.pointProgressMax || 0;
                        const mPro = counters.mobileSearch?.[0]?.pointProgress || 0;
                        let mMax = counters.mobileSearch?.[0]?.pointProgressMax || 0;
                        if (pcMax === 0) pcMax = 60;
                        if (mMax === 0) mMax = 0;
                        if (pcPro >= pcMax && mPro >= mMax) {
                            FuckD.search.end++;
                            if (FuckD.search.date != FuckD.bing.dateNowNum) {
                                FuckD.search.date = FuckD.bing.dateNowNum;
                                GM_setValue("Config.tasks", FuckD.bing.tasks);
                                const pcReport = pcMax ? `\n💻电脑端搜索：${pcPro}/${pcMax}` : "";
                                const mReport = mMax ? `\n📱手机端搜索：${mPro}/${mMax}` : "";
                                FuckD.bing.sendMSG = `🔍搜索任务已完成！${pcReport}${mReport}`;
                                FuckF.log("🔵", FuckD.bing.sendMSG, true);
                                FuckF.send(FuckD.wh);
                            }
                            FuckF.tasksEnd();
                        } else {
                            FuckF.log("🔍", "检测到搜索积分未满，开始搜索...");
                            setTimeout(() => { FuckF.searchStart() }, 100);
                        }
                    } else {
                        FuckF.searchStart();
                    }
                }
            } else {
                FuckF.promosStart();
                FuckF.searchStart();
            }
            if (needSign) {
                setTimeout(() => { FuckF.signStart() }, FuckD.bing.time);
            } else {
                FuckF.signStart();
            }
            if (needRead) {
                setTimeout(() => { FuckF.readStart() }, FuckD.bing.time * 3);
            } else {
                FuckF.readStart();
            }
            if (needPunchcard && FuckD.bing.token) {
                setTimeout(() => { FuckF.punchcardStart() }, FuckD.bing.time * 4);
            } else if (needPunchcard) {
                FuckF.punchcardStart();
            } else {
                // 本轮不执行打卡：显式结算，避免 tasksEnd 永久等待导致脚本不 resolve
                FuckD.punchcard.end++;
                FuckF.tasksEnd();
            }
        }
    }
    const isKeep = GM_getValue("Config.keep", true);
    const checkDone = (taskEnabled, taskDate) => !taskEnabled || taskDate == FuckD.bing.dateNowNum;
    const isAllDone = checkDone(FuckD.tasks.sign, FuckD.sign.date) && checkDone(FuckD.tasks.read, FuckD.read.date) && checkDone(FuckD.tasks.promos, FuckD.promos.date) && checkDone(FuckD.tasks.search, FuckD.search.date) && checkDone(FuckD.tasks.punchcard, FuckD.punchcard.date);
    if ((!isKeep && isAllDone) || !FuckD.bing.repo.includes("geoisam") || (!FuckD.tasks.sign && !FuckD.tasks.read && !FuckD.tasks.promos && !FuckD.tasks.search && !FuckD.tasks.punchcard)) {
        if (isAllDone) {
            const allDoneDate = GM_getValue("Config.allDoneDate", 0);
            if (allDoneDate != FuckD.bing.dateNowNum) {
                GM_setValue("Config.allDoneDate", FuckD.bing.dateNowNum);
                FuckF.getRewardsInfo().then(dashboard => {
                    const counters = dashboard?.userStatus?.counters || {};
                    const pcPro = counters.pcSearch?.[0]?.pointProgress || 0;
                    const mPro = counters.mobileSearch?.[0]?.pointProgress || 0;
                    const readPro = (FuckD.read.date == FuckD.bing.dateNowNum) ? GM_getValue("Config.readPoint", 0) : 0;
                    const promosPro = (FuckD.promos.date == FuckD.bing.dateNowNum) ? GM_getValue("Config.promosPoint", 0) : 0;
                    const signPro = (FuckD.sign.date == FuckD.bing.dateNowNum) ? GM_getValue("Config.signPoint", 0) : 0;
                    const todayPoints = pcPro + mPro + readPro + promosPro + signPro;
                    const availablePoints = dashboard?.userStatus?.availablePoints || 0;
                    setTimeout(() => {
                        FuckD.bing.sendMSG = `🎉今日所选任务已全部完成！\n✨今日共获取：${todayPoints} 积分\n💰 当前总积分：${availablePoints} 积分`;
                        FuckF.log("🔵", FuckD.bing.sendMSG, true);
                        FuckF.send(FuckD.wh);
                        resolve();
                    }, 1000);
                });
            } else {
                setTimeout(() => {
                    FuckF.log("💤", "今日所选任务已全部完成，继续保持休眠...");
                    resolve();
                }, 1000);
            }
        } else {
            resolve();
        }
    } else {
        //const initDelay = FuckF.getScopeRandomNum(1000, 1000);
        //调试用，1秒停留时间
        const initDelay = FuckF.getScopeRandomNum(5000, 95000);
        FuckF.log("⏳", `为规避定时器特征，停留 ${initDelay / 1000} 秒后运行...`);
        setTimeout(() => {
            FuckF.tasksStart(initDelay);
        }, initDelay);
    }
})
