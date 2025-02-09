export interface FileCompressionCompleteProps {
  files?: string[];
  onDelete?: () => void;
  onDownload: () => void;
  onPreview?: () => void;
  onRestart: () => void;
}
