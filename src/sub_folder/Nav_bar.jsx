
import Button from '@mui/material/Button';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { CloseTwoTone } from '@mui/icons-material';



export function Nav_bar(){

  const [Admin, setAdmin] = useState(false);
  const [message,setmessage]= useState(false)
    const navigate = useNavigate();

  const formik=useFormik({
    initialValues:{note_key:""},
    onSubmit:(values)=>{Notever(values)}
  })

  const Notever = (values) => {
    if(values.note_key === '4082'){
        $("#exampleModalCenter").click();
        navigate('/notes');
    }else{
      setmessage(true);
    }
};

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

  
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content" >
      <div className="modal-body" >
      <form class="was-validated" onSubmit={formik.handleSubmit} >
          <div className="form-group">
            <label htmlFor="name" className="col-form-label">Secret Key</label>
            <input type="password" className="form-control"
                   name='note_key'
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.note_key}
                   required
                   id="name"
                  />
                  <div class="valid-feedback">
                  {message && <span style={{ color: "red" }}>Invalid secret key</span>}

    </div>
          </div>
        
        
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary"  >OK</button>
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