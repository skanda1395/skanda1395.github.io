let tabsEl = document.querySelector(".tabs");
let tabsInstance = M.Tabs.init(tabsEl, {
    onShow: function(e) {
        app.updateCurrentTab(tabsInstance.index);
    }
});