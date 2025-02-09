import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";

export interface FileUploaderProps {
  getRootProps?: () => DropzoneRootProps;
  getInputProps?: () => DropzoneInputProps;
  handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
