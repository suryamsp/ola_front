
import Button from '@mui/material/Button';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { CloseTwoTone } from '@mui/icons-material';



export function Nav_bar(){

  

    const navigate = useNavigate();






  
    return(


<div className='nav_bar_btn' >
<button type="button" className="btn btn-primary font-weight-bold" onClick={()=>navigate("/Leave")}>Leave Form</button>

</div>

);
}