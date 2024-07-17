import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { API } from "./Api";

export function Notes() {
  const [note, setNote] = useState([]);
  const [detail, setDetail] = useState(null);
  const [ deletenotedata, setDeleteNotedata]= useState('')
  const navigate = useNavigate();
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  const [Admin, setAdmin] = useState(false);

useEffect(() => {
  const key = localStorage.getItem("token");
  setAdmin(key === "suryamsp");
}, []);


  const formik = useFormik({
    initialValues: {
      name:'',
      str_date: '',
      end_date:'',
       reason: '',
    },
    onSubmit: (values) => {addLeave(values)
    },
  });

  const addLeave = async (note) => {
    try {
      await fetch(`${API}/Leave`, {
        method: 'POST',
        body: JSON.stringify(note),
        headers: { 'Content-Type': 'application/json' },
      });
      window.location.reload();
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  // const editNote = async ({detail,values}) => {
  //   try {
  //     await fetch(`${API}/edit/${detail.title}`, {
  //       method: 'PUT',
       
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(values),
  //     });
  //     setDetail(null); // Reset detail after editing
  //     window.location.reload();
  //   } catch (error) {
  //     console.error('Error during fetch:', error);
  //   }
  // };

  const deleteNote = async (dtitle) => {
    try {
      await fetch(`${API}/delete/${dtitle}`, {
        method: 'DELETE',
      });
     
      await getNote();

    } catch (error) {
      console.error('Error deleting note:', error);
    }

  };

  const getNote = async () => {
    try {
      const response = await fetch(`${API}/leave`);
      const list = await response.json();
      setNote(list);
    } catch (error) {
      console.error('Error fetching Triplist:', error);
    }
  };
  

  useEffect(() => {
    getNote();
  }, []);


  

  const handleEditClick = (data) => {
    setDetail(data);
   
    formik.setValues({
      title: data.title,
      notes: data.notes,
    });
  };

  const handleAddClick = () => {
    setDetail(null);
    formik.resetForm();
  };


  return (
    <div style={{ marginTop: '50px' }}>

<div  className="modal fade" id='notesModalCenters' tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">DELETE</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Confirm to Delete Notes <span className='span_dev'>{deletenotedata}</span> 
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => deleteNote(deletenotedata)}>DELETE</button>
      </div>
    </div>
  </div>
</div>


     <button
style={{marginLeft:"20px"}}
        type="button"
        className="btn btn-primary font-weight-bold"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
        onClick={handleAddClick} 
      >
        LEAVE FORM
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div onSubmit={formik.handleSubmit} className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {detail ? 'Edit Leave' : 'LEAVE FORM'} {/* Change title based on whether editing or adding */}
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                </div>
                <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">
                    Start Date:
                  </label>
                  <input type="date" className="form-control"
             name="str_date"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.str_date}
             required
          />
                </div>
                <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">
                    End Date:
                  </label>
                  <input type="date" className="form-control"
             name="end_date"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.end_date}
             required
          />
                </div>

                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Reason:
                  </label>
                  <textarea
                    className="form-control"
                    name="reason"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.reason}
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {'Add Leave'} {/* Change button text based on whether editing or adding */}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        {note &&
          note.map((data, index) => (
            <div key={index} className="cardStyles">
              <div className="titleStyles">{data.name}</div>
              <div className="contentStyles">
                <p>Starting Date: {data.str_date}</p>
                <p> End Date: {data.end_date}</p>
                {data.reason}
              </div>
              <div className="like_btn_div">
            <div>
              
                  <IconButton sx={{ marginLeft: 'auto' }} color="error" data-toggle="modal" data-target='#notesModalCenters' onClick={()=>setDeleteNotedata(data.name)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
