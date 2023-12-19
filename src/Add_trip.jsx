import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";


export function Add_trip() {

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
      status:"",
      member:"",
      description:"",
      image:"",
  },
  onSubmit:(add)=>{Add_trip(add);
  },
   });

   const Add_trip = async (add)=>{ 

    await fetch("http://localhost:4000/Add_trip" ,{
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Starting Date</label>
          <input type="date" className="form-control"
             name="str_date"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.str_date}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Ending Date</label>
          <input type="date" className="form-control"
             name="end_date"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.end_date}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Route</label>
          <input type="text" className="form-control"
             name="route"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.route}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Website</label>
          <input type="text" className="form-control"
             name="website"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.website}
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Status</label>
          <select className="form-control"
             name="status"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.status}
          >
            <option>....</option>
            <option>Trip not Completed</option>
            <option>Trip Completed</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Members</label>
          <input type="text" className="form-control" 
             name="member"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.member}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Description</label>
          <input type="text" className="form-control" 
             name="description"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Upload Image</label>
          <input type="file" className="form-control" 
             name="image"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.image}
          />
        </div>
        <div className="add_btn"><button type="submit" className="btn btn-primary">Add Trip</button></div>
</div>
       
      

      </form>
    </div>
  );
}
