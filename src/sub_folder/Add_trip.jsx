import { useFormik,Formik, Form, Field } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./Api";


export function Add_trip() {

  const navigate = useNavigate();


   const {values, handleChange, handleBlur, handleSubmit, setFieldValue}= useFormik({
    initialValues:{
      trip_name:"",
      description:"",
      image:null,
      status:"Trip Not Completed",
  },
  onSubmit:(add)=>{Addtrip(add);
  },
   });
  

   const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the Formik field value to the base64-encoded string
        setFieldValue('image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const Addtrip = async (add) => {
    try {
      await fetch(`${API}/Add_trip`, {
        method: "POST",
        body: JSON.stringify(add),
        headers: { "Content-Type": "application/json" },
      });
      navigate("/trip_list");
    } catch (error) {
      console.error("Error during fetch:", error);
      // Handle the error as needed
    }
  };

  return (
    <div className="add_con">
      <form onSubmit={handleSubmit} className="Add_page">
        <div className="add_body">
          <div className="form-group">
          <label >Trip Name</label>
          <input type="text" 
          className="form-control"
          name="trip_name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.trip_name}
          required
          />
        </div>
      

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Status</label>
          <input type="text" className="form-control"  
             name="status"
             onChange={handleChange}
          onBlur={handleBlur}
          value={values.status}
          required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Description</label>
          <input type="text" className="form-control" 
             name="description"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.description}
             required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Upload Image</label>
          <input type="file" className="form-control" 
             name="filename"
             onChange={(event) => handleImageChange(event, setFieldValue)}
             onBlur={handleBlur}
             required
            
          />
       
        </div>
        <div className="add_btn"><button type="submit" className="btn btn-primary btn_click">Add Trip</button></div>
        <div className="back_btn"><button onClick={()=>navigate(-1)} className="btn btn-secondary btn-sec-click">Back</button></div>

</div>
       
      

      </form>
    </div>
  );
}
