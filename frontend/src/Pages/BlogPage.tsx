import { useState } from 'react'
import Nav from '../Components/Nav'

type BlogPage = {
  title: string,
  subtitle: string,
  content: string,
  author: string,
}

function BlogPage({}) {
const [title,setTitle]= useState("");
const [subtite,setSubtitle]= useState("");
const [content,setContent]= useState("");
const [author,setAuthor]= useState("");


  return (
    <div className='flex flex-col mb-8'>
      <div>
        <Nav/>
      </div>
      <div className='mt-14 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-5xl w-2/4 font-palanquin'>
        {title}
        </h1>
        <div className='flex justify-center w-2/4 font-montserrat text-lg italic mt-8'>
       {subtite}.
        </div>
        <div className='flex justify-items-start w-2/4'>
            <h4 className='text-md font-montserrat p-1'>~ {author}</h4>
        </div>
        <div className='w-2/4 mt-14 font-montserrat text-lg font-'>
            <p>
              {content}
            </p>
        </div>
      </div>

    </div>
  )
}

export default BlogPage