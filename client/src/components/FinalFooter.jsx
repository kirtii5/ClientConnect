import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#17223b] py-4 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto p-5 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400">© 2025 All Rights Reserved</p>

        <div className="text-white text-xl font-bold tracking-wide">
          Client Connect
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
