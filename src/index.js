import React, {Component, useState} from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2
    };
  }

  upCount = e => {
    e.preventDefault();
    this.setState(function(prevState) {
      return {
        count: prevState.count + 1
      };
    });
  };
  downCount = e => {
    e.preventDefault();
    this.setState(function(prevState) {
      if (prevState.count >= 1) {
        return {
          count: prevState.count - 1
        };
      }
    });
  };

  resetCount = e => {
    e.preventDefault();
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="counter">
        <div className="count">{this.state.count}</div>
        <div className="changeCount">
          <a href="#" className="upCount" onClick={this.upCount}>
            Up
          </a>
          <a href="#" className="downCount" onClick={this.downCount}>
            Down
          </a>
          <a href="#" className="resetCount" onClick={this.resetCount}>
            Reset
          </a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  syncChanges(value, property) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  submitForm = () => {
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input
          onChange={ev => {
            this.syncChanges(ev.target.value, "email");
          }}
          type="email"
          value={this.state.email}
          placeholder="Email"
        />
        <input
          onChange={ev => {
            this.syncChanges(ev.target.value, "password");
          }}
          type="password"
          value={this.state.password}
          placeholder="*****"
        />
        <div>
          <input
            onClick={this.submitForm}
            type="submit"
            value="Iniciar sesión"
          />
        </div>
      </form>
    );
  }
}

ReactDOM.render(<Formulario />, document.getElementById("prospecto"));

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }
  aumentar = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.aumentar}>Aumentar</button>
      </div>
    );
  }
}

class Nalgas extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    let nombre = "Nalga";
    return (
      <div>
        <Contador />
      </div>
    );
  }
}

ReactDOM.render(<Nalgas />, document.getElementById("secundo"));

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        "Mi primer componente en React",
        "Introduccion a React",
        "Que es React"
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.articles.map(palabrainventada => {
          return <p>{palabrainventada}</p>;
        })}
      </div>
    );
  }
}

ReactDOM.render(<Blog />, document.getElementById("terqueto"));

class Lista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    let promesa = fetch("https://jsonplaceholder.typicode.com/posts");

    promesa
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.articles.map(article => {
          return (
            <p className="card" style={{ backgroundColor: "green" }}>
              {article.title}//title es un prop en el objeto
            </p>
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<Lista />, document.getElementById("cuarqueto"));
// este ultimo lo que hace es que al establecer una base de datos
//reconocer sus objetos y devolverlos como texto dentro del div


