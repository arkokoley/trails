let all = []

let browserHandle = chrome || browser

browserHandle.webRequest.onBeforeRequest.addListener(
  function(details) {
    details.to = new URL(details.url).hostname
    let from = details.originUrl || details.initiator
    details.from = from ? new URL(from).hostname : from
    details.user = false
    all.push(details)
  },
  {urls: ["<all_urls>"]});

browserHandle.webNavigation.onCommitted.addListener(
  function(details){
    let req = all.find(o => o.url === details.url && o.user === false)
    if (req) {
      req.user = true
    }
  });

function store () {
  let today = String(new Date().toISOString().slice(0, 10))
  console.log(today)
  browserHandle.storage.local.get([today], function(result) {
    if(result)
      console.log('Value currently is ' + result.length);
    let nowResults = all
    if(result[today]) {
      nowResults.unshift(...result[today])
    }
    let set = {}
    set[today] = nowResults
    browserHandle.storage.local.set(set, function() {
      console.log('Value is set to ' + nowResults.length);
      all = [];
    });
  });  
}

setInterval(store, 5 * 60 * 1000)

browserHandle.browserAction.onClicked.addListener(function(tab) { 
  browserHandle.storage.local.get(null, function(items) {
    var item = {hello: "world"}
    var dump =  new Blob([JSON.stringify(items)], {type: "application/json"})
    var url = URL.createObjectURL(dump)
    browserHandle.downloads.download({url: url}, console.log)
  });
});