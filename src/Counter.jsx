import { useEffect, useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';



export function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
//   useEffect(()=> {console.log("like value is updated :", like);
// },[like]);
  return (
    <div>
      <Badge badgeContent={like} color="primary">
      <IconButton onClick={() => setlike(like + 1)}><ThumbUpIcon/></IconButton>
     </Badge>
     <Badge badgeContent={dislike} color="error">
     <IconButton onClick={() => setdislike(dislike + 1)}><ThumbDownIcon/></IconButton>
     </Badge>
      
    </div>
  );
}