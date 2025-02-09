import { Sliders, Star, Monitor, Cloud, Lock, Crop } from "lucide-react";

export const platforms = ["Windows", "Linux", "MAC", "iPhone", "Android"];

export const infoCards = [
  {
    title: "How to compress PDF files",
    description:
      "Select your PDF files which you would like to compress or drop them into the file box and start the compression. A few seconds later you can download your compressed PDF files.",
    icon: <Crop size={24} className="text-blue-500" />,
  },
  {
    title: "Adjustable quality",
    description:
      "You can adjust the compression quality so that you can tune the compression algorithm in order to get a perfect result. PDF files with images can be compressed better than PDF files with text only.",
    icon: <Sliders size={24} className="text-blue-500" />,
  },
  {
    title: "Easy to use",
    description:
      "PDF24 makes it as easy and fast as possible for you to compress your files. You don’t need to install any software, you only have to select your files and start the compression.",
    icon: <Star size={24} className="text-blue-500" />,
  },
  {
    title: "Runs on your system",
    description:
      "The compression tool does not need any special system in order to compress your PDF files. The app is browser-based and works under all operating systems.",
    icon: <Monitor size={24} className="text-blue-500" />,
  },
  {
    title: "No installation required",
    description:
      "You do not need to download and install any software. PDF files are compressed in the cloud on our servers. The app does not consume your system resources.",
    icon: <Cloud size={24} className="text-blue-500" />,
  },
  {
    title: "Secure online compression",
    description:
      "The compression tool does not keep your files longer than necessary on our server. Your files and results will be deleted from our server after a short period of time.",
    icon: <Lock size={24} className="text-blue-500" />,
  },
];

export const tools = [
  [
    "Merge PDF",
    "Split PDF",
    "Compress PDF",
    "Edit PDF",
    "Sign PDF",
    "PDF Converter",
    "Convert to PDF",
  ],
  [
    "Images to PDF",
    "PDF to Images",
    "Extract PDF Images",
    "Protect PDF",
    "Unlock PDF",
    "Rotate PDF pages",
    "Remove PDF pages",
  ],
  [
    "Extract PDF pages",
    "Sort PDF pages",
    "Webpage to PDF",
    "Create PDF job application",
    "Create PDF with camera",
    "PDF OCR",
    "Add watermark",
  ],
  [
    "Add page numbers",
    "View as PDF",
    "PDF Overlay",
    "Compare PDFs",
    "Web optimize PDF",
    "Annotate PDF",
    "Redact PDF",
  ],
  [
    "Create PDF",
    "PDF 24 Creator",
    "PDF Printer",
    "PDF Reader",
    "Create invoice",
    "Remove PDF metadata",
    "Flatten PDF",
  ],
  ["Crop PDF"],
];

export const reviewItems = ["Free", "Online", "No Limits"];
