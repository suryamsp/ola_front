import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { API } from "./Api";

export function Login() {
const navigate = useNavigate();
const formik = useFormik({
  initialValues: { name: "", password: "" },
  onSubmit: async (values) => {
    try {
      // Sending a POST request to the login endpoint
      const response = await fetch(`${API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Parsing the JSON response
      const result = await response.json();
      console.log(result.token);

      // Uncomment the lines below if you want to handle the response further
      // localStorage.setItem("token", result.token);
      // navigate("/trip_list");
    } catch (error) {
      console.error('Error during login:', error);
    }
  },
});

  return (
    <form onSubmit={formik.handleSubmit} className="login-page">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">User Name</label>
        <input type="text" className="form-control" 
        name="name"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.name} aria-describedby="emailHelp" placeholder="Enter User Name" 
         required/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password"
        name="password"
        className="form-control"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
         placeholder="Password" 
         required/>
      </div>


      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Success</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Login Successfully
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary btn-sec-click " data-toggle="modal" data-target="#exampleModalCenter" style={{backgroundColor:"green"}} data-dismiss="modal">Ok</button>
        
      </div>
    </div>
  </div>
</div>


      <div>
        <button className="creat-acc" onClick={()=>navigate("/forget_password")} >Forget Password ?</button></div>
      <button type="submit" className="btn btn-primary btn_click">Login</button>
      <hr></hr>
      <div className="New-account">
        <img type="button" className="login-goo" src="/img/google.png"></img>
      </div>

      
      <div className="New-account"><button className="creat-acc" onClick={()=>navigate("/new_user")} >Create Account ?</button></div>
    </form>
  );
}
