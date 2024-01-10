
import Button from '@mui/material/Button';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { CloseTwoTone } from '@mui/icons-material';



export function Nav_bar(){

  const [Admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

const Notesver=(e)=>{
console.log(e.target.value);
}
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
  <div class="modal fade" id="exampleModalCenter" show="true" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content" >
      <div class="modal-body" >
      <form>
          <div class="form-group">
            <label htmlFor="name" class="col-form-label">Secret Key</label>
            <input type="password" class="form-control"
                   name='note_key'
                   onChange={e}
                   
                  />
          </div>
        
        
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" onClick={(e)=>Notesver(e)} data-dismiss={ isModalOpen ? 'modal' : undefined} >OK</button>
      </div>
      </form>
      </div>
    </div>
  </div>
</div> 
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"   >
      <div id="navbar" className="container-fluid"> 
   <div>
   <img className='logo' src='..\img\n_name.png'></img>
   </div>
        <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
          <div className="navbar-nav"  >
           <div className='nav_content'>
           <button type="button" className="nav-link text-white font-weight-bold" onClick={(e)=>{navigate("/trip_list"),Close(e)}}>HOME</button>
           <button type="button" className="nav-link  text-white font-weight-bold" data-toggle="modal" data-target="#exampleModalCenter" onClick={(e)=>{Close(e)}}>NOTES</button>
           <button type="button" className="nav-link text-white font-weight-bold"  onClick={(e)=>{Logout(),Close(e)}}>LOGOUT</button>
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