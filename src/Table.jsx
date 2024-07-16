import { useState, useEffect } from "react";
import { API } from "./sub_folder/Api";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { CropLandscapeTwoTone, Diversity2Rounded } from "@mui/icons-material";

export function Table() {
  const [namelist, setNameList] = useState([]);
  const navigate = useNavigate();
  const [upvalue, setUpvalue] = useState([]);
  const [objarray, setobjarray] = useState([]);
  const [hrsvalue, sethrsvalue] = useState([]);
  const [outlist, setoutList] = useState([]); // Assuming outlist is an object
  const [total, setTotal] = useState([]); 
  const [packtotal, setpackTotal] = useState([]); 
  const [finaltotal, setfinaltotal] = useState([]);
  const [packfinaltotal, setpackfinaltotal] = useState([]);

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
      const cumulativeSums = packtotal.reduce((acc, value) => {
        const lastSum = acc.length > 0 ? acc[acc.length - 1] : 0;
        acc.push(lastSum + value);
        return acc;
      }, []);
      setpackfinaltotal(cumulativeSums);
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
      setNameList(data); // Assuming your API returns an array of names or objects
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





  const formik = useFormik({
    initialValues: upvalue.reduce((acc,name,_, index) => {
      acc[`${name}`] = ''; // Initialize each dynamic field
      return acc;
    }, {}),
    onSubmit: (values) => {
      // Process form values and update hrsvalue state
      // sethrsvalue(values);
     sethrsvalue(values);
      // Add your submission logic here
    }
  });


  const addOutput = async (data) => {
    try {
      await fetch(`${API}/output`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      // You can update the UI or state instead of reloading the page
      // window.location.reload(); // Not recommended
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };
  useEffect(() => {
    if (Object.keys(hrsvalue).length > 0) {
      addOutput(hrsvalue);
    }
  }, [hrsvalue]); // Ensure object is in the dependency array if it might change
  
  

  const getoutput = async () => {

    await fetchDataout(`${API}/output`);
  };

  useEffect(() => {
    getoutput();
  }, []);

  // useEffect(() => {
  //   outlist.forEach(item => {
  //     const keys = Object.keys(item.name).filter(key => key !== 'PACK');
  //     console.log(length(keys)); // Logs the keys in 'name' excluding 'PACK'
  //   });
  // }, [outlist]);
  
  
  


  


  



  const handleAddClick = () => {
    formik.resetForm();
  };


  const Closewin = () => {
    window.location.reload();
  };
  




  return (
    <div className="table_div">


<div style={{ marginTop: '100px' }}>

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


<div>
<button
style={{marginLeft:"20px"}}
        type="button"
        className="btn btn-primary font-weight-bold update_btn"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
        onClick={handleAddClick} 
      >
        Update value
      </button>
     
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
                {'UPDATE VALUE'} {/* Change title based on whether editing or adding */}
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
    <form onSubmit={formik.handleSubmit}>

              {upvalue && (
  <div className="form-group">
    {upvalue.map((name, index) => (
      <div key={index}>
        <label htmlFor={`title-${index}`} className="col-form-label font-weight-bold">
          {name}
        </label>
        <input
  type="text"
  className="form-control"
  id={`title-${index}`}
  name={`${name}`}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values[`${name}`]}
/>
          
      </div>
    ))}
  </div>
)}









                
          
                <div className="modal-footer">

                  <button type="submit" className="btn btn-primary" onClick={Closewin}  >
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



<div className="table_div">
<table className="table table-bordered table-center">
  <thead className="table-primary">
  <tr>
  {Object.values(namelist[0]?.name || {}).map((value, idx) => (
    <th className="table_name" key={idx}>{value}</th>
  ))}
  <th >TOTAL</th>
  <th >PACK</th>
  
  
</tr>

  </thead>
  <tbody>
  {outlist.map((item, index) => (
  <tr key={index}>

    {Object.keys(item.name)
  .filter(key => key !== 'PACK')
  .map((key, idx) => (
    <td key={idx}>{item.name[key]}</td>
  ))}

    <td>
      {(() => {
        const keys = Object.keys(item.name).filter(key => key !== 'PACK');
        const sum = keys
          .map(key => parseInt(item.name[key]) || 0)
          .reduce((acc, currentValue) => acc + currentValue, 0);
        return sum;
      })()}{' / '} {finaltotal[index]}
    </td>
    {Object.keys(item.name)
  .filter(key => key === 'PACK')
  .map((key, idx) => (
    <td key={idx}>{item.name[key]}{' / '}{packfinaltotal[index]}</td>
  ))}
  </tr>
))}

</tbody> 


</table>
</div>
<LogNote outlist={outlist} finaltotal={finaltotal} packfinaltotal={packfinaltotal} packtotal={packtotal} total={total}  namelist={namelist}/>
    </div> 
  );
}


function LogNote({ outlist, finaltotal, packfinaltotal,packtotal,total,namelist }) {
  
const [planlenth,setpalnlength]=useState('0');
const [planarr,setplanarr]=useState([]);
const [plan,setplan]=useState([]);

  
  const head={
    "head1":"",
    "head2":"PLAN",
    "head3":"PRODUCTION",
    "head4":"PACK",
    "head5":"GAP",
  }
  useEffect(() => {
    namelist.forEach(item => {
      const values = Object.values(item.name);
      setpalnlength(values.length);
    });
  }, [namelist]);

  

  useEffect(() => {
    const cumulativeSums = planarr.reduce((acc, value) => {
      const lastSum = acc.length > 0 ? acc[acc.length - 1] : 0;
      acc.push(lastSum + value);
      return acc;
    }, []);
  
    setplan(cumulativeSums);
  }, [planarr]);
  

  
  useEffect(() => {
    setplanarr([26 * parseInt(planlenth),26 * parseInt(planlenth),24* parseInt(planlenth),26* parseInt(planlenth),26* parseInt(planlenth),16* parseInt(planlenth),26* parseInt(planlenth),30* parseInt(planlenth)]);
  }, [planlenth]);
  

  return(
    <div className="table_div">
      <h1>LOG NOTE</h1>
<table className="table table-bordered">
  <thead className="table-warning">
    <tr>
    {Object.values(head).map((value, index) => (
            <th scope="col" key={index}>{value}</th>
          ))}
          

    </tr>
  </thead>
  <tbody>
         
          {total.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}  Hours</th>
              <td>{planarr[index]}/ {plan[index]}</td>
              <td>{item} / {finaltotal[index]}</td>
              <td>{packtotal[index]} / {packfinaltotal[index]}</td>
              <td>{parseInt(item) - parseInt(planarr[index])} / {parseInt(finaltotal[index]) - parseInt(plan[index])}</td>
            </tr>
          ))}
        </tbody>

</table>
    </div>
  );
}