import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react'
import { Login_page } from './Login_page';
import { Nav_bar } from "./Nav_bar";
import { View } from "./View";

import { Triplist } from "./Triplist";
import { Add_trip } from "./Add_trip";



export default function App() {

  return (

<div className="app_dev">

<Routes>
          <Route path="*" element={<Login_page />} />
          <Route path="/trip_list" element={<><Nav_bar /><Triplist /></>} />
          <Route path="/Add_trip" element={<><Nav_bar /><Add_trip /></>} />
</Routes>
</div>

  );
}


