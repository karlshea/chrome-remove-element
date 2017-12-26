chrome.contextMenus.create({
  contexts: ['all'],
  title: 'Remove Element',
  onclick: function(info, tab) {
    chrome.tabs.sendRequest(tab.id, 'remove');
  }
});
