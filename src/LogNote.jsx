import { useState, useEffect } from "react";

export function LogNote({ outlist, finaltotal, packfinaltotal, packtotal, total, namelist, shift, setShift, shifttime }) {

  const [planlenth, setpalnlength] = useState('0');
  const [planarr, setplanarr] = useState([]);
  const [plan, setplan] = useState([]);


  const head = {
    "head1": "Hours",
    "head2": "PLAN",
    "head3": "PRODUCTION",
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
        26 * parseInt(planlenth),
        26 * parseInt(planlenth),
        24 * parseInt(planlenth),
        26 * parseInt(planlenth),
        26 * parseInt(planlenth),
        16 * parseInt(planlenth),
        26 * parseInt(planlenth),
        30 * parseInt(planlenth)
      ]
      : [
        30 * parseInt(planlenth),
        26 * parseInt(planlenth),
        24 * parseInt(planlenth),
        26 * parseInt(planlenth),
        26 * parseInt(planlenth),
        16 * parseInt(planlenth),
        26 * parseInt(planlenth),
        26 * parseInt(planlenth)
      ];

    setplanarr(newPlanArr);
  }, [planlenth, shift]);



  return (
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
              <th scope="row">{shift ? `${shifttime[index]} - ${shifttime[index + 1]}` : `${shifttime[index + 8]} - ${shifttime[index + 9]}`}</th>
              <td>{planarr[index]}/ {plan[index]}</td>
              <td>{item} / {finaltotal[index]}</td>
              <td>{-1 * parseInt(packtotal[index])} / {packfinaltotal[index]}</td>
              <td>{parseInt(item) - parseInt(planarr[index])} / {parseInt(finaltotal[index]) - parseInt(plan[index])}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
