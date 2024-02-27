import React from 'react'
import Nav from '../Components/Nav'
import BlogCard from '../Components/BlogCard'

function Homepage() {
  return (
    <div className='flex flex-col mb-8'>
      <div>
      <Nav/>
      </div>
      <div >
      <BlogCard title='I Found 3 Passive Income Ideas Anyone Can Start'
      description='Build your First or Next Passive Income Stream 
      Today I know I’m not the only one who loves the idea of receiving payment
      notifications without having to actively put in time. We only get 24 hours everyday.'
      author='Paul Rose'
      />
      </div>
      <div>
      <BlogCard title='I Found 3 Passive Income Ideas Anyone Can Start'
      description='Build your First or Next Passive Income Stream 
      Today I know I’m not the only one who loves the idea of receiving payment
      notifications without having to actively put in time. We only get 24 hours everyday.'
      author='Paul Rose'
      />
      </div>
      <div>
      <BlogCard title='I Found 3 Passive Income Ideas Anyone Can Start'
      description='Build your First or Next Passive Income Stream 
      Today I know I’m not the only one who loves the idea of receiving payment
      notifications without having to actively put in time. We only get 24 hours everyday.'
      author='Paul Rose'
      />
      </div>
      <div>
      <BlogCard title='I Found 3 Passive Income Ideas Anyone Can Start'
      description='Build your First or Next Passive Income Stream 
      Today I know I’m not the only one who loves the idea of receiving payment
      notifications without having to actively put in time. We only get 24 hours everyday.'
      author='Paul Rose'
      />
      </div>
    </div>
  )
}

export default Homepage