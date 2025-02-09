"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 text-center text-xs text-neutral-600">
      <div className="flex justify-center space-x-4 mb-2">
        <span className="cursor-pointer">About us</span>
        <span className="cursor-pointer">Help</span>
        <span className="cursor-pointer">Contact</span>
      </div>
      <div className="flex justify-center space-x-4 mb-6">
        <span className="cursor-pointer">Legal Notice</span>
        <span className="cursor-pointer">Terms of use</span>
        <span className="cursor-pointer">Privacy Policy</span>
        <span className="cursor-pointer">Privacy Settings</span>
      </div>
      <div className="py-2 bg-primary-200 w-full text-primary-700">
        © {currentYear} Geek Software GmbH — WE love PDF
      </div>
    </footer>
  );
};

export default Footer;
