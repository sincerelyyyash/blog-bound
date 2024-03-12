import  { useContext, useEffect, useRef } from 'react'
import { EditorContext } from './EditorContext'

function Editor() {
    const {initEditor} =useContext(EditorContext)
    const editorRef = useRef(false);

    useEffect(()=>{
        if(!editorRef.current){
            initEditor()
            editorRef.current = true
        }
        
    },[])
  return (
    <div id="editorjs">
        
    </div>
  )
}

export default Editor