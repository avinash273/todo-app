import React, {Component} from 'react';
import './counter.css';

function Counter() {
    return (
        <div className={"counter"}>
            <button onClick={increment}>+1</button>
            <span className={"count"}>1</span>
        </div>
    );

    function increment(){
        console.log("increment");
    }

}

export default Counter;