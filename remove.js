let LAST_TARGET = null;

document.addEventListener('contextmenu', (event) => {
  // Save the element under the context menu in case 'remove' is clicked.
  LAST_TARGET = event.target;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request?.message === 'remove') {
    LAST_TARGET.parentElement.removeChild(LAST_TARGET);
  }
});
