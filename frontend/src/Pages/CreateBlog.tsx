
import NewBlogNav from '../Components/NewBlogNav'
import InputField from '../Components/InputField'



function CreateBlog() {
  return (
    <main className='flex flex-col ml-20 mr-20'>
      <NewBlogNav />
      <div>
      <InputField  rows={2} placeholder="What's the title?"/>
      </div>
      <div>
      <InputField  rows={4} placeholder='Enter description here'/>
      </div>
      
    </main>

  )
}

export default CreateBlog