import { useState } from "react"

const Component4 = () => {
const [names, setNames]= useState([])
const [inputValue, setInputValue] = useState("")

const handleChange=(e)=> {
    setInputValue(e.target.value);
}
const handleSubmit= ()=>{
    
    setNames(names.push({inputValue}))
    

    const newList=()=>{

        names.map(item)=>{
    
            return <li>{item}</li>
        }
    
    
    setInputValue("")
    
}}

  return (
    <form>
        <input value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default Component4