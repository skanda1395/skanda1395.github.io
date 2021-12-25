let tabsEl = document.querySelector(".tabs");
let tabsInstance = M.Tabs.init(tabsEl, {
// swipeable: true
});

const search_bar = document.querySelector("#search_bar");
const search_btn = document.querySelector("#search_btn");
search_btn.addEventListener("click", filterList);

const allLists = document.querySelectorAll("ul.topic_list");
const listItems = document.querySelectorAll("ul.topic_list li");


function filterList() {
    const searchTerm = search_bar.value.toLowerCase();
    let tab_id;
    for(let i = 0; i < allLists.length; i++) {
        let removeList = true;
        let innerList = allLists[i].querySelectorAll("li");
        for(let j = 0; j < innerList.length; j++) {
            let a = innerList[j].querySelector("a");
            if(a.innerText.toLowerCase().indexOf(searchTerm) > -1) {
                removeList = false;
                allLists[i].style.display = "";
                tab_id = allLists[i].parentElement.getAttribute("id");
                console.log(tab_id);
                // listItems[j].style.display = "";
            }
        }
        if(removeList) {
            allLists[i].style.display = "none";
        }
    }
    // tabsInstance.select(tab_id);
}

const links = {};
for(let i = 0; i < allLists.length; i++) {
    let innerList = allLists[i].querySelectorAll("li");
    for(let j = 0; j < innerList.length; j++) {
        let a = innerList[j].querySelector("a");
        let ref = {
            link: a.getAtttribute("href"),
            description: a.innerText
        }
    }
}

