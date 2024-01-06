import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export function Update_trip() {

  const navigate = useNavigate();

  const { url } = useParams();
  // console.log(url);

   const formik= useFormik({
    initialValues:{
      trip_name:url,
      city:"",
      str_date:"",
      end_date:"",
      route:"",
      website:"",
      budjet:"",
      status:"Trip Completed",
      member:"",
      command:"",
  },
  onSubmit:(add)=>{Updatetrip(add);
  },
   });

   const Updatetrip = async (add)=>{ 

    await fetch("https://trip-backend-eight.vercel.app/update_trip" ,{
       method:"POST",
       body:JSON.stringify(add),
       headers:{"Content-Type":"application/json",},
     });
     navigate("/trip_list");
   }
  
  return (
    <div className="add_con">
      <form onSubmit={formik.handleSubmit} className="Add_page">
        <div className="add_body">
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Trip Name</label>
          <input type="text" 
          className="form-control"
          name="trip_name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.trip_name}
    
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">City/State</label>
          <input type="text" className="form-control" 
             name="city"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.city}
             required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Starting Date</label>
          <input type="date" className="form-control"
             name="str_date"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.str_date}
             required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Ending Date</label>
          <input type="date" className="form-control"
             name="end_date"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.end_date}
             required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Route</label>
          <input type="text" className="form-control"
             name="route"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.route}
             required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Website</label>
          <input type="text" className="form-control"
             name="website"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.website}
             required
          />
        </div>
        </div>
      
        <div className="add_body2">
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Budjet</label>
          <input type="text" className="form-control"
             name="budjet"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.budjet}
             required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Status</label>
          <input type="text" className="form-control" 
             name="status"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.status}
             required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Members</label>
          <input type="text" className="form-control" 
             name="member"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.member}
             required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Command</label>
          <input type="text" className="form-control" 
             name="command"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.command}
             required
          />
        </div>

        <div className="add_btn"><button type="submit" className="btn btn-primary btn_click">Update Trip</button></div>
        <div style={{marginBottom:"30px"}}className="back_btn"><button onClick={()=>navigate(-1)} className="btn btn-secondary btn-sec-click">Back</button></div>
</div>
       
      

      </form>
    </div>
  );
}
