import React from 'react'
import HelloWorld from './Components/HelloWorld'
import Navbar from './Components/Navbar'
import Tenary from './Components/Tenary'
// import Assignment from './Components/Assignment'
// import Fetch from '../Fetch'
import Fetch2 from '../Fetch2'
// import FetchAss from '../FetchAss'


const App = () => {
  let styles = {
    color:"green",
    padding : "80px"
  }
  return (
    <div>
      {/* <h1 style={styles}>React App</h1> */}
      {/* <p style={{color:"pink", padding:"80px"}}>React is working!</p> */}
      {/* <HelloWorld/> */}
      {/* <Navbar /> */}
      {/* <Tenary/> */}
      {/* <Assignment/> */}
      {/* <Fetch/> */}
      <Fetch2/>
      {/* <FetchAss/> */}
    </div>
  )
}

export default App