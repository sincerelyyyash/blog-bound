import React from 'react'
import NewBlogNav from '../Components/NewBlogNav'
import TitleInputField from '../Components/TitleInputField'
import SubTitle from '../Components/SubTitle'


function CreateBlog() {
  return (
    <main className='flex flex-col'>
      <NewBlogNav />
      <div>
      <TitleInputField/>
      </div>
      <div>
      <SubTitle/>
      </div>
    </main>

  )
}

export default CreateBlog