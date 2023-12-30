import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Upcoming } from "@mui/icons-material";




export function Triplist() {
  const navigate =useNavigate();

  const [tripList, setTripList] = useState([]);
  const [updateList, setUpdateList] = useState();
  
 const [state,setstate]= useState(false);

 const getlist = () => {
  fetch("http://localhost:4000/Triplist")
    .then((data) => data.json())
    .then((list) => setTripList(list))
    .catch((error) => console.error("Error fetching Triplist:", error));
};

const getupdatelist = () => {
  fetch("http://localhost:4000/Updatelist")
    .then((data) => data.json())
    .then((list) => setUpdateList(list))
    .catch((error) => console.error("Error fetching Updatelist:", error));
};

useEffect(() => {
  getlist();
  getupdatelist();
}, []);


const updatedata=[{
  "_id": {
    "$oid": "658b2ce131f9da25a1b71634"
  },
  "trip_name": "Thirupathi",
  "city": "andhara",
  "str_date": "2023-11-29",
  "end_date": "2023-12-01",
  "route": "channai",
  "website": "'poiuhghjk",
  "budjet": "500",
  "member": "suryya",
  "command": "no"
}];


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
      
              {tripList.map((data,index) => (     
        <div  
        key={index}
        className="card">
        <img src={data.image} className="card-img-top" alt="Thirupathi" />
        <div className="card-body">
          <h5 className="card-title">{data.trip_name}</h5>
          <p className="card-text">{
            data.description
          }</p>
          <div className="like_btn_div"><Counter /> 
          <div>{<IconButton color="primary" onClick={()=> navigate(`/update_trip/${data.trip_name}`)}><EditIcon/></IconButton>}
          {<IconButton sx={{ marginLeft: "auto" }}color="error" onClick={()=> deletemovie(mv.id)}><DeleteIcon/></IconButton>}</div>
          
          </div>
          <button style={{backgroundColor: ButtonDisable(data)? "red" : " green"}} disabled={ButtonDisable(data)} className="btn btn-primary btn_click"  onClick={()=>{navigate(`/trip_list/${data.trip_name}`)}}
           >{ButtonDisable(data)? "Trip Not Completed" : "Trip Completed"}</button>
        </div>
      </div>
    
        ))}
        </div>
   </div>

  );
}