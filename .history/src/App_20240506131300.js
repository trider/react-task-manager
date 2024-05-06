// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login";
import TaskList from "./pages/Task";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<LoginForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="tasks" element={<TaskList />} />
        </Routes>
      </BrowserRouter>

      <LoginForm />
    </>
  );
}

export default App;
