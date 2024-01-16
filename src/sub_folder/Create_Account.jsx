import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./Api";




export function Create_Account() {
const navigate = useNavigate();
const formik= useFormik({
  initialValues:{name:"",email:"",newpassword:""},

  onSubmit:(data)=>{Register(data);
  },
});

const [newPassword, setNewPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [passwordsMatch, setPasswordsMatch] = useState(true);
const [value,setValue]=useState(false);





const handleConfirmPasswordChange = (event) => {
  setConfirmPassword(event.target.value);
  setPasswordsMatch(event.target.value === newPassword);
};

const handleNewPasswordChange = (event) => {
  setNewPassword(event.target.value); 
  setPasswordsMatch(event.target.value === confirmPassword);
  formik.handleChange(event);
  formik.setFieldValue("newpassword", event.target.value); 
};

const Register = async (data, url = `${API}/signup`, method = "POST") => {
  try {
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
 
      console.error(`Error: ${response.status} - ${response.statusText}`);
       
    } else {
      console.log("Registration successful");
      setValue(true);
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error("Error:", error.message);
    // You might want to throw an error here or handle it in some way
  }
};




  return (
    <form onSubmit={formik.handleSubmit} className="login-page">
      <div className="form-group">
        <label  htmlFor="name">User Name</label>
        <input 
        type="text" name="name"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name} className="form-control"  
      placeholder="User Name"
      id="name" 
      required
     />
      </div>
      <div className="form-group">
        <label  htmlFor="email">Email address</label>
        <input type="email" name="email"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email} 
      className="form-control"  
       placeholder="Enter email" 
       id="email" 
       required 
       />
      </div>
      <div className="form-group">
        <label  htmlFor="newpassword">New Password</label>
        <input type="password" name="newpassword"
      onChange={(event)=>handleNewPasswordChange(event)}
      onBlur={formik.handleBlur}
      className="form-control"  
      placeholder="New Password" 
      id="newpassword" 
      pattern=".{5,}"  // Minimum length of 5 characters
    title="Password must be at least 5 characters long"

      required
      />
      </div>
      <div className="form-group">
        <label  htmlFor="confirm_pass">Confirm Password</label>
        <input type="password" name="confirm_pass"
      onChange={(event)=> handleConfirmPasswordChange(event)}
      onBlur={formik.handleBlur}
      value={formik.values.confirm_pass} className="form-control" placeholder="Confirm Password" 
      id="confirm_pass" 
      minLength="5"
      required
      />
      </div>

{ value && <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Success</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Create your Account Successfully
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary btn-sec-click " style={{backgroundColor:"green"}} data-dismiss="modal" onClick={()=> navigate("/login")}>Ok</button>
        
      </div>
    </div>
  </div>
</div>}



      <button type="submit" className="btn btn-primary btn_click"   disabled={!passwordsMatch}  data-toggle="modal" data-target="#exampleModalCenter"
      >Register</button>

    </form>
  );
}
