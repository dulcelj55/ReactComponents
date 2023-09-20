import { useState } from "react"

const Component6= ({products}) => {
const [isVisible, setIsVisible]= useState(true)
const handleVisibleToggle =(e)=>{
    e.preventDefault()
isVisible ? setIsVisible(false): setIsVisible(true)

//    setIsVisible(!true)



}
  return (
    <div>
        <div>{products.title}</div>
        <button onClick={handleVisibleToggle}>Toggle Discription</button>
         
{ isVisible?  <div>{products.description}</div> : <div></div> }

    </div>
  )
}

export default Component6
