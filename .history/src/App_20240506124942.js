
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login";
import TaskList from "./pages/Task";


let App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
          <Route index element={<LoginForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="tasks" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
      



   

    </div>


  );
}


export default App;
