import { useState, useEffect } from "react";
import { API } from "./sub_folder/Api";
import { useNavigate, useNavigation } from "react-router-dom";
import { useFormik } from "formik";
import { LogNote } from "./LogNote";


export function Table() {
  const [namelist, setNameList] = useState([]);
  const navigate = useNavigate();

  const [upvalue, setUpvalue] = useState([]);
  const [objarray, setobjarray] = useState([]);
  const [hrsvalue, sethrsvalue] = useState({});
  const [outlist, setoutList] = useState([]); // Assuming outlist is an object
  const [total, setTotal] = useState([]); 
  const [packtotal, setpackTotal] = useState([]); 
  const [finaltotal, setfinaltotal] = useState([]);
  const [packfinaltotal, setpackfinaltotal] = useState([]);
  const [shift, setShift] = useState(true);
  const [btn, setBtn] = useState(false);
  const [load, setLoad]= useState(false)
  const [editvalue, setEditValue]= useState({})
  const[editidx,setEditIdx]= useState(false);


  const shifttime=[6,7,8,9,10,11,12,1,'2.30',4,5,6,7,8,9,10,11];

  const totalOutput = () => {
    const newTotal = outlist.map((item) => {
      // Assuming item.name is an object and we want to sum values excluding 'PACK'
      const filteredValues = Object.keys(item.name)
        .filter(key => key !== 'PACK')
        .map(key => parseFloat(item.name[key]) || 0);
  
      return filteredValues.reduce((acc, value) => acc + value, 0);
    });
  
    setTotal(newTotal);
  };

  const totalpackOutput = () => {
    const newTotal = outlist.map((item) => {
      // Assuming item.name is an object and we want to sum values excluding 'PACK'
      const filteredValues = Object.keys(item.name)
        .filter(key => key === 'PACK')
        .map(key => parseFloat(item.name[key]) || 0);
  
      return filteredValues.reduce((acc, value) => acc + value, 0);
    });
  
    setpackTotal(newTotal);
  };
  
  useEffect(() => {
    totalOutput();
    totalpackOutput();
  }, [outlist]);

//   useEffect(() => {
//  console.log(packtotal);
//   }, [packtotal]);
  
  
    useEffect(() => {
      const cumulativeSums = total.reduce((acc, value) => {
        const lastSum = acc.length > 0 ? acc[acc.length - 1] : 0;
        acc.push(lastSum + value);
        return acc;
      }, []);
      setfinaltotal(cumulativeSums);
    }, [total]);

    useEffect(() => {
      const cumulative = packtotal.reduce((acc, value, index) => {
        // Calculate the difference from the previous value
        if (index > 0) {
          acc.push(value - packtotal[index - 1]);
        } else {
          acc.push(value);
        }
        return acc;
      }, []);
      setpackfinaltotal(cumulative); // [30, 120, 90, 60]
    }, [packtotal]);
    
    

    

    
    
  
  const upvaluearray = () => {
    let tempArray = [];
    namelist.forEach((item) => {
      Object.keys(item.name).forEach((key) => {
        tempArray.push(item.name[key]);
      });
    });
    setUpvalue([...tempArray,'PACK']);
    
  };

  useEffect(() => {
    upvaluearray();
  }, [namelist]);





  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setNameList(data);
     // Assuming your API returns an array of names or objects
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getnamelist = async () => {

    await fetchData(`${API}`);
  };

  useEffect(() => {
    getnamelist();

  }, []);

  useEffect(() => {
    if(upvalue.length >= 2){
    setLoad(true);
  }else{
    setLoad(false);
  }

  }, [upvalue]);


  const formik = useFormik({
    initialValues: upvalue.reduce((acc,name,_, index) => {
      acc[`${name}`] = ''; 
      return acc;
    }, {}),
    onSubmit: (values) => {

     sethrsvalue(values);

     
    }
  });


  const addOutput = async (data) => {
    try {
      const response = await fetch(`${API}/output`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add output');
      }
  window.location.reload();
    
    } catch (error) {
      console.error('Error during fetch:', error);
      // Handle error as needed
    }
  };
  
  
  useEffect(() => {
    if (Object.keys(hrsvalue).length > 1 ) {
      addOutput(hrsvalue);
    }
  }, [hrsvalue]);
   // Ensure object is in the dependency array if it might change
  


  const fetchDataout = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setoutList(data); // Assuming your API returns an array of names or objects
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const getoutput = async () => {

    await fetchDataout(`${API}/output`);
  };

  useEffect(() => {
    getoutput();
  }, []);

   // Initialize shift state

  const toggleShift = () => {
    setShift(!shift); // Toggle shift state
  };
  
  useEffect(() => {
    if (total.length === 8) {
      setBtn(true);
    } else {
      setBtn(false); // Optional: reset btn to false if length is not 4
    }
  }, [total]);
  




  const [filteredValues, setFilteredValues] = useState([]);
  const [totalValues, setTotalValues] = useState(() => (key) =>
    outlist.reduce((total, item) => total + (item.name[key] || 0), 0)
  );

  useEffect(() => {
    const newFilteredValues = Object.keys(outlist[0]?.name || {}).filter(key => key !== 'PACK');
    setFilteredValues(newFilteredValues);

    const calculateTotal = (key) => outlist.reduce((total, item) => total + (item.name[key] || 0), 0);
    setTotalValues(() => calculateTotal);

  }, [outlist]);





  const deleteItem = async (ditem) => {
    try {
      await fetch(`${API}/output/${ditem}`, {
        method: 'DELETE',
      });
  
      window.location.reload(); // Corrected line to reload the page
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };
  

//   useEffect(() => {

// // console.log(editvalue);
//       (editvalue); // Assuming `editvalue` is an array and you want to delete the first item
   
//   }, [editvalue]);
  










  return (
    <div className="table_div">
  {load ? <div>
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

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-danger" data-dismiss="modal">DELETE</button>
      </div>
    </div>
  </div>
</div>


<div class="button-container">
  <button
    type="button"
    className="btn btn-primary font-weight-bold update_btn"
    data-toggle="modal"
    data-target="#exampleModal"
    data-whatever="@mdo"
  >
    Update
  </button>
  <button
    type="button"
    className="btn btn-primary font-weight-bold home_btn"
    onClick={() => navigate("/")}
  >
    HOME
  </button>
  <div className="shift_div">
    <button className="shift_btn_div" onClick={toggleShift}>
      {shift ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          fill="currentColor"
          className="bi bi-1-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          fill="currentColor"
          className="bi bi-2-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306" />
        </svg>
      )}
      <span className="shift_btn">Shift</span>
    </button>
  </div>
</div>

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
               
               {'UPDATE VALUE'}  {/* Change title based on whether editing or adding */}
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">



<form onSubmit={formik.handleSubmit}>
  <div className="form-group">

    {upvalue.map((name, index) => (
      <div key={index}>
        <label htmlFor={`title-${index}`} className="col-form-label font-weight-bold">
          {name}
        </label>
        {/* Check if editvalue exists and use its data */}
       
          <input
            type="number"
            className="form-control"
            id={`title-${index}`}
            name={name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[`${name}`]}
            required
          />
     
      </div>
    ))}
  </div>



                <div className="modal-footer">

                  <button type="submit" className="btn btn-primary"  disabled={btn}  >
                    {'Add'} {/* Change button text based on whether editing or adding */}
                  </button>
                </div>
              </form>



            </div>
          </div>
        </div>
      </div>
      <div>
   
      </div>
    </div>



    <div class="table-responsive">
<table className="table table-bordered table-center">
 
<thead className="table-primary">
  <tr>
    <th>Hours</th>
    {upvalue
      .filter(value => value !== 'PACK')  // Filter out values that are 'PACK'
      .map((value, idx) => (
        <th className="table_name" key={idx}>{value}</th>  // Create header cell with the last character of each filtered value
      ))}
    <th>TOTAL</th>
    <th>PACK</th>
    <th></th>
  </tr>
</thead>


<tbody>
  {outlist.map((item, index) => (
    <tr key={index}>
      <td>
        {shift
          ? `${shifttime[index]} - ${shifttime[index + 1]}`
          : `${shifttime[index + 8]} - ${shifttime[index + 9]}`}
      </td>

      {Object.keys(item.name)
        .filter((key) => key !== "PACK")
        .map((key) => (
          <td key={key}>{item.name[key]}</td>
        ))}

      <td>
        {(() => {
          const keys = Object.keys(item.name).filter((key) => key !== "PACK");
          const sum = keys
            .map((key) => parseInt(item.name[key]) || 0)
            .reduce((acc, currentValue) => acc + currentValue, 0);
          return sum;
        })()}{" "}
        / {finaltotal[index]}
      </td>

      {Object.keys(item.name)
        .filter((key) => key === "PACK")
        .map((key) => (
          <td key={key}>
            {packfinaltotal[index]} / {item.name[key]}
          </td>
        ))}

     
        <td >
          <button
            type="button"
            className="btn btn-danger font-weight-bold update_btn"
            onClick={() => {deleteItem(item._id)}}
          >
            Delete
          </button>
        </td>
    
    </tr>
  ))}

  <tr className="table-success">
    <td className="bold-text table-primary">TOTAL</td>
    {filteredValues.map((value, idx) => (
      <td key={idx} className="bold-text">
        {totalValues(value)}
      </td>
    ))}
  </tr>
</tbody>



</table>





</div>
<LogNote outlist={outlist} finaltotal={finaltotal} packfinaltotal={packfinaltotal} packtotal={packtotal} total={total}  namelist={namelist} shift={shift} setShift={setShift} shifttime={shifttime}  />

  </div>:
  <div className="loading">
  <img className="load" src="/img/vadi.gif" alt="Loading..." />
</div>

  
  }

    </div> 
  );
}



