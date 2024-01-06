import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { Login_page } from './sub_folder/Login_page';
import { Nav_bar } from "./sub_folder/Nav_bar";
import { View } from "./sub_folder/View";

import { Triplist } from "./sub_folder/Triplist";
import { Update_trip } from "./sub_folder/Update_trip";
import { Add_trip } from "./sub_folder/Add_trip";
import { Notes } from "./sub_folder/notes";

import {  Memberlist } from "./sub_folder/member";




export default function App() {
const navigate =  useNavigate();


  return (

<div className="app_dev">

<Routes>
          <Route path="*" element={<Login_page />} />
          <Route path="/trip_list" element={<><Nav_bar  /><ProtectedRouted><Triplist /></ProtectedRouted></>} />         
          <Route path="/update_trip/:url" element={<><Nav_bar /><Update_trip /></>} />
          <Route path="/trip_list/add_trip" element={<><Nav_bar /><Add_trip /></>} />
          <Route path="/view/:url" element={<><Nav_bar /><View /></> } />
          <Route path="/notes" element={<><Nav_bar /><Notes /></> } />
          <Route path="/memberlist" element={<><Nav_bar /><Memberlist /></> } />
          
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

