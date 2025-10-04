import { useState } from "react";

function Counter(){
    // using usestate hook with its default value zero.
    const [count, setCount ] = useState(0);
  
    // incrementing function
    const handleIncrement = () => {
        setCount(count + 1);
    }
    
    // decrementing function
    const handleDecrement = () => {
        setCount(count - 1);
    }

    return(
        <div className="counter-container">
            <h1>Current Count: { count }</h1>
            <button onClick={ handleIncrement }>Click me to increment !</button>
            <button onClick={ handleDecrement }>Click me to decrement !</button>
        </div>
    );
}

export default Counter;