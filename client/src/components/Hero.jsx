import { useState } from "react";
import api from "../services/api";

export default function Hero() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/contact", form);
      alert("Thank you! We will contact you soon.");

      setForm({
        name: "",
        email: "",
        mobile: "",
        city: "",
      });
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || "Submission failed");
    }
  };

  return (
    <section className="relative w-full">
      {/* Background */}
      <div
        id="Home"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.smartbugmedia.com/hs-fs/hubfs/How%20to%20Run%20an%20Effective%20Sales%20and%20Marketing%20Alignment%20Meeting%20.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center text-white">
        {/* Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Consultation,
            <br />
            Design & Marketing
          </h1>
          <p className="text-sm max-w-md">
            Helping businesses grow through strategic planning, creative design,
            and effective marketing solutions.
          </p>
        </div>

        {/* Form */}
        <div className="bg-[#3f4b77] p-6 rounded shadow-md max-w-sm">
          <h3 className="text-lg font-semibold mb-4">
            Get a Free Consultation
          </h3>

          <form id="Contact" onSubmit={handleSubmit} className="space-y-3">
            <input
              className="w-full px-3 py-2 text-sm text-black"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              className="w-full px-3 py-2 text-sm text-black"
              placeholder="Email Address"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              className="w-full px-3 py-2 text-sm text-black"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              required
            />
            <input
              className="w-full px-3 py-2 text-sm text-black"
              placeholder="Area, City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              required
            />

            <button className="w-full bg-orange-500 py-2 text-sm font-medium">
              Get Quick Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
