import { useState } from "react";
import api from "../services/api";

export default function BottomCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      await api.post("/newsletter", { email });
      alert("Subscribed successfully");
      setEmail("");
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <section
      className="relative bg-cover bg-center py-32 text-white"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/1200x/67/3b/30/673b30c05e2959b4dcd3d3827fdd4bbd.jpg)",
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Learn more about our listing process, as well as our additional
          staging and design work.
        </h2>

        <button className="bg-white text-blue-900 px-8 py-3 text-sm font-semibold rounded">
          LEARN MORE
        </button>
      </div>
    </section>
  );
}
