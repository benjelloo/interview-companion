// background.js
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({ text: 'OFF' });
});

const meet = 'https://meet.google.com/';
const zoom = 'https://zoom.us/';

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(meet) || tab.url.startsWith(zoom)) {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState
    });
    console.log(nextState);
    if (nextState === 'ON') {
      console.log("turning");
    }
    else if (nextState === 'OFF') {
      console.log("off");
    }
  }
});