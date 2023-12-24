import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export function Login() {
const navigate = useNavigate();
  const formik= useFormik({
    initialValues:{name:"",password:""},
    onSubmit: async (values)=>{
   console.log(values);
    


    const data = await fetch("http://localhost:4000/login" ,{
       method:"POST",
       
       headers:{"Content-Type":"application/json",
      },
      body: JSON.stringify(values),
     });
     const result= await data.json();
     console.log(result);
     localStorage.setItem("token",result.token);
    navigate("/trip_list");
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
         value={formik.values.name} aria-describedby="emailHelp" placeholder="Enter User Name" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password"
        name="password"
        className="form-control"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
         placeholder="Password" />
      </div>


      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Success</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Login Successfully
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary " data-toggle="modal" data-target="#exampleModalCenter" style={{backgroundColor:"green"}} data-dismiss="modal">Ok</button>
        
      </div>
    </div>
  </div>
</div>


      <div>
        <a className="creat-acc" href="http://localhost:5173/forget_password">Forget Password ?</a></div>
      <button type="submit" className="btn btn-primary">Login</button>
      <hr></hr>
      <div className="New-account">
        <img type="button" className="login-goo" src="./img/google.png"></img>
      </div>

      
      <div className="New-account"><a href="http://localhost:5173/new_user" className="creat-acc">Create Account ?</a></div>
    </form>
  );
}
