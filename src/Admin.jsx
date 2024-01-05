import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export function Admin() {

  const navigate= useNavigate();

  const formik= useFormik({
    initialValues:{key:""},
    onSubmit:(keys)=>{
      if( (keys.key) === '4076'){
        localStorage.setItem("token","suryamsp");
        navigate("/trip_list");
      }
    }

    });



  return (
    <form onSubmit={formik.handleSubmit} className="login-page">
      
      <label htmlFor="exampleInputPassword1">Secret Key</label>
      <input type="password" className="form-control" 
       name="key"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.key}
      
      placeholder="Secret Key" />
      <button type="submit" className="btn btn-primary btn_click" style={{ backgroundColor: "rgb(195, 74, 74)" }}>Submit</button>

    </form>
  );
}
