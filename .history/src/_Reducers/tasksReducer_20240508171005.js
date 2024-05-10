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
   case 'changed': {
     return tasks.map((t) => {
      if (t.taskId === action.task.taskId) {
          t.isEdit = !t.isEdit;
          t.name = taskName;
          t.description = taskDescription;
          t.updated = new Date().toISOString();
          t.status = taskStatus;
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
