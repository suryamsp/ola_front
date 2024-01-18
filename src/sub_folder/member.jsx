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
  const [deletememdata, setDeletemendata]=useState();


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
              <div className="modal fade" id='memberModalCenter' tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">DELETE</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Confirm to Delete Members <span className='span_dev'>{deletememdata}</span> 
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => deletemember(deletememdata)}>DELETE</button>
      </div>
    </div>
  </div>
</div>
     <div className="member_dev">
      
              {login.map((data,index) => (     
        <div className="member_card">

        <div><img src="/img/member.jpg" className="member_img" /></div>
        <div className="card-body">
          <h5 className="card-title">NAME:  {data.username}</h5>
          <p className="card-text">EMAIL:  {data.Email}</p>
      
                  <button type="button" className="btn btn-danger" data-toggle="modal" data-target='#memberModalCenter' onClick={()=>setDeletemendata(data.username)}>DELETE</button>
        </div>

      </div>
    
        ))}
        </div>
   </div>

  );
}