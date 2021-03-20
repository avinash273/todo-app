import React, {Component} from 'react';
import './counter.css';
// This is a goof example of states and props
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

export default Couter;