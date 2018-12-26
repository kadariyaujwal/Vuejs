var app = new Vue({
    el:'#app',
    data:{
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
    },
    method:{
        toggleCompleted(task){
            
        }
    },
    computed:{
       completeTasks(){
           return this.tasks.filter(task=>task.completed);

        //    return this.tasks.filter(function(task){
        //        return task.completed;
        //    })
       },

       incompleteTasks(){
            return this.tasks.filter(task=>!task.completed);

            // return this.tasks.filter(function(task){
            //     return !task.completed;
            // });
       }
    }

});