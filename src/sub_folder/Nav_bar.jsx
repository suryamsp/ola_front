
import Button from '@mui/material/Button';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



export function Nav_bar(){

  const [Admin, setAdmin] = useState(false);
  const navigate = useNavigate();

  const Logout=()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }

useEffect(() => {
  const key = localStorage.getItem("token");
  setAdmin(key === "suryamsp");
}, []);

  function Close(e) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggler").is(":visible");
    if (toggle) {
        $(".navbar-collapse").collapse('hide');
    }
  };
  
    return(

    <div className='nav-bar'>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"   >
      <div id="navbar" className="container-fluid"> 
   <div>
   <img className='logo' src='./img/n_name.png'></img>
      {/* <img className='logo1' src='./img/n_logo.png'></img> */}
   </div>
        <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
          <div className="navbar-nav"  >
           <div className='nav_content'>
           <button type="button" className="nav-link text-white font-weight-bold" onClick={(e)=>{navigate("/trip_list"),Close(e)}}>HOME</button>
           <button type="button" className="nav-link  text-white font-weight-bold" onClick={(e)=>{navigate("/notes"),Close(e)}}>NOTES</button>
           <button type="button" className="nav-link text-white font-weight-bold" onClick={(e)=>{Logout(),Close(e)}}>LOGOUT</button>
          {Admin &&  <button type="button" className="nav-link  text-white font-weight-bold" onClick={(e)=>{navigate("/trip_list/add_trip"),Close(e)}}>ADD</button>}
          {Admin &&  <button type="button" className="nav-link  text-white font-weight-bold" onClick={(e)=>{navigate("/memberlist"),Close(e)}}>MEMBERS</button>}
         
           </div>
          
            
          </div>
        </div>
      </div>
    </nav>
    </div>
);
}