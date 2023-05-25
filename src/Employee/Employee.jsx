import React, { useEffect, useState } from "react";
import './Employee.css';

function Employee({employees, set_Selected}) {

    const [employeeid, setEmployeeid] = useState();

    useEffect(() => {
        set_Selected(employeeid);
    }, [employeeid, set_Selected]);

    return (
        <div>
            <div>
                <h6>Funcionários:</h6>
            </div>
            <div className="div-select">
                <select onChange={e=>setEmployeeid(e.target.value)}>
                    { employees.map((employee,idx)=><option key={idx} value={employee.id}>{employee.id} - {employee.name}</option>)}
                </select>
            </div>
        </div>
    );
}

export default Employee;