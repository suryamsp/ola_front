import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { Login_page } from './Login_page';
import { Nav_bar } from "./Nav_bar";
import { View } from "./View";

import { Triplist } from "./Triplist";
import { Update_trip } from "./Update_trip";
import { Add_trip } from "./Add_trip";
import { Notes } from "./notes";
import { Test } from "./test";
import {  Memberlist } from "./member";




export default function App() {
const navigate =  useNavigate();


  return (

<div className="app_dev">

<Routes>
          <Route path="*" element={<Login_page />} />
          <Route path="/trip_list" element={<><ProtectedRouted><Nav_bar  /><Triplist /></ProtectedRouted></>} />         
          <Route path="/update_trip/:url" element={<><Nav_bar /><Update_trip /></>} />
          <Route path="/add_trip" element={<><Nav_bar /><Add_trip /></>} />
          <Route path="/view/:url" element={<><Nav_bar /><View /></> } />
          <Route path="/notes" element={<><Nav_bar /><Notes /></> } />
          <Route path="/memberlist" element={<><Nav_bar /><Memberlist /></> } />
          <Route path="/test" element={<Test /> } />
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

