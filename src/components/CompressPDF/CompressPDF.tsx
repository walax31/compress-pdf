"use client";

import { useCallback, useState } from "react";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import {
  checkJobStatus,
  compressPDF,
  downloadFile,
  postUploadPDF,
} from "@/services/http/pdf24";
import { CompressionPayload, UploadedFile } from "@/types/index.types";
import FileUploader from "../FileUploader";
import FilePreview from "../FilePreview";
import FileCompressionComplete from "../FileCompressionComplete";
import PDFToolsPanel from "../PDFToolsPanel";
import CompressionSettings from "../CompressionSettings";
import { generatePreview } from "@/utils/generatePreview";
import { createBlobDownload, formatCtime } from "@/utils/file";
import AdBanner from "../AdBanner";

const CompressPDF = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [dpi, setDpi] = useState<number>(144);
  const [imageQuality, setImageQuality] = useState<number>(75);
  const [isGray, setIsGray] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [fileNames, setFileNames] = useState<Record<string, string[]>>({});

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const filesArray = Array.from(event.target.files);

    const newFiles = filesArray.filter(
      (file) =>
        !selectedFiles.some((existingFile) => existingFile.name === file.name)
    );

    if (newFiles.length === 0) return;

    const updatedFiles = [...selectedFiles, ...newFiles];
    setSelectedFiles(updatedFiles);
    setStep(2);

    try {
      const uploadedData = await Promise.all(
        newFiles.map(async (file) => {
          const response = await postUploadPDF(file);
          return { ...response, originalName: file.name };
        })
      );
      setFileNames((prev) => ({
        ...prev,
        ...Object.fromEntries(
          uploadedData.map((file) => [file.file, file.originalName])
        ),
      }));

      setUploadedFiles([...uploadedFiles, ...uploadedData]);

      const previewsData = await Promise.all(
        newFiles.map((file) => generatePreview(file))
      );
      setPreviews([...previews, ...previewsData]);
    } catch (error) {
      console.error(error);
    }
  };

  const checkCompressionProgress = async (jobId: string) => {
    try {
      let status = "pending";
      while (status === "pending") {
        const response = await checkJobStatus(jobId);
        status = response.status;

        if (status === "done") {
          setStep(3);
          return response;
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleCompressFiles = useCallback(async () => {
    if (uploadedFiles.length === 0) return;

    try {
      const payload: CompressionPayload = {
        files: uploadedFiles
          .flat()
          .map(({ file, size, name, ctime, host }) => ({
            file,
            size,
            name,
            ctime: formatCtime(ctime),
            host,
          })),
        dpi,
        imageQuality,
        mode: isGray ? "grayscale" : "normal",
        colorModel: "",
      };

      const jobId = await compressPDF(payload);
      setId(jobId);
      setFileNames((prev) => ({
        ...prev,
        [jobId]: uploadedFiles.map((file) => file.originalName),
      }));

      await checkCompressionProgress(jobId);
    } catch (error) {
      console.error(error);
    }
  }, [uploadedFiles, dpi, imageQuality, isGray]);

  const handleRemoveFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    const newUploadedFiles = uploadedFiles.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);

    setFileNames((prev) => {
      const updatedFileNames = { ...prev };
      delete updatedFileNames[uploadedFiles[index]?.file];
      return updatedFileNames;
    });

    setSelectedFiles(newFiles);
    setUploadedFiles(newUploadedFiles);
    setPreviews(newPreviews);

    if (newFiles.length === 0) setStep(1);
  };

  const downloadPDF = async (jobId: string) => {
    try {
      const response = await downloadFile(jobId);
      if (response) {
        const blob = new Blob([response.data], { type: "application/pdf" });

        const fileNamesList = fileNames[jobId] || ["compressed-file.pdf"];
        const fileName =
          fileNamesList.length > 1
            ? `compressed-${fileNamesList.length}-files.zip`
            : fileNamesList[0];

        createBlobDownload(blob, fileName);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div className="w-full h-auto flex flex-col bg-white px-4 md:px-[166px] md:py-10 mb-6 gap-10">
      <Header />
      <div className="border-2 border-dashed border-primary-600 flex flex-col items-center rounded-lg p-6 w-full bg-blue-50 py-10 gap-4">
        <ProgressBar
          step={step}
          firstLabel="1. Upload your PDFs"
          secondaryLabel="2. Choose compression"
          thirdLabel="3. Done"
        />
        {step === 1 && <FileUploader handleUpload={handleUpload} />}
        {step === 2 && (
          <>
            <div className="flex items-center gap-4">
              <div className="w-full h-full flex flex-col md:flex-row">
                <FilePreview
                  uploadedFile={uploadedFiles}
                  previews={previews}
                  handleRemoveFile={handleRemoveFile}
                />
              </div>
            </div>
          </>
        )}
        {step === 3 && (
          <FileCompressionComplete
            files={fileNames[id] || []}
            onDownload={() => downloadPDF(id)}
            onRestart={() => setStep(1)}
          />
        )}
      </div>
      {step === 2 && (
        <CompressionSettings
          dpi={dpi}
          setDpi={setDpi}
          imageQuality={imageQuality}
          setImageQuality={setImageQuality}
          isGray={isGray}
          setIsGray={setIsGray}
          handleCompressFiles={handleCompressFiles}
        />
      )}
      {step === 3 && <PDFToolsPanel />}
      <AdBanner />
    </div>
  );
};

export default CompressPDF;
