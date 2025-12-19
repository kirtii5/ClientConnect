import { useState } from "react";
import api from "../services/api";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const submit = async () => {
    await api.post("/newsletter", { email });
    alert("Subscribed");
  };

  return (
    <div className="max-w-md">
      <input
        placeholder="Email"
        className="border p-2 w-full mb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={submit} className="bg-black text-white px-4 py-2">
        Subscribe
      </button>
    </div>
  );
}
