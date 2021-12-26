Vue.component("topic-list", {
    props: ["items"],
    template: `<ul class="topic_list">
        <li v-for="(item, index) in items" :key="index">
            <a :href="item.url">{{ item.description }}</a>
        </li>
    </ul>
    `
});

Vue.component("search-bar", {
    data() {
        return {
            searchTerm: "",
        }
    },
    methods: {
        filterList() {
            let searchTermFound = window.find(this.searchTerm);
            if(!searchTermFound) {
                let firstTabIndex = app.currentTabIndex;
                for(let i = 0; i < app.tabsID.length; i++) {
                    if(i !== app.currentTabIndex) {
                        tabsInstance.select(app.tabsID[i]);
                        if(window.find(this.searchTerm)) {
                            return;
                        };
                    };
                }
                tabsInstance.select(app.tabsID[firstTabIndex]);
                alert("Search term not found.");
            }
        }
    },
    template: `
        <div class="container">
          <div class="row valign-wrapper">
            <div class="input-field col s12 m8 offset-m2">
                <i class="material-icons prefix">search</i>
                <input id="search_bar" type="text" class="validate" v-model="searchTerm">
                <label for="search_bar">I'm looking for...</label>
            </div>
            <div class="col m2">
                <button class="btn waves-effect waves-light" id="search_btn" @click="filterList">
                Search
                </button>
            </div>
          </div>
       </div>
    `
})

let app = new Vue({
    el: "#app",
    data: {
        currentDate: "26/12/2021",
        wholeList,
        currentTabIndex: 0,
        tabsID: ["front-end", "back-end", "cs-concepts", "misc"]
    },
    methods: {
        updateCurrentTab(index) {
            this.currentTabIndex = index;
        },
    },
    computed: {
        lastUpdated() {
            return "Last Updated: " + this.currentDate
        },
    },
});

