chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'remove-element',
    title: 'Remove Element',
    contexts: ['all'],
  });
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
  if (item.menuItemId === 'remove-element') {
    chrome.tabs.sendMessage(tab.id, { message: "remove" });
  }
});