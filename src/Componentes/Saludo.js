import React, { Component } from "react";
import "../App.css";

class Saludo extends Component {
  state = {
    variableSaludo: "Hola desde el componente SALUDO"
  };

  componentWillMount() {
    console.log("1-El componente se va a montar");
    console.log("1-El componente se va a montar");
    console.log("1-El componente se va a montar");
  }

  componentDidMount() {
    console.log("3-El componente ya termino");
  }

  imprimeEnConsola () {
      console.log("2-Dentro de la funcion imprime en Consola")
  }

  render() {
    return (
      <div className="unaClase">
        <h2>{this.state.variableSaludo}</h2>
        {this.imprimeEnConsola()}
      </div>
    );
  }
}

export default Saludo;
