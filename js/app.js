Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive}">
                        <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
                    </li>
                </ul>
            </div>

            <div class="tab-details">
                <slot></slot>
            </div>
        </div>
    `,
    data(){
        return{
            tabs:[]
        }
    },
    created(){
        this.tabs=this.$children;
    },
    methods:{
        selectTab(currentTab){
            this.tabs.forEach(function(tab){
                tab.isActive = false;
            });
            currentTab.isActive=true;
        }
    }
});
Vue.component('tab', {
    template: `
        <div v-show="isActive">
            <slot></slot>
        </div>
    `,
    data() {
        return {
          isActive:false,  //You should consider props to be immutable(meaning it cannot be changed), so make it mutable with data() or computed properties of vue.
        }
    },
    mounted(){
        this.isActive = this.selected; 
    },
    computed:{
        href(){
            return "#"+this.name.toLowerCase().replace(/ /g,'-'); 
        }
    },
    props:{
        name:{required:true},
        selected:{default:false}
    }
})
new Vue({
    el: '#app',
    data: {
        selected: true,
    }
})