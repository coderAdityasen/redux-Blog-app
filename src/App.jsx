import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import CreateBlog from './Components/CreateBlog'
import DetailPage from './Components/DetailPage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={`/post/:postid`} element={<DetailPage/>} />
      <Route path='/' element={<Home/>}/>
      <Route path='/writeBlog' element={<CreateBlog/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
