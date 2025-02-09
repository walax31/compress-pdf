export interface FileSettingProps {
  dpi: number;
  handleCompressFiles: () => void;
  imageQuality: number;
  isGray: boolean;
  setDpi: (dpi: number) => void;
  setImageQuality: (quality: number) => void;
  setIsGray: (isGray: boolean) => void;
}
