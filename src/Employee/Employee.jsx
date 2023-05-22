import React, { useEffect, useState } from "react";
import './Employee.css';


function Employee({employees, selected}) {

    const [employeeid, setEmployeeid] = useState(1);

    useEffect(() => {
        selected(employeeid);
    })

    return (
        <div>
            <div>
                <h6>Funcionários:</h6>
            </div>
            <div className="div-select">
                <select value={employeeid} onChange={e=>setEmployeeid(e.target.value)}>
                    { employees.map((employee,idx)=><option key={idx} value={employee.id}>{employee.id} - {employee.name}</option>)}
                </select>
            </div>
        </div>
    );
}

export default Employee;