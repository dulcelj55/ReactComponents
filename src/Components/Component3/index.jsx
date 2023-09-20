import { useState } from "react"

const Component3 = () => {
const [names, setNames]= useState(["Lydia", "Jose", "Koda", "Chula", "Duffy", "Nunuk", "Lily", "Danya" ])
const [randomIndex, setRandomIndex]= useState("")

const change=(e)=> {
   
    setRandomIndex(names[ Math.floor(Math.random()*8)]);
}
  return (
    <>
    
    <button onClick={change}>Change Name</button>
    <div>{randomIndex}</div>
    
    </>
  )
}

export default Component3