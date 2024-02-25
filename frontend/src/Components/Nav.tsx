import React from 'react'
import { logo } from '../constants'

function Nav() {
  return (
    <header className='padding-x absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={logo} alt="Logo" width={130} height={130} />
            </a>
            <ul className='flex-1 flex justify-end px-14 items-center  max-lg:hidden'>
                <li>
                    <button className='border-2 border-black rounded-md h-12 w-56 text-black  mr-5'>Write</button>
                </li>
                <li>
                    <button className='font-bold rounded-md h-12 w-24 border-2 border-black text-black mr-5'>Sign-In</button>
                </li>
                <li>
                    <button className='font-bold rounded-md h-12 w-24 text-white bg-black'>Sign-Up</button>
                </li>

            </ul>

        </nav>


    </header>
  )
}

export default Nav