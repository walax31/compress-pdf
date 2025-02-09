import { UploadedFile } from "@/types/index.types";

export interface FilePreviewProps {
  uploadedFile: UploadedFile[];
  previews: string[];
  handleRemoveFile: (index: number) => void;
}
