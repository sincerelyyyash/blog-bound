import React from 'react'
import { logo} from '../constants'

interface BlogProps{
    title: string,
    description: string,
    author: string,
}

const BlogCard: React.FC<BlogProps> = ({title, description, author})=> {
  return (
    <div className='flex flex-row mr-12 ml-12 mt-12  w-3/5 h-40 rounded-md p-2'>
        <div className='w-2/5'>
            <a href="/">
                <img src={logo} alt="Logo" width={120} height={120} />
            </a>
       </div>
       <div>
        <h2 className='text-xl font-montserrat font-bold p-1'>{title}</h2>
        <div>
            <p className='text-base font-palanquin p-1'>{description}</p>
        </div>
        <div>
            <h6 className='text-base font-montserrat p-1'>~ {author}</h6>
        </div>
       </div>

    </div>
  )
}

export default BlogCard