import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Upcoming } from "@mui/icons-material";




export function Memberlist() {
  const navigate =useNavigate();

  const [login, loginList] = useState([]);


  const getloginlist = async () => {
    try {
      const response = await fetch("https://trip-backend-eight.vercel.app/member");
      const list = await response.json();
      loginList(list);
    } catch (error) {
      console.error("Error fetching Triplist:", error);
    }
  };



useEffect(() => {
  getloginlist();

}, []);

  return (
   <div>
     <div className="member_dev">
      
              {login.map((data,index) => (     
        <div  key={index} className="member_card">
        <div><img src="/img/member.jpg" className="member_img" /></div>
        <div className="card-body">
          <h5 className="card-title">NAME:  {data.username}</h5>
          <p className="card-text">EMAIL:  {data.Email}</p>
        </div>
      </div>
    
        ))}
        </div>
   </div>

  );
}