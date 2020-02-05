import React from 'react';
import './App.css';
import Saludo from './Componentes/Saludo';
import Despedida from './Componentes/Despedida';


function App() {
  return (
    <React.Fragment>
      <h1> Hello World</h1>
      <h4> Desde el componente <span>App</span></h4>
      <Saludo></Saludo>
      <Despedida variableProp = "Chao"></Despedida>
    </React.Fragment>
  );
}

export default App;
