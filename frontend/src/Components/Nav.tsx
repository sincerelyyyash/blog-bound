
import { logo, write } from '../constants'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate();
  return (
    <header className='padding-x absolute z-10 h-16 w-full'>
        <nav className='flex justify-between items-center max-container border-2 border-gray-100'>
            <a href="/">
                <img src={logo} alt="Logo" width={120} height={120} />
            </a>
            <ul className='flex-1 flex justify-end px-14 items-center  max-lg:hidden'>
                <li>
                    <button className='border-2  border-black font-bold flex items-center justify-center rounded-md h-12 w-56 text-black ml-5 mr-5'>
                    <a href="/">
                    <img src={write} alt="Logo" width={13} height={13} />
                    </a>
                    <span className="ml-2">Write</span>
                    </button>
                </li>
                <li>
                    <button onClick={()=>{navigate("/signin")}} className='font-bold rounded-md h-12 w-24 border-2 border-black text-black mr-5'>Sign-In</button>
                </li>
                <li>
                    <button onClick={()=>{navigate("/signup")}} className='font-bold rounded-md h-12 w-24 text-white bg-black'>Sign-Up</button>
                </li>

            </ul>

        </nav>


    </header>
  )
}

export default Nav