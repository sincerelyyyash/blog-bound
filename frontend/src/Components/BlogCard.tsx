import React from 'react'

interface BlogProps{
    title: string,
    description: string,
    author: string,
}

const BlogCard: React.FC<BlogProps> = ({title, description, author})=> {
  return (
    <div className='flex flex-row m-12  w-2/5 h-40 rounded-md p-2'>
       <div>
        <h2 className='text-xl font-montserrat font-bold p-1'>{title}</h2>
        <div>
            <p className='text-base font-palanquin p-1'>{description}</p>
        </div>
        <div>
            <h6 className='text-base font-montserrat p-1'>{author}</h6>
        </div>
       </div>
       {/* <div>
        Image is here
       </div> */}
    </div>
  )
}

export default BlogCard