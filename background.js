
var ws = new WebSocket("ws://live-reloader.dev:3000")
ws.onmessage = (message) => {
  if (message.data == 'reload') {
    chrome.tabs.reload()
  }
}