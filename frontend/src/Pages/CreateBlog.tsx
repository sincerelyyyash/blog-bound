import React from 'react'
import NewBlogNav from '../Components/NewBlogNav'
import WritingField from '../Components/WritingField'


function CreateBlog() {
  return (
    <>
    <div className='flex flex-col'>
      <NewBlogNav />
      <section>
      <WritingField/>
      </section>
    </div>
    </>
  )
}

export default CreateBlog