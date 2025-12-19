import { useState } from "react";
import api from "../services/api";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      await api.post("/newsletter", { email });
      setEmail("");
      alert("Subscribed");
    } catch {
      alert("Failed");
    }
  };

  return (
    <div className="bg-blue-600 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Nav */}
        <div className="flex gap-6 text-white text-sm">
          <a href="#Home">Home</a>
          <a href="#Services">Services</a>
          <a href="#Projects">Projects</a>
          <a href="#Image">Testimonials</a>
          <a href="#Contact">Contact</a>
        </div>

        {/* Newsletter */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-white rounded overflow-hidden">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="px-4 py-2 text-sm text-black outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-blue-700 text-white px-4 py-2 text-sm font-medium">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
