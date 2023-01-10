import { ReactElement, useRef, useState } from "react";
import { Body } from "../../typography";
import { FileUploadWrapper, FileInput, FileInputButton } from "./subcomponents";
import strings from "../../locale/en";
import { FileDrop } from "react-file-drop";

interface FileUploaderProps {
  type?: "doc" | "image" | "assigment";
  //eslint-disable-next-line no-unused-vars
  onUploadSuccess: (file: any) => void;
}

const FileUploader = ({
  type,
  onUploadSuccess,
}: FileUploaderProps): ReactElement => {
  const fileInputRef = useRef<null | any>(null);

  const {
    fileUpload: {
      dragAndDropText,
      docFilesOnly,
      upload,
      imageOnly,
      assignment,
    },
  } = strings;

  const onFileInputChange = (event: any) => {
    const { files } = event.target;
    onUploadSuccess(files[0]);
    setfirst(files[0].name)
    // do something with your files...
  };

  const onTargetClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const determineFileType = () => {
    switch (type) {
      case "image":
        return imageOnly;
      case "doc":
        return docFilesOnly;
      default:
        return assignment;
    }
  };

  const [first, setfirst] = useState('')

  return (
    <FileUploadWrapper>
      <FileDrop
        onFrameDragEnter={(event) => console.log("onFrameDragEnter", event)}
        onFrameDragLeave={(event) => console.log("onFrameDragLeave", event)}
        onFrameDrop={(event) => console.log("onFrameDrop", event)}
        onDragOver={(event) => console.log("onDragOver", event)}
        onDragLeave={(event) => console.log("onDragLeave", event)}
        onDrop={(files) => {
          if (files) {
            onUploadSuccess(files[0]);
          }
        }}
        onTargetClick={onTargetClick}
      >
        <Body>{dragAndDropText}</Body>
        <Body> OR</Body>
        <FileInput
          onChange={onFileInputChange}
          ref={fileInputRef}
          type="file"
        />
        <FileInputButton active>{first ? first : upload}</FileInputButton>
        <Body>{determineFileType()}</Body>
      </FileDrop>
    </FileUploadWrapper>
  );
};

export default FileUploader;
