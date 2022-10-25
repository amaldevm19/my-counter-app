import {useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = ()=>{
    setCount((count)=>{return count+1})
  }
  const decreaseCount = ()=>{
    if(count > 0){
      setCount(count=>count-1)
    }
  }

  const resetCount = ()=>{
    setCount(0)
  }
  return (
   <div className="counter">
      <h1>React Counter</h1>
      <span className='counter-output'>{count}</span>
      <div className="btn-container">
        <button className="control-button" onClick={increaseCount}>+</button>
        <button className="control-button" onClick={decreaseCount}>-</button>
        <button className="control-button" onClick={resetCount}>Reset</button>
      </div>
   </div>
  );
}

export default App;
