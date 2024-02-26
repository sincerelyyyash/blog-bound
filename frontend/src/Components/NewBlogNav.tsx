
import { logo, write } from '../constants'
import { useNavigate } from 'react-router-dom'

function NewBlogNav() {
    const navigate = useNavigate();
  return (
    <header className='padding-x  w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={logo} alt="Logo" width={120} height={120} />
            </a>
            <ul className='flex-1 flex justify-end px-14 items-center  max-lg:hidden'>
                
                <li>
                    <button className='rounded-full h-12 w-24  text-white bg-black mr-5'>Publish</button>
                </li>
                {/* <li>
                    <button className='rounded-full h-12 w-12 text-white bg-black'>UserName here</button>
                </li> */}

            </ul>
        </nav>


    </header>
  )
}

export default NewBlogNav