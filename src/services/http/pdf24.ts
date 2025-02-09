import {
  JobResponse,
  JobStatus,
  CompressionPayload,
} from "@/types/index.types";
import axios, { AxiosInstance } from "axios";

export const pdfAPI: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postUploadPDF = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await pdfAPI.post("?action=upload", formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const compressPDF = async (payload: CompressionPayload) => {
  try {
    const response = await pdfAPI.post<JobResponse>(
      `?action=compressPdf`,
      payload,
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      }
    );

    return response.data.jobId;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const checkJobStatus = async (jobId: string) => {
  try {
    const response = await pdfAPI.get<JobStatus>(
      `?action=getStatus&jobId=${jobId}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const downloadFile = async (jobId: string) => {
  try {
    const response = await pdfAPI.get(
      `?mode=download&action=downloadJobResult&jobId=${jobId}`,
      {
        withCredentials: true,
        responseType: "blob",
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
