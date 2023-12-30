import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
  const [value, setValue] = useState();

const Navigate=useNavigate()

  const HandleClick=()=>{
    Navigate(`room/${value}`)
  }
  return (
    <>
      <input type='text' placeholder='Enter Room Id'
        onChange={(e) => setValue(e.target.value)}
        name='' id='' />
        <button onClick={HandleClick} >Join</button>
    </>
  )
}

export default Home;