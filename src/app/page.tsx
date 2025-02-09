import RatingBar from "@/components/RatingBar";
import Navbar from "@/components/Navbar";
import InformationSection from "@/components/InformationSection";
import FAQItem from "@/components/FAQItem";
import Footer from "@/components/Footer";
import Tools from "@/components/Tools";
import CompressPDF from "@/components/CompressPDF";

export default function Home() {
  return (
    <>
      <Navbar />
      <RatingBar />
      <CompressPDF />
      <InformationSection />
      <FAQItem />
      <Tools />
      <Footer />
    </>
  );
}
