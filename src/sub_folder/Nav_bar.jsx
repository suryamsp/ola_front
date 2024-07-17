
import Button from '@mui/material/Button';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { CloseTwoTone } from '@mui/icons-material';
import { API } from './Api';



export function Nav_bar(){

  

    const navigate = useNavigate();



    const deleteall = async () => {
        try {
          await fetch(`${API}/deleteall`, {
            method: 'DELETE',
          });
          console.log('All notes deleted successfully');
        } catch (error) {
          console.error('Error deleting note:', error);
        }
      };
      


  
    return(


<div className='nav_bar_btn' >

<div  className="modal fade" id='notesModaldelete' tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">DELETE</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Confirm to Delete All 
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={deleteall}>DELETE</button>
      </div>
    </div>
  </div>
</div>
<button type="button" className="btn btn-primary font-weight-bold" onClick={()=>navigate("/Leave")}>Leave Form</button>
<button type="button" className="btn btn-danger Delete_btn font-weight-bold" data-toggle="modal" data-target='#notesModaldelete' >Delete</button>

</div>

);
}