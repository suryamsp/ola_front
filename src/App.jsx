import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react'
import { Login_page } from './Login_page';
import { Nav_bar } from "./Nav_bar";
import { View } from "./View";

import { Triplist } from "./Triplist";
import { Update_trip } from "./Update_trip";
import { Add_trip } from "./Add_trip";
import { Notes } from "./notes";



export default function App() {

  return (

<div className="app_dev">

<Routes>
          <Route path="*" element={<Login_page />} />
          <Route path="/trip_list" element={<><ProtectedRouted><Nav_bar /><Triplist /></ProtectedRouted></>} />          
          <Route path="/update_trip/:url" element={<><Nav_bar /><Update_trip /></>} />
          <Route path="/add_trip" element={<><Nav_bar /><Add_trip /></>} />
          <Route path="/view/:url" element={<><Nav_bar /><View /></> } />
          <Route path="/notes" element={<><Notes /></> } />
</Routes>
</div>

  );
}

function ProtectedRouted({children}){
  const token = localStorage.getItem("token");

  return token ?(
    <section>
<div style={{marginTop:"100px"}}></div>
      {children}
    </section>
  ) : (
<Navigate replace to="/" />
  );
  
}

function ProtectedAdminRouted({children}){
  const key = localStorage.getItem("key");
  const navigate = useNavigate();
  const [admin,setadmin]= useState(true);
  return key ?(
    <section>
      <div style={{marginTop:"100px"}} className="success_main_btn">
     <div> {admin && <button className="success_btn"  href="" onClick={()=>navigate("/add_trip")}>ADD</button>}</div>
   <div>   <button className="success_btn" href=""  onClick={()=> navigate("/update_trip")}>UPDATE</button></div>
   <div> <button className="success_btn"  href="" onClick={()=>navigate("/view")}>View</button></div>
      </div>
      {children}
    </section>
  ) : (
<Navigate replace to="/" />
  );
}