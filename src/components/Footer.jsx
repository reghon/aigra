import React from "react";
import { Wheat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Logo + Nama */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br rounded-xl flex items-center justify-center">
            <img src="/src/img/logoputih.png" alt="" />
          </div>
          <span className="text-2xl font-bold">Aigra</span>
        </div>

        {/* Kontak */}
        <div className="text-center text-gray-300 space-y-1">
          <p>
            Email:{" "}
            <a href="mailto:aigraindonesia@gmail.com" className="hover:text-green-400 transition-colors">
              aigraindonesia@gmail.com
            </a>
          </p>
          <p>
            HP:{" "}
            <a href="tel:085771480820" className="hover:text-green-400 transition-colors">
              0857 7148 0820
            </a>
          </p>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-4">© 2025 Aigra. Semua hak cipta dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
