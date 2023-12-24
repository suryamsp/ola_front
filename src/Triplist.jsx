import { useEffect, useState } from "react";

export function Triplist() {

 const [list,setlist]= useState([]);

 const getlist=()=>{
  fetch ("http://localhost:4000/Triplist")
  .then((data)=> data.json())
  .then ((list)=> setlist(list));
 }
 useEffect(()=> getlist(),[]);


 

  return (
   <div>
    <h1 className="title_name">Dear
    </h1>
     <div className="main_dev">
      
              {list.map((data, index) => (     
        <div key={index}   className="card" style={{ width: "23rem" }}>
        <img src={data.image} className="card-img-top" alt="Thirupathi" />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{
            data.description
          }</p>
          <a href="#" className="btn btn-primary" >{data.status}</a>
        </div>
      </div>
    
        ))}
        </div>
   </div>

  );
}
