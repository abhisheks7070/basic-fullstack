import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Main from './components/Main';
import './App.css'

// function App() {
//   const [status, setStatus] = useState({
//     "all" : false,
//     "first" : false,
//     "second" : false,
//     "third" : false,
//     "fourth" : false
//   })

//   // console.log(status.first && status.second && status.third && status.fourth)
//   // {(status.first && status.second && status.third && status.fourth) && setStatus({...status, all : true})}
//   {(status.all) && setStatus({first :true, second: true, third:true, fourth: true })}
//   console.log(status.first)
//     return(<>
//     <div>
//       <input onChange={()=>setStatus({all: !(status.first && status.second && status.third && status.fourth) }) } checked = {(status.first && status.second && status.third && status.fourth)} id='all' type="checkbox" />
//       <label htmlFor="all">SELECT ALL</label>
//     </div>
//     <div>
//       <input onChange={()=>{setStatus({...status, first : !status.first })}} checked = {status.first} id='1' type="checkbox" />
//       <label htmlFor="1">1</label>
//     </div>
//     <div>
//       <input onChange={()=>setStatus({...status,second:!status.second })} checked = {status.second} id='2' type="checkbox" />
//       <label htmlFor="2">2</label>
//     </div>
//     <div>
//       <input onChange={()=>setStatus({...status,third:!status.third })} checked = {status.third} id='3' type="checkbox" />
//       <label htmlFor="3">3</label>
//     </div>
//     <div>
//       <input onChange={()=>setStatus({...status, fourth : !status.fourth })} checked = {status.fourth} id='4' type="checkbox" />
//       <label htmlFor="4">4</label>
//     </div>
//   </>

// )
// }

// function App() {
//   const [upp, setUpp] = useState("")
//   const [toupp, setToupp] = useState(false)
//   function upper(e){
//     toupp == true ? setUpp((e.target.value).toUpperCase()) : setUpp((e.target.value))
//   }
//   return (<>
//   <label htmlFor="upp">fo Uppercase: </label>
//   <input id='upp' type="checkbox" onClick={()=>{setToupp(!toupp);setUpp("")}} />
//   <textarea onChange={upper} value={upp} />
//   </>)
// }
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
          <Route index element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="main" element={<Main />} />
          {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
