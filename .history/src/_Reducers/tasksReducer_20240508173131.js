export default function tasksReducer(tasks, action) {
 switch (action.type) {
   case 'added': {
     return [
       ...tasks,
       {
         id: action.id,
         ...action.task,
         done: false,
       },
     ];
   }
   case 'edit': {
    return tasks.map((t) => {

      if (t.taskId === action.task.taskId) t.isEdit = !action.task.isEdit;  
          
     return t;
    });
  }
   case 'changed': {
     return tasks.map((t) => {
      if (t.taskId === action.task.taskId) {
          t.name = action.task.name;
          t.description = action.task.description;
          t.status = action.task.status;
          t.isEdit = !action.task.isEdit;
          
       }
      return t;
     });
   }
   case 'deleted': {
     return tasks.filter((t) => t.taskId !== action.task.taskId);
   }
   default: {
     throw Error('Unknown action: ' + action.type);
   }
 }
}
