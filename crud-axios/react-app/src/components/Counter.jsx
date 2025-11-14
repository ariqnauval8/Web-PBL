import { useEffect, useState } from "react"

const Counter = ({start=0})=>{
  const [count, setCount] = useState(start)
  const [color, setColor] = useState("black")
  const [hideCount, setHideCount] = useState(false)

  useEffect(()=>{
    if (color === "black"){
      if (count >= 10){
        setColor("red")
      }
    }
    setTimeout(()=>{
      setCount(count+1)
    },1000)
  }, [count])

  const hideCounter=()=>{
    setHideCount(!hideCount)
  }

  return(
    <>
      {!hideCount && <h1 style={{color}}>count: {count}</h1>}
      <button className="button" onClick={hideCounter}>{hideCount ? "Show" : "Hide"} Counter</button>
    </>
  )
}

export default Counter