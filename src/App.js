import logo from './logo.svg';
import './App.css';
import React, { Component} from "react";
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
class App extends Component {
  render(){
    return (
      <div className="App">
          <LearningComponents></LearningComponents>
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
            </div>
        );
    }
}

export default App;
