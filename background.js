(function() {
  
  var receiveRequest = function(request, sender, response) {
    // Get the url to open
    var url = request.url;
    console.log(url);
    chrome.tabs.create({url: url, active: false});
  };
  
  // Listen for tab switch requests from content script
  chrome.extension.onRequest.addListener(receiveRequest);
  
})();