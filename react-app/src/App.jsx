import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import Welcome from './components/Welcome'
import Counter from './components/Counter'


function App() {
let people = [
  {name:"John", job:"Programmer", color:"red"},
  {name:"Doe", job:"Designer", color:"red"},
  {name:"Sarah", job:"Model" },
  {name:"James", job:"Dancer" }

]
  return (
    <>
      {/* <h1></h1> */}
      <div className='container'>
        {people.map((item, index)=> {
          return(
            // <div key={index}>
            <Welcome key={index} name={item.name} job={item.job} color={item.color}></Welcome>
            // </div>
          )
        })}
      </div>
        <div>
          <Counter/>
          <Counter start={100} />
          <Counter start={-30} />
        </div>


    </>
  )
}

export default App