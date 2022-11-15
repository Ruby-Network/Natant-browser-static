// Made by r58playz and his aboutbrowser edited by MotorTruck1221
function sendMessage(msg, to) {
    to.postMessage(msg, window.origin);
}

window.addEventListener("message", (event) => {
    if (event.origin != window.origin) {
        console.error("get rekt malware");
    }
    let msg = event.data;
    let sender = event.source;
    if (msg.type === "setSetting") {
        console.debug("recieved setSetting for setting " + msg.setting + " and value " + msg.value);
        if (msg.setting === "searchEngineUrl") {
            // add checks here and send errcode over
            searchEngineUrl = msg.value;
            setSetting("searchEngineUrl", msg.value);
            sendMessage({ type: "settingSet", setting: "searchEngineUrl", errCode: 0 }, sender)
        } else if (msg.setting === "startUrl") {
            startUrl = msg.value;
            setSetting("startUrl", msg.value);
            sendMessage({ type: "settingSet", setting: "startUrl", errCode: 0 }, sender)
        } else if (msg.setting === "proxyId") {
            currentProxyId = msg.value;
            setSetting("currentProxyId", msg.value);
            sendMessage({ type: "settingSet", setting: "proxyId", errCode: 0 }, sender)
        } else {
            sendMessage({ type: "settingSet", setting: "unknown", errCode: 1 }, sender)
        }
    } else if (msg.type === "getSetting") {
        console.debug("recieved getSetting for setting " + msg.setting);
        if (msg.setting == "searchEngineUrl") {
            sendMessage({ type: "settingValue", setting: "searchEngineUrl", value: searchEngineUrl }, sender);
        } else if (msg.setting == "currentProxyId") {
            sendMessage({ type: "settingValue", setting: "currentProxyId", value: currentProxyId }, sender);
        } else if (msg.setting == "startUrl") {
            sendMessage({ type: "settingValue", setting: "startUrl", value: startUrl }, sender);
        } else if (msg.setting == "proxyId") {
            sendMessage({ type: "settingValue", setting: "proxyId", value: currentProxyId }, sender);
        }
    } else if (msg.type === "resetSettings") {
        resetSettings();
        initSettings();
    } else if (msg.type === "openUrl") {
        addTab(msg.value);
    } else if (msg.type === "setUrl") {
        console.debug("recieved setUrl for url " + msg.value);
        changeUrl(msg.value);
    }
})