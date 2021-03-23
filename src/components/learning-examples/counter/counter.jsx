import React, {Component} from 'react';
import './counter.css';
import PropTypes from "prop-types";

class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <CounterButton by={1}/>
                <CounterButton by={5}/>
                <CounterButton by={10}/>
                <CounterButton by={15}/>
            </div>
        );
    }
}


// This is a good example of states and props
class CounterButton extends Component {
    //Step 1. Define the intial state in a constructor
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        // this.increment = this.increment.bind(this);
    }

    //Step 2. Update the state here
    increment = () => {
        console.log("increment");
        this.setState({
            counter: this.state.counter + this.props.by
        });
    }

    render = () => {
        return (
            <div className={"counter"}>
                <button onClick={this.increment}>+{this.props.by}</button>
                {/*Step 3: use the value*/}
                <span className={"count"}>
                    {this.state.counter}
                </span>
            </div>
        );
    }


}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter;