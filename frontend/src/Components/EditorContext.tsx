import { createContext, ReactNode, useRef } from "react";
import EditorJS, { ToolConstructable, ToolSettings } from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph"
import Header from "editorjs/header"
import Alert from "editorjs-alert"
import List from '@editorjs/list'
import Embed from "@editorjs/embed"
import Underline from "@editorjs/underline"
import ChangeCase from "editorjs-change-case"
import Strikethrough from "@sotaproject/strikethrough"
import Checklist from "@editorjs/checklist"
import SimpleImage from "@editorjs/simple-image"
import Marker from "@editorjs/marker"
import InlineCode from "@editorjs/inline-code"
import ColorPlugin from "editorjs-text-color-plugin"
import AlignmentBlockTune from "editorjs-text-alignment-blocktune"

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
            holder: "editorjs",
            placeholder: "Let's write",
            tools: props.tools,
            onChange: async () => {
                // console.log(editor);
                const data = await editor.save()
                console.log(data)
            }
        });
        editorInstanceRef.current = editor;
    };

    return (
        <EditorContext.Provider value={{ initEditor, editorInstanceRef }}>
            {props.children}
        </EditorContext.Provider>
    );
}
