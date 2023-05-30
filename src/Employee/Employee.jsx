import React, { useEffect, useState } from "react";
import "./Employee.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Employee({ employees, set_Selected }) {
  const [employeeid, setEmployeeid] = useState();

  useEffect(() => {
    set_Selected(employeeid);
  }, [employeeid, set_Selected]);

  const handleChange = (event) => {
    setEmployeeid(event.target.value);
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }} style={{ marginTop: "1em" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Funcionários</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={employeeid}
            label="Funcionário"
            onChange={handleChange}
          >
            {employees.map((employee, idx) => (
              <MenuItem key={idx} value={employee.id}>
                {employee.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default Employee;
