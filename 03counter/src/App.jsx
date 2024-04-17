import './App.css'
import { useState } from 'react';

function App() {
  // hooks in react
  let [counter, setCounter] = useState(5)

  const addValue = () => {
    //counter = counter + 1
    //setCounter(counter + 1)
    if (counter < 20) setCounter(counter + 1)

  }
  const removeValue = () => {
    //counter = counter - 1;
    //setCounter(counter - 1)
    if (counter > 0) setCounter(counter - 1)
  }
  return (
    <>
      <h1>Counter using chai aur code</h1>
      <h2>Count is : {counter}</h2>
      <div className='btn-section'>
        <button className='button' onClick={addValue}>Add Value Count: {counter}</button>
        <button className='button remove' onClick={removeValue}>Remove Value</button>
      </div>
      <p>Footer: {counter}</p>

    </>
  )
}
export default App
