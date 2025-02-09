import { GlobalWorkerOptions, getDocument } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

export const generatePreview = async (file: File) => {
  try {
    const fileData = await file.arrayBuffer();
    const pdf = await getDocument({ data: fileData }).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 1 });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Canvas context not available");

    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvasContext: context, viewport }).promise;

    return canvas.toDataURL("image/png");
  } catch (error) {
    console.error("Preview Generation Error:", error);
    return "";
  }
};
