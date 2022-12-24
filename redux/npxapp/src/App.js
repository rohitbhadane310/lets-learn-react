import React from 'react'
import './App.css'

function App() {
  return (
    <>
     <div className='container'>

      <h1>Increment/Decrement counter</h1>
      <h4>using React and redux</h4>

      <div className='quantity'>
         <a className='quantity_minus' title='Decrement'><span>-</span></a>
         <input name='quantity' type='text' className='quantity_input' value= "0" />
         <a className='quantity_plus' title='Increment'><span>+</span></a>
      </div>
     </div>
    </>
  )
}

export default App