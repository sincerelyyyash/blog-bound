
import NewBlogNav from '../Components/NewBlogNav'
import InputField from '../Components/InputField'
import Editor from '../Components/Editor'



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
      <Editor/>
    </main>

  )
}

export default CreateBlog