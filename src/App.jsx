import { useState } from 'react'

import './App.css'
import Component1 from './Components/Component1'
import Component2 from './Components/Component2'
import Component3 from './Components/Component3'
import Component4 from './Components/Component4'
import Component5 from './Components/Component5'
import Component6 from './Components/Component6'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> <div className="App">
    <div className="component-container red">
      <h1><Component1/></h1>
      
    </div>
    <div className="component-container blue">
      <h1><Component2/></h1>
     
    </div>
    <div className="component-container green">
      <h1><Component3/></h1>
      
    </div>
    <div className="component-container grey">
      <h1><Component4/></h1>
      
    </div>
    <div className="component-container purple">
      <h1><Component5/></h1>
     
    </div>
    <div className="component-container purple">
      <h1><Component6/></h1>
     
    </div>
  </div>
      
    </>
  )
}

export default App


