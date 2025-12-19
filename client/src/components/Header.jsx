import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="Home" className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl text-blue-500 font-bold">Client Connect</div>

        {/* Navigation (hash links for sections only) */}
        <nav className="hidden md:flex text-blue-800 space-x-8 text-sm font-medium">
          <a href="#Home">Home</a>
          <a href="#Services">Services</a>
          <a href="#Projects">Projects</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
        </nav>

        {/* Admin Button (Router navigation) */}
        <Link
          to="/admin"
          className="bg-orange-500 text-white px-5 py-2 text-sm rounded hover:bg-orange-600 transition">
          Get Started
        </Link>
      </div>
    </header>
  );
}
