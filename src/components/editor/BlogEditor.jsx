import React from "react";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function BlogEditor() {
    const [editorState, setEditorState] = EditorState.createEmpty();
    
  return (
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={this.onEditorStateChange}
    />
  );
}

export default BlogEditor;
