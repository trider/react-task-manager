import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login";
import TaskList from "./pages/Task";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="login" element={<LoginForm />} />
          <Route path="tasks" element={<TaskList />} />
        </Routes>
      </BrowserRouter>

      <LoginForm />
    </>
  );
}
