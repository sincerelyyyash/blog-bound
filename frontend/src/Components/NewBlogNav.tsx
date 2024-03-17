import { useNavigate } from "react-router-dom"


function NewBlogNav() {
    const navigate = useNavigate();

  return (
    <header className='padding-x  w-full'>
        <nav className='flex justify-between items-center max-container'>
        <span className='font-montserrat font-semibold text-2xl m-6' onClick={()=>{navigate("/")}}>BlogBound</span>

            <ul className='flex-1 flex justify-end px-14 items-center  max-lg:hidden'>
                
                <li>
                    <button className='rounded-full h-12 w-24  text-white bg-black mr-5 font-montserrat'>Publish</button>
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