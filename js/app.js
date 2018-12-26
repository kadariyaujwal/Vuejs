window.Event = new Vue();
Vue.component('coupoun',{
    template:`
        <input class="form-control" placeholder = "please enter your coupoun code" @blur="onCoupounApplied">
    `,
    methods:{
        onCoupounApplied(){
            Event.$emit('applied');
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
        Event.$on('applied',()=>{
            alert("hello beautiful");
        })
    }
})