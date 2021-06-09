chrome.browserAction.onClicked.addListener(function() { //Trykk på ikonet
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function(tab) {
        chrome.tabs.create({ //opprett en ny fane
            "url": "https://www.netflix.com/browse?jbv=70143842" //url er denne
        })
    })
})