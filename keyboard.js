(function() {

  var keyListener = function(e) {
  	// Keyboard shortcut is shift+V
    if (!e.altKey && !e.metaKey && e.shiftKey && e.keyCode === 86) {
      // Get the URL to navigate to    	
      var targeturl = $('a.websiteCallForAction').attr('href');
      chrome.extension.sendRequest({url: targeturl});
      
      // Prevent feedly's default preview shortcut
      e.stopImmediatePropagation();
      e.preventDefault()
    }
  }

  // Need to be a keydown event to prevent feedly's nonsense
  window.addEventListener('keydown', keyListener, false);
})();