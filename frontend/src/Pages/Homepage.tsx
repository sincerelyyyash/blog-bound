import React from 'react'
import Nav from '../Components/Nav'
import BlogCard from '../Components/BlogCard'

function Homepage() {
  return (
    <div className='flex flex-col'>
      <div>
      <Nav/>
      </div>
      <div>
      <BlogCard/>
      </div>
    </div>
  )
}

export default Homepage