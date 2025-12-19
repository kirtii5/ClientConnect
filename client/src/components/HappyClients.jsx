import { useEffect, useState } from "react";
import api from "../services/api";

export default function HappyClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api
      .get("/clients")
      .then((res) => setClients(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="Services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-4xl text-blue-500 font-medium mb-2">
            Happy Clients
          </p>
        </div>

        {/* Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client._id}
              className="border rounded p-6 bg-white flex flex-col h-full">
              {/* Avatar */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-sm text-center text-gray-600 flex-grow">
                {client.description}
              </p>

              {/* Footer (ALWAYS ALIGNED) */}
              <div className="mt-6">
                <h4 className="font-semibold text-blue-500">{client.name}</h4>
                <p className="text-sm text-gray-500">{client.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
