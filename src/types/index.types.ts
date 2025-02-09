export interface UploadedFileItem {
  file: string;
  size: number;
  name: string;
  ctime: string;
  host: string;
}

export interface UploadedFile extends UploadedFileItem {
  originalName: string;
}

export interface CompressionPayload {
  files: UploadedFileItem[];
  dpi: number;
  imageQuality: number;
  mode: "normal" | "grayscale";
  colorModel: string;
}

export interface JobResponse {
  jobId: string;
}

export interface JobStatus {
  jobId: string;
  status: string;
  job: {
    state: string;
    "processing.heartbeat": string;
    "out.file": string;
    "out.name": string;
    "out.size": string;
  };
}

export interface FileWithPreview {
  file: File;
  preview: string;
}
