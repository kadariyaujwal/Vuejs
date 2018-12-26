Vue.component('progress-view',{  //Its good practice to name inline templates using {name}-view
    data(){
        return{
            completionRate:50
        }
    }
})

new Vue({
    el: '#app',
});