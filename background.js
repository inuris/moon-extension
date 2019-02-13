//Listen for when a Tab changes state
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo && changeInfo.status == "complete"){
        console.log("Tab updated: " + tab.url);

        chrome.tabs.sendMessage(tabId, {data: tab}, function(response) {
            console.log(response);
        });

    }
});
// So sánh version, nếu có mới thì nhảy ra thông báo
var manifest = chrome.runtime.getManifest();
if (localStorage.version != manifest.version) {
    chrome.browserAction.onClicked.addListener(function () {
        localStorage.version = manifest.version;
        alert("Công cụ báo giá MoonHangMy vừa được cập nhật. Nếu công cụ bị ngưng hoạt động, vui lòng vào Chrome Menu -> Chọn công cụ MoonHangMy ở cuối -> Re-enable.")
    });
}