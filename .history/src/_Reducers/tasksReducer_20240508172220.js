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
      if (tasks.filter((t) => t.isEdit === true).length < 1) {
        if (t.taskId === task.taskId) t.isEdit = !t.isEdit;
      }
     return t;
    });
  }
   case 'changed': {
     return tasks.map((t) => {
      if (t.taskId === action.task.taskId) {
          t=action.task;
          t.isEdit = !t.isEdit;
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
