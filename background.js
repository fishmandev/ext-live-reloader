
var ws = new WebSocket("ws://live-reloader.dev:3000")
ws.onmessage = (message) => {
  if (message.data == 'reload') {
    chrome.tabs.query({active: true, url: 'http://*.zone/*'}, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.reload(tabs[0].id)
      }
    })
  }
}