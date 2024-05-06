// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login";
import TaskList from "./pages/Task";

const path = process.env.REACT_APP_FOR_PATH;

function App() {
  return (
    <>
      <BrowserRouter baseline="/">
        <Routes>
            <Route path="tasks" element={<TaskList />} />
        </Routes>
      </BrowserRouter>

      <LoginForm />
    </>
  );
}

export default App;
