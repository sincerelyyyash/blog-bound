
import NewBlogNav from '../Components/NewBlogNav'
import InputField from '../Components/InputField'



function CreateBlog() {
  return (
    <main className='flex flex-col'>
      <NewBlogNav />
      <div>
      <InputField  rows={2} placeholder="What's the title?"/>
      </div>
      <div>
      <InputField  rows={4} placeholder='Enter description here'/>
      </div>
      <div>
      <InputField  rows={15} placeholder='Write your content here'/>
      </div>
    </main>

  )
}

export default CreateBlog