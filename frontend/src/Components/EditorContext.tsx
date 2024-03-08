import { createContext, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

interface EditorContextProviderProps{
    holder: string,
    placeholder: string,
    tools: object
}

export const EditorContext = createContext()

export default function EditorContextProvider(props: EditorContextProviderProps){
    const editorInstanceRef = useRef(null)
    const initEditor = ()=>{
        const editor = new EditorJS({
            holder: "editorjs",
            placeholder: "Let's write down your thoughts!",
            tools:{},
        })
        editorInstanceRef.current = editor
    }
    return (
        <EditorContext.Provider value={{initEditor, editorInstanceRef}}>
            {props.children}
        </EditorContext.Provider>
    );
}