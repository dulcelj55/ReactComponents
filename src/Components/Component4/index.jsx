import { useState } from "react"

const Component4 = () => {
const [names, setNames]= useState([])
const [inputValue, setInputValue] = useState("")

const handleChange=(e)=> {
    setInputValue(e.target.value);
}
const handleSubmit= (e)=>{
    e.preventDefault()
    let namesCopy = [...names]
namesCopy.push(inputValue)

    setNames(namesCopy)
    setInputValue("")
}

  return (
    <>
    <ul>
        {names.map((name)=>{
            return <li>{name}</li>
        })}
    </ul>
    <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} />
        <button>Submit</button>

    </form>
    </>
  )
}

export default Component4