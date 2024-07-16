import { useState } from "react";
import { API } from "./sub_folder/Api";
import { useNavigate } from "react-router-dom";

export function Hours() {
  const [lhOperator, setLhOperator] = useState('0');
  const [rhOperator, setRhOperator] = useState('0');
  const [lhtape, setLhtape] = useState([]);
  const [rhtape, setRhtape] = useState([]);
  const [tapename, settapename] = useState(false);
  const [opcount, setopcount] = useState(true);
  const [updatebox, setupdatebox] = useState(true);
  const navigate = useNavigate();


  const Opname = () => {
    let payload = {};
  
    if (lhtape.length > 0 && rhtape.length === 0) {
      lhtape.forEach((item, index) => {
        payload[`name${index}`] = item;
      });
    } else if (rhtape.length > 0 && lhtape.length === 0) {
      rhtape.forEach((item, index) => {
        payload[`name${index}`] = item;
      });
    } else if (rhtape.length > 0 && lhtape.length > 0) {
      const total = [...lhtape, ...rhtape];
      total.forEach((item, index) => {
        payload[`name${index}`] = item;
      });
    }
  
    if (Object.keys(payload).length > 0) {
      fetch(`${API}`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }
  };
  






  const handleLhOperator = (event) => {
    setLhOperator(event.target.value);
  };

  const handleRhOperator = (event) => {
    setRhOperator(event.target.value);
  };

  const handlelhtapeName = (event, index) => {
    const newLhtape = [...lhtape];
    newLhtape[index] = event.target.value;
    setLhtape(newLhtape);
  };

  const handlerhtapeName = (event, index) => {
    const newRhtape = [...rhtape];
    newRhtape[index] = event.target.value;
    setRhtape(newRhtape);
  };

  // const handlebuttonSubmit = () => {
  //   setupdatebox(false); // Hide the submit button after submission
  // }
  return (
    <div className="hours_dev">
      {opcount && (<div>
        <div className="form-group">
          <label htmlFor="lhOperatorSelect">LH Tapping Operators</label>
          <select
            className="form-control"
            id="lhOperatorSelect"
            value={lhOperator}
            onChange={handleLhOperator}
          >
            {[...Array(7).keys()].map((num) => (
              <option key={num} value={num.toString()}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="rhOperatorSelect">RH Tapping Operators</label>
          <select
            className="form-control"
            id="rhOperatorSelect"
            value={rhOperator}
            onChange={handleRhOperator}
          >
            {[...Array(7).keys()].map((num) => (
              <option key={num} value={num.toString()}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-success font-weight-bold" onClick={() => { settapename(true); setopcount(false); }}>
          OK
        </button>
      </div>)}

      <div>
        {tapename && (<div>
          {parseInt(lhOperator) > 0 &&
            Array.from({ length: parseInt(lhOperator) }, (_, index) => (
              <div key={index} className="form-group">
                <label className="hrs_tit" htmlFor={`lhtapeSelect${index + 1}`}>LH Tapping {index + 1}</label>
                <select
                  id={`lhtapeSelect${index + 1}`}
                  className="form-control"
                  value={lhtape[index] || ''}
                  onChange={(event) => handlelhtapeName(event, index)}
                >
                  <option value="">....</option>
                  <option value="Surya">Surya</option>
                  <option value="Yuvasri">Yuvasri</option>
                  <option value="Srinithi">Srinithi</option>
                 
                  <option value="Vasntha Kumari">Vasntha Kumari</option>
                  <option value="Shiyam Kumar">Shiyam Kumar</option>
                  <option value="OJT 1">OJT</option>
                  <option value="OJT 2">OJT</option>
                </select>
              </div>
            ))}
          {parseInt(rhOperator) > 0 &&
            Array.from({ length: parseInt(rhOperator) }, (_, index) => (
              <div key={index} className="form-group " >
                <label   htmlFor={`rhtapeSelect${index + 1}`} style={{ fontWeight: 'bold', fontSize: '40px' }}>RH Tapping {index + 1}</label>
                <select
                  id={`rhtapeSelect${index + 1}`}
                  className="form-control"
                  value={rhtape[index] || ''}
                  onChange={(event) => handlerhtapeName(event, index)}
                >
                  <option value="">....</option>
                  <option value="Surya">Surya</option>
                  <option value="Yuvasri">Yuvasri</option>
                  <option value="Srinithi">Srinithi</option>
                 
                  <option value="Vasntha Kumari">Vasntha Kumari</option>
                  <option value="Shiyam Kumar">Shiyam Kumar</option>
                  <option value="OJT 1">OJT 1</option>
                  <option value="OJT 2">OJT 2</option>
                </select>
              </div>
            ))}
<div className="submit_btn">
<button className="btn btn-success font-weight-bold submit_btn_side"   onClick={() => {
    Opname();  // Call the Opname function
    navigate("/output");  // Navigate to the /output route
  }}   >
            SUBMIT
          </button>
          <button
            type="button"
            className="btn btn-primary font-weight-bold"
            onClick={() => { settapename(false); setopcount(true); }}
          >
            Back
          </button>
</div>
        </div>)}

      </div>

    </div>

  );
}
