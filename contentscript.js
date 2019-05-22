chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	var evt = document.createEvent("customEvent");
	evt.initCustomEvent(request.method, true, true);
    document.dispatchEvent(evt);    
});

var s = document.createElement('script');
s.src = chrome.runtime.getURL('script_amazon.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.remove();
};
