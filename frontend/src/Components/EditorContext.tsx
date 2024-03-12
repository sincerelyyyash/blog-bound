import { createContext, ReactNode, useRef } from "react";
import EditorJS, { ToolConstructable, ToolSettings } from "@editorjs/editorjs";

interface EditorContextProviderProps {
    holder: string;
    placeholder: string;
    tools: { [toolName: string]: ToolConstructable | ToolSettings };
    children: ReactNode; 
}

interface EditorContextValue {
    initEditor: () => void;
    editorInstanceRef: React.MutableRefObject<EditorJS | null>;
}

export const EditorContext = createContext<EditorContextValue>({
    initEditor: () => {},
    editorInstanceRef: { current: null }
});

export default function EditorContextProvider(props: EditorContextProviderProps) {
    const editorInstanceRef = useRef<EditorJS | null>(null);

    const initEditor = () => {
        const editor = new EditorJS({
            holder: props.holder,
            placeholder: props.placeholder,
            tools: props.tools,
        });
        editorInstanceRef.current = editor;
    };

    return (
        <EditorContext.Provider value={{ initEditor, editorInstanceRef }}>
            {props.children}
        </EditorContext.Provider>
    );
}
