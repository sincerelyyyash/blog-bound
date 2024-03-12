import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  EditorContextProvider  from './Components/EditorContext.tsx'

const editorContextProviderProps = {
  holder: 'editorjs', // Provide the holder ID or selector
  placeholder: "Let's write down your thoughts!",
  tools: {}, // Define the tools object as needed
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EditorContextProvider {...editorContextProviderProps}>
    <App />
    </EditorContextProvider>
  </React.StrictMode>,
)
