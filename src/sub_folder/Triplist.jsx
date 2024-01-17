import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from "./Api";





export function Triplist() {
  const navigate =useNavigate();

  const [tripList, setTripList] = useState([]);
  const [updateList, setUpdateList] = useState();
  const [Admin, setAdmin] = useState(false);
  
  useEffect(() => {
    const key = localStorage.getItem("token");
    setAdmin(key === "suryamsp");
  }, []);
  

  const fetchData = async (url, setList, errorMessage) => {
    try {
      const response = await fetch(url);
      const list = await response.json();
      setList(list);
    } catch (error) {
      console.error(`Error fetching ${errorMessage}:`, error);
    }
  };
  
  const getlist = async () => {
    await fetchData(`${API}/Triplist`, setTripList, "Triplist");
  };
  
  const getupdatelist = async () => {
    await fetchData(`${API}/Updatelist`, setUpdateList, "Updatelist");
  };
  
  useEffect(() => {
    getlist();
    getupdatelist();
  }, []);
  



const deletelist = async (name) => {
  try {
    await fetch(`${API}/${name}`, {
      method: 'DELETE',
    });
    await getlist();
  } catch (error) {
    console.error(`Error deleting ${name}:`, error);
  }
};


function ButtonDisable(data) {
  let result = true;

  for (let i = 0; i < updateList.length; i++) {
    if (updateList[i].trip_name === data.trip_name) {
      result = false;
      break; // Exit the loop once a mismatch is found
    }
  }

  return result;
}





  return (
   <div>
     <div className="main_dev">
      
    

              {tripList && tripList.map((data,index) => ( 
              <div>
              <div class="modal fade" id={`exampleModalCenters-${data.trip_name}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">DELETE</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Confirm to Delete <span className='span_dev'>{data.trip_name}</span> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=> deletelist(data.trip_name)}>DELETE</button>
      </div>
    </div>
  </div>
</div>
        <div  
        key={index}
        name={data.trip_name}
        className="card">
        <img src={data.image} className="card-img-top" alt="Thirupathi" />
        <div className="card-body">
          <h5 className="card-title">{data.trip_name}</h5>
          <p className="card-text">{
            data.description
          }</p>
          <div className="like_btn_div"><Counter /> 
          <div>{Admin && <IconButton color="primary" onClick={()=> navigate(`/update_trip/${data.trip_name}`)}><EditIcon/></IconButton>}
          {Admin && <IconButton sx={{ marginLeft: "auto" }}color="error" data-toggle="modal" data-target={`#exampleModalCenters-${data.trip_name}`} ><DeleteIcon/></IconButton>}</div>
          
          </div>
          <button style={{backgroundColor: ButtonDisable(data)? "red" : " green"}} disabled={ButtonDisable(data)} className="btn btn-primary btn_click"  onClick={()=>{navigate(`/view/${data.trip_name}`)}}
           >{ButtonDisable(data)? "Trip Not Completed" : "Trip Completed"}</button>
        </div>
      </div>
      </div>
        ))}
        </div>
   </div>
  

  );
}
