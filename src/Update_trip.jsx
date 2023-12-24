import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";


export function Update_trip() {

  const navigate = useNavigate();

   const formik= useFormik({
    initialValues:{
      trip_name:"",
      city:"",
      str_date:"",
      end_date:"",
      route:"",
      website:"",
      budjet:"",
      status:"Trip Completed",
      member:"",
      command:"",
      image:"",
  },
  onSubmit:(add)=>{Updatetrip(add);
  },
   });

   const Updatetrip = async (add)=>{ 

    await fetch("http://localhost:4000/update_trip" ,{
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

        <div className="add_btn"><button type="submit" className="btn btn-primary">Update Trip</button></div>
</div>
       
      

      </form>
    </div>
  );
}
