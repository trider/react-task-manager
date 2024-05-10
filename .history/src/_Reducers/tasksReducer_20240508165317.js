export default function tasksReducer(tasks, task, action) {
 switch (action.type) {
   case 'added': {
     return [
       ...tasks,
       ...task
     ];
   }
   case 'changed': {
     return tasks.map((t) => {
       if (t.id === action.task.id) {
         return action.task;
       } else {
         return t;
       }
     });
   }
   case 'deleted': {
     return tasks.filter((t) => t.id !== action.id);
   }
   default: {
     throw Error('Unknown action: ' + action.type);
   }
 }
}
