
import {  write } from '../constants'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate();
  return (
    <header className='padding-x absolute z-10 h-16 w-full'>
        <nav className='flex justify-between items-center max-container border-2 border-gray-100 h-20'>

            <span className='font-montserrat font-semibold text-2xl m-6'>BlogBound</span>
            <ul className='flex-1 flex justify-end px-14 items-center  max-lg:hidden'>
                <li>
                    <button onClick={()=>{navigate("/newblog")}} className='border-2  border-slate-400 font-semibold flex items-center justify-center rounded-md h-12 w-56 text-black ml-5 mr-5'>
                    <a href="/">
                    <img src={write} alt="Logo" width={13} height={13} />
                    </a>
                    <span className="ml-2 font-montserrat">Write</span>
                    </button>
                </li>
                <li>
                    <button onClick={()=>{navigate("/signin")}} className='font-semibold rounded-md h-12 w-24 text-white bg-black font-montserrat'>Sign-In</button>
                </li>

            </ul>

        </nav>


    </header>
  )
}

export default Nav