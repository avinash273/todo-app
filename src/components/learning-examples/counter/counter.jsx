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
        this.reset = this.reset.bind(this);
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

    reset = () => {
        this.setState({
            counter: 0
        });
    }

    render() {
        return (
            <div className="layout">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={15} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <div>
                    <span className="count">{this.state.counter}</span>
                </div>
                <div>
                    <button className="reset" onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
}

class CounterButton extends Component {
    render = () => {
        return (
            <div>
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
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