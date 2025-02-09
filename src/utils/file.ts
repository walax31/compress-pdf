export const generateFileName = (fileNames: string[] | undefined): string => {
  if (!fileNames || fileNames.length === 0) return "compressed-file.pdf";
  return fileNames.length > 1
    ? `compressed-${fileNames.length}-files.zip`
    : fileNames[0];
};

export const createBlobDownload = (blob: Blob, fileName: string) => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const formatCtime = (ctime: string): string => {
  return new Date(ctime).toISOString().replace("T", " ").split(".")[0];
};
