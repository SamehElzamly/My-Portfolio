import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#0a1128]/10 border-l-transparent border-r-transparent text-[#0a1128] bg-[#fefcfb]">
      <div className="container p-12 flex items-center justify-between">
        <img
          src="/images/logo.png"
          alt="Sameh Elzamly Logo"
          className="h-10 w-auto"
        />
        <p className="text-[#0a1128]/60">
          &copy; {new Date().getFullYear()} Sameh Elzamly. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;