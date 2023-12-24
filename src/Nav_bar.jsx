
import Button from '@mui/material/Button';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useNavigate } from 'react-router-dom';



export function Nav_bar({mode,setmode,sty}){

  const navigate = useNavigate();

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
            {/* <a className="nav-link js-scroll-trigger text-white"  href=""   onClick={(e)=>{Close(e),navigate(-1)}}>HOME</a> */}
          
          
            
          </div>
        </div>
      </div>
    </nav>
    </div>
);
}