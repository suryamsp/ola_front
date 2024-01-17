import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from "./Api";





export function Memberlist() {
  const navigate =useNavigate();

  const [login, loginList] = useState([]);


  const getloginlist = async () => {
    try {
      const response = await fetch(`${API}/member`);
      const list = await response.json();
      loginList(list);
    } catch (error) {
      console.error("Error fetching Triplist:", error);
    }
  };



useEffect(() => {
  getloginlist();

}, []);

const deletemember = async (title) => {
  try {
    await fetch(`${API}/member/${title}`, {
      method: 'DELETE',
    });
    await getloginlist();
  } catch (error) {
    console.error('Error deleting note:', error);
  }
};

  return (
   <div>
     <div className="member_dev">
      
              {login.map((data,index) => (     
        <div className="member_card">
          <div class="modal fade" id={`exampleModalCentersss-${data.username}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">DELETE</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Confirm to Delete Members <span className='span_dev'>{data.username}</span> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => deletemember(data.username)}>DELETE</button>
      </div>
    </div>
  </div>
</div>
        <div><img src="/img/member.jpg" className="member_img" /></div>
        <div className="card-body">
          <h5 className="card-title">NAME:  {data.username}</h5>
          <p className="card-text">EMAIL:  {data.Email}</p>
        </div>
        <IconButton sx={{ marginLeft: 'auto' }} color="error" data-toggle="modal" data-target={`#exampleModalCentersss-${data.username}`}>
                    <DeleteIcon />
                  </IconButton>
      </div>
    
        ))}
        </div>
   </div>

  );
}