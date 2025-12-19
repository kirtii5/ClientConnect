import { useEffect, useState } from "react";
import api from "../services/api";

export default function OurProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get("/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="Projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-4xl text-blue-500 font-medium mb-2">
            Our Projects
          </p>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            A glimpse of our recently completed real estate and consulting
            projects delivered with precision and care.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="border rounded bg-white flex flex-col h-full">
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h4 className="font-bold mb-2 text-blue-500">{project.name}</h4>

                {/* FIXED HEIGHT DESCRIPTION */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* BUTTON LOCKED */}
                <button className="mt-auto self-start bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-4 py-2 rounded transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
