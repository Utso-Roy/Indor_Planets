import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#14532d] text-white p-10">
      <aside>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="inline-block fill-current"
        >
          <path d="M22.672 15.226l-2.432.811..." />
        </svg>
        <p className="font-bold text-lg">
          GreenGhor Plant Shop
          <br />
          Naturally purifying homes since 2024
        </p>
        <p className="text-sm">© {new Date().getFullYear()} All rights reserved</p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-6">
          {/* Twitter */}
          <a href="#" className="hover:text-green-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M24 4.557c-..." />
            </svg>
          </a>

          {/* YouTube */}
          <a href="#" className="hover:text-green-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M19.615 3.184c..." />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" className="hover:text-green-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M9 8h-3v4h3v12..." />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
