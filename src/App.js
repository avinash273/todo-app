import logo from './logo.svg';
import './App.css';
import React, { Component} from "react";
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import Counter from "./components/counter/counter";


class App extends Component {
  render(){
    return (
      <div className="App">
          <Counter />
      </div>
    );
  }
}

class LearningComponents extends Component {
    render(){
        return (
            <div className="LearningComponents">
                My Hello World
                <FirstComponent></FirstComponent>
                <SecondComponent></SecondComponent>
                <Counter />
            </div>
        );
    }
}

export default App;
