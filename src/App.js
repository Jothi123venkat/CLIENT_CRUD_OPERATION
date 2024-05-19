import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Userpage from './Components/Userpage'
import CreateUser from './Components/CreateUser'
import UpdateUser from './Components/UpdateUser'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Userpage />} />
        <Route path="/create" element={<CreateUser />} />
        <Route  path="/update/:id" element={<UpdateUser/>}/>
      </Routes>
    </div>
  )
}

export default App