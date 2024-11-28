import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/dashboard/dashboard'
import Nomatch from './components/nomatch/nomatch'
import PostUser from './components/postUser/postUser'
import UpdateUser from './components/updateUser/updateUser'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/user' element={<PostUser/>}/>
      <Route path='/user/:id' element={<UpdateUser/>}/>
      <Route path='*' element={<Nomatch/>}/>

     </Routes>
    </>
  )
}

export default App
