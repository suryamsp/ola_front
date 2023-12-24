import React from 'react';
import { Formik, Form, Field } from 'formik';

const MyForm = () => {
  const initialValues = {
    image: null,
  };

  const handleSubmit = (values) => {
    // Handle your form submission logic here
    console.log('Form values:', values);
  };

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

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="image">Image:</label>
            <Field
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(event) => handleImageChange(event, setFieldValue)}
            />
          </div>

          {values.image && (
            <div>
              <img
                src={values.image}
                alt="Selected Image"
                style={{ maxWidth: '100%', maxHeight: '200px' }}
              />
            </div>
          )}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
