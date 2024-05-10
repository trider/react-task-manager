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
    
        if (t.taskId === action.task.taskId) t.isEdit = !t.isEdit;
      
     return t;
    });
  }
   case 'changed': {
     return tasks.map((t) => {
      if (t.taskId === action.task.taskId) {
          action.tasks.isEdit = !action.tasks.isEdit;
          t=action.task;
          t.updated = new Date().toISOString();
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
