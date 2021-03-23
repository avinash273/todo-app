import React, {Component} from 'react';
import './counter.css';
import PropTypes from "prop-types";

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment = (by) => {
        console.log(`increment from parent -  ${by}`);
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement = (by) => {
        console.log(`increment from parent -  ${by}`);
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        );
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={15} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className={"count"}>{this.state.counter}</span>
                <div>
                    <button>Reset</button>
                </div>
            </div>
        );
    }
}

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    render = () => {
        return (
            <div className={"counter"}>
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
                <span className={"count"}>
                    {this.state.counter}
                </span>
            </div>
        );
    }

    increment = () => {
        console.log("increment from parent");
        this.setState({
            counter: this.state.counter + this.props.by
        });

        this.props.incrementMethod(this.props.by);
    }

    decrement = () => {
        console.log("increment from parent");
        this.setState({
            counter: this.state.counter - this.props.by
        });

        this.props.decrementMethod(this.props.by);
    }


}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter;