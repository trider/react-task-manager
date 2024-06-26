// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from "./pages/Login";
// import TaskList from "./pages/Task";
import TaskList from './Tasks/Tasks';

// const path = process.env.REACT_APP_FOR_PATH;

function App() {
  return (
    <div>
      <Router baseline="/">
        <Routes>
          <Route index element={<LoginForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="tasks" element={<TaskList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
