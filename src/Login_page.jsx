import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { Forget } from './Forget';
import { Create_Account } from './Create_Account';
import { Admin } from './Admin';

export function Login_page() {

  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login-right">
        <div>
          <button className="btn1" onClick={() => navigate("/")}>Login</button>
          <button className="btn2" onClick={() => navigate("/admin")}>Admin</button>
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/new_user" element={<Create_Account />} />
          <Route path="/forget_password" element={<Forget />} />
        </Routes>

      </div>
    </div>
  );
}
