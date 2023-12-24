import { useFormik } from "formik";




export function Create_Account() {

const formik= useFormik({
  initialValues:{name:"",email:"",new_pass:"",confirm_pass:""},
  onSubmit:(data)=>{Register(data);
  },
});

const Register = async (data)=>{ 

  await fetch("http://localhost:4000/signup" ,{
     method:"POST",
     body:JSON.stringify(data),
     headers:{"Content-Type":"application/json",},
   });
   navigate("/trip_list");
 }

  return (
    <form onSubmit={formik.handleSubmit} className="login-page">
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">User Name</label>
        <input type="text" name="name"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name} className="form-control"  
      placeholder="User Name" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" name="email"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email} 
      className="form-control"  
       placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">New Password</label>
        <input type="password" name="new_pass"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.new_pass} className="form-control"  placeholder="New Password" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Confirm Password</label>
        <input type="password" name="confirm_pass"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.confirm_pass} className="form-control" placeholder="Confirm Password" />
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
        Create your Account Successfully
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary " style={{backgroundColor:"green"}} data-dismiss="modal">Ok</button>
        
      </div>
    </div>
  </div>
</div>

      <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Register</button>

    </form>
  );
}
