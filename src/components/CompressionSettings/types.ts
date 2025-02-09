export interface CompressionSettingsProps {
  dpi: number;
  setDpi: (dpi: number) => void;
  imageQuality: number;
  setImageQuality: (quality: number) => void;
  isGray: boolean;
  setIsGray: (isGray: boolean) => void;
  handleCompressFiles: () => void;
}
