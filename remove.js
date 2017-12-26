var LAST_TARGET = null;

document.addEventListener('contextmenu', function (event) {
  // Save the element under the context menu in case 'remove' is clicked
  LAST_TARGET = event.target;
});

chrome.extension.onRequest.addListener(function (event) {
  if (event === 'remove') {
    LAST_TARGET.parentElement.removeChild(LAST_TARGET);
  }
});
