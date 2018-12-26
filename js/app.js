Vue.component('task-list',{
    template:
    `           <div>
                    <task v-for="task in tasks" v-text="task.description" :key="task.id"></task>
                </div>
    `,
    data(){
        return{
            tasks:[
                {description:"go to the store",completed:true},
                {description:"play music",completed:false},
                {description:"eat the apple",completed:true},
                {description:"do some code",completed:false},
                {description:"dance",completed:true},
                {description:"do the work",completed:false},
                {description:"submit assignment",completed:false},
                {description:"visit college",completed:false},
            ]
        }
    }
});

Vue.component('task',{
    template:`<li><slot></slot></li>`
})

new Vue({
    el:'#app'
})