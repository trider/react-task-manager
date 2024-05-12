import { createContext, useReducer } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

const TasksProvider = ({ children }) => {};

export default TasksProvider;