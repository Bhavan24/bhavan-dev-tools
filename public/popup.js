chrome.tabs.query(
    {
        active: true,
        lastFocusedWindow: true,
    },
    function (tabs) {}
);
