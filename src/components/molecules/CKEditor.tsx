import React from 'react';
import { CKEditor as Editor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
type Props = {
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  onFocus?: (value: string) => void;
  className?: string;
};

const CKEditor = (props: Props) => {
  const { value, onChange, onBlur, onFocus, className } = props;
  return (
    <div className={`${className}`}>
      <Editor
        editor={ClassicEditor}
        data={value}
        onReady={(editor) => {
          // console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange && onChange(data);
        }}
        onBlur={(event, editor) => {
          const data = editor.getData();
          onBlur && onBlur(data);
        }}
        onFocus={(event, editor) => {
          const data = editor.getData();
          onFocus && onFocus(data);
        }}
      />
    </div>
  );
};

export default CKEditor;
