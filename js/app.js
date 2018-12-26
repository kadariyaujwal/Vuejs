Vue.component('coupoun',{
    template:`
        <input class="form-control" placeholder = "please enter your coupoun code" @blur="onCoupounApplied">
    `,
    methods:{
        onCoupounApplied(){
            this.$emit('applied');
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
    }
})