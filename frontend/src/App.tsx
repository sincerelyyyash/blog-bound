import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./Pages/Signup"
import Signin from "./Pages/Signin"
import Homepage from "./Pages/Homepage"
import CreateBlog from "./Pages/CreateBlog"
import BlogPage from "./Pages/BlogPage"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />
      {/* <Route path='/blog/:id' element={<BlogPage/>} /> */}
      <Route path='/blog' element={<BlogPage/>} />

      <Route path='/newblog' element={<CreateBlog/>} />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
