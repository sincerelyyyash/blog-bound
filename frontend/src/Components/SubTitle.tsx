import React from 'react'

function SubTitle() {
    return (
        <section className='w-full 
        flex xl:flex-row flex-col justify-center 
        gap-10 max-container'>
          <div className='w-full mt-4'>
            <input type="text" name="subtitle" id="subtitle" placeholder='Sub-heading'
            className='m-8 border-2 w-5/6 h-36 mt-10 rounded-xl placeholder-center 
            text-2xl p-6 italic font-bold border-slate-100
            placeholder:p-6 placeholder:text-2xl placeholder:italic'/>
          </div>
        </section>
      )
}

export default SubTitle