import { useState, useEffect } from "react";
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';



export function LogNote({ outlist, finaltotal, packfinaltotal, packtotal, total, namelist, shift, setShift, shifttime }) {

  const [planlenth, setpalnlength] = useState('0');
  const [planarr, setplanarr] = useState([]);
  const [plan, setplan] = useState([]);


    const tableRef = useRef();
  
    const downloadImage = () => {
      html2canvas(tableRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'table.png';
        link.click();
      });
    };


  const head = {
    "head1": "Hours",
    "head2": "PLAN",
    "head3": "PRODU",
    "head4": "PACK",
    "head5": "GAP",
  };
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
    const newPlanArr = shift
      ? [
        25 * parseInt(planlenth),
        25 * parseInt(planlenth),
        24 * parseInt(planlenth),
        25 * parseInt(planlenth),
        25 * parseInt(planlenth),
        16 * parseInt(planlenth),
        25 * parseInt(planlenth),
        35 * parseInt(planlenth)
      ]
      : [
        35 * parseInt(planlenth),
        25 * parseInt(planlenth),
        24 * parseInt(planlenth),
        25 * parseInt(planlenth),
        16 * parseInt(planlenth),
        25 * parseInt(planlenth),
        25 * parseInt(planlenth),
        25 * parseInt(planlenth)
      ];

    setplanarr(newPlanArr);
  }, [planlenth, shift]);



  return (
    <div className="table-responsive lognote_div">
      <h1>LOG NOTE</h1>
      <table className="table table-bordered log_table_div"  ref={tableRef} border="1">
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
              <th scope="row">{shift ? `${shifttime[index]} - ${shifttime[index + 1]}` : `${shifttime[index + 8]} - ${shifttime[index + 9]}`}</th>
              <td>{planarr[index]}/ {plan[index]}</td>
              <td>{item} / {finaltotal[index]}</td>
              <td>{packfinaltotal[index]} / {(packtotal[index])}</td>
              <td>{parseInt(item) - parseInt(planarr[index])} / {parseInt(finaltotal[index]) - parseInt(plan[index])}</td>
            </tr>
          ))}
        </tbody>

      </table>
      <button type="button"
            className="btn btn-primary font-weight-bold" onClick={downloadImage}>Download Table</button>
    </div>
  );
}
