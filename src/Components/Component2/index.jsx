import { useState } from "react"

const Component2 = () => {
    const [inputValue, setInputValue] = useState("")
    const [displayValue, setDisplayValue] = useState("")


    const handleChange=(e)=> {
        setInputValue(e.target.value);
    }
    const show =()=>{
        setDisplayValue(inputValue);
    }

    

  return (
    <>
     <input value={inputValue} onChange={handleChange} />
     <button onClick={show}>Show this text on screen</button>
     <div>{displayValue}</div>
    
    </>
  )
}

export default Component2