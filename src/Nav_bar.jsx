
import Button from '@mui/material/Button';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



export function Nav_bar(){

  const [name,setname]=useState();
  const navigate = useNavigate();

  // const getname=()=>{
  //   fetch ("http://localhost:4000/addlist")
  //   .then((data)=> data.json())
  //   .then ((list)=> setname(list));
  //  }
  //  useEffect(()=> getname());

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
           <div>
          
           <button type="button" class="btn btn-link text-white font-weight-bold" onClick={()=>navigate("/add_trip")}>ADD</button>
           <button type="button" class="btn btn-link text-white font-weight-bold" onClick={()=>navigate("/members")}>MEMBERS</button>
           <button type="button" class="btn btn-link text-white font-weight-bold" onClick={()=>navigate("/notes")}>NOTES</button>
           </div>
          
            
          </div>
        </div>
      </div>
    </nav>
    </div>
);
}