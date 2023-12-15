import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react'
import { Login_page } from './Login_page';
import { Nav_bar } from "./Nav_bar";



export default function App() {

  return (

<div className="app_dev">
<Nav_bar/>
<View />
</div>

  );
}

function View(){
  return(
<div className="view_dev">

  <div>
    <img src="./img/tirupathi.jpg" class="view_img" alt="Thirupathi" />
    </div>
  <div class="view-body">
 
    <div className="view-con">
    <label>Trip</label> 
    <label>district</label> 
    <label>Date</label> 
    <label>Route</label> 
    <label>Budjet</label> 
    <label>Status</label> 
    <label>Members</label>
    <label>Description</label>
    </div>
    <div className="view-con2">
    <p>: Thirupathi </p> 
    <p>: Thirupathi / Andhra pradesh </p> 
    <p>: 12-10-2023 </p> 
    <p>: Chennai- Renigunta - kalahasti - Thirupathui </p> 
    <p>: 500 /per head </p> 
    <p>: Trip Completed <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color="green" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg> </p> 
    <p>: Surya - venkatesan - Vijayakumar -Gnanavel </p>
    <p>: Gnanavel is return to chennai not completed trip. because over crowd to  thirupathi </p>
    </div>
    
  </div>
</div>
  );
}
