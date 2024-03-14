
import NewBlogNav from '../Components/NewBlogNav'
import InputField from '../Components/InputField'
import Editor from '../Components/Editor'



function CreateBlog() {
  return (
    <main className='flex flex-col ml-20 mr-20'>
      <NewBlogNav />
      <div>
      <Editor/>
      </div>
    </main>

  )
}

export default CreateBlog