import './App.css';
import Employee from '../Employee/Employee';
import { useState } from 'react';

function App() {
  const employees = [
    {id: 1, name: "teste1"},
    {id: 2, name: "teste2"},
    {id: 3, name: "teste3"},
    {id: 4, name: "teste4"},
    {id: 5, name: "teste5"},
    {id: 6, name: "teste6"},
    {id: 7, name: "teste7"},
    {id: 8, name: "teste8"},
  ]

  function returnSelected(id){
    setSelected(id);
  }
  
  const [selected, setSelected] = useState('');
  
  return (
    <div className="App">
      <header className="App-header">
        <Employee employees={employees} set_Selected={returnSelected}/>
        <h1>Valor: {selected}</h1>
      </header>
    </div>
  );
}

export default App;
