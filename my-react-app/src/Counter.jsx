import React,{useState} from "react"
function Counter(){
    const [count , setCount] = useState(0);

    const inc = ()=>{
      setCount(c => c+1);
      setCount(c => c+1);
      setCount(c => c+1);

    }

    const dec = ()=>{
      setCount(count - 1);
    }

    const reset = ()=>{
      setCount(0);
    }

    return(
      <div className="counter-container">
        <p className="count-display">{count}</p>
        <button onClick={inc}>+1</button>
        <button onClick={dec}>-1</button>
        <button onClick={reset}>Reset</button>
        <p>Count: {count}</p>
      </div>
    );
}

export default Counter