import { Formik, useFormik } from 'formik';
import React, { useState } from 'react';

const YourComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const formik=useFormik({
      initialValues:{note_key:""},
      onSubmit:(values)=>{Notever(values)}
    })

    const Notever = (values) => {
      console.log(values);
          $("#exampleModalCenter").click();
  };
  

  return (
    <div>
        <button type="button" className="nav-link  font-weight-bold" data-toggle="modal" data-target="#exampleModalCenter" >NOTES</button>


    </div>
  );
};

export default YourComponent;
