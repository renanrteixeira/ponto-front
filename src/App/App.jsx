import "./App.css";
import Employee from "../Employee/Employee";
import { useState } from "react";
import { Button, Container, Paper, TextField } from "@mui/material";

function App() {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState(null);
  const [id, setId] = useState(null);
  const [nome, setNome] = useState(null);

  function returnSelected(id) {
    setSelected(id);
  }

  function additem(id, name) {
    const obj = { id: id, name: name };
    setEmployees([...employees, obj]);
  }

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            id="outlined-basic"
            label="ID"
            variant="outlined"
            fullWidth
            onChange={(e) => setId(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            fullWidth
            onChange={(e) => setNome(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              additem(id, nome);
            }}
          >
            Add
          </Button>
        </div>
        <div>
          <Employee employees={employees} set_Selected={returnSelected} />
          <h1>Valor: {selected}</h1>
        </div>
      </Paper>
    </Container>
  );
}

export default App;
