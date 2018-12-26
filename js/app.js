window.Event = new class{
    constructor(){
        this.vue = new Vue();
    }
    fire(event,data=null){
        this.vue.$emit(event,data);
    }
    listen(event,callback){
        this.vue.$on(event,callback);
    }
}
Vue.component('coupoun',{
    template:`
        <input class="form-control" placeholder = "please enter your coupoun code" @blur="onCoupounApplied">
    `,
    methods:{
        onCoupounApplied(){
            Event.fire('applied');
        }
    }
})
new Vue({
    el: '#app',
    data: {
        coupounApplied:false
    },
    methods:{
        onCoupounApplied(){
            this.coupounApplied = true;
        }
    },
    created(){
        Event.listen('applied',()=>{
            alert("hello beautiful");
        })
    }
})