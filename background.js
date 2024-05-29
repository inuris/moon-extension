
// Listen for when a Tab changes state

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
    if (changeInfo && changeInfo.status === "complete" && tab) {
        console.log("Tab updated: " + tab.url);
        try {
            await chrome.tabs.sendMessage(tabId, { method: "changeTab" }, function (response) {
                console.log(response);
            });
        }
        catch (e) {
            console.log(e);
        }
    }
})