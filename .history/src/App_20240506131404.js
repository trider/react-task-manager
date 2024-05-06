// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
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
