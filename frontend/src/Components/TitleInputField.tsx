import React from 'react'

function TitleInputField() {

  return (
    <section className='w-full 
    flex xl:flex-row flex-col justify-center 
     gap-10 max-container'>
      <div className='w-full mt-4'>
        <input type="text" name="title" id="title" placeholder='Title' 
        className='m-8 border-2 w-5/6 h-16 mt-10 rounded-xl placeholder-center 
        text-2xl p-6 italic font-bold border-slate-100
        placeholder:p-6 placeholder:text-2xl placeholder:italic'/>
      </div>
    </section>
  )
}

export default TitleInputField