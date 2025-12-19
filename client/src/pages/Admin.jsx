import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Admin() {
  /* ===================== STATE ===================== */
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  const [projectForm, setProjectForm] = useState({
    name: "",
    description: "",
    image: null,
  });

  const [clientForm, setClientForm] = useState({
    name: "",
    designation: "",
    description: "",
    image: null,
  });

  /* ===================== FETCH ALL ===================== */
  const fetchAll = async () => {
    try {
      const [p, c, ct, s] = await Promise.all([
        api.get("/projects"),
        api.get("/clients"),
        api.get("/contact"),
        api.get("/newsletter"),
      ]);

      setProjects(p.data);
      setClients(c.data);
      setContacts(ct.data);
      setSubscribers(s.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  /* ===================== SUBMIT HANDLERS ===================== */
  const addProject = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      Object.entries(projectForm).forEach(([k, v]) => fd.append(k, v));
      await api.post("/projects", fd);
      setProjectForm({ name: "", description: "", image: null });
      fetchAll();
      alert("Project added");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add project");
    }
  };

  const addClient = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      Object.entries(clientForm).forEach(([k, v]) => fd.append(k, v));
      await api.post("/clients", fd);
      setClientForm({
        name: "",
        designation: "",
        description: "",
        image: null,
      });
      fetchAll();
      alert("Client added");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add client");
    }
  };

  const input =
    "w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  /* ===================== UI ===================== */
  return (
    <div className="min-h-screen bg-[#f2f5fc] py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-700">
              Admin Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage projects, clients & website activity
            </p>
          </div>

          {/* HOME BUTTON */}
          <Link
            to="/"
            className="flex items-center gap-2 bg-white border border-blue-200 text-blue-700 px-4 py-2 rounded-lg shadow-sm hover:bg-blue-50 transition text-sm">
            {/* Home Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 21V12h6v9"
              />
            </svg>
            Home
          </Link>
        </div>

        {/* FORMS */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* PROJECT FORM */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-blue-800 mb-6">
              Add Project
            </h2>
            <form onSubmit={addProject} className="space-y-4">
              <input
                className={input}
                placeholder="Project Name"
                value={projectForm.name}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, name: e.target.value })
                }
                required
              />
              <textarea
                className={input}
                rows={3}
                placeholder="Project Description"
                value={projectForm.description}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    description: e.target.value,
                  })
                }
                required
              />
              <input
                type="file"
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    image: e.target.files[0],
                  })
                }
                required
              />
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded text-sm">
                Add Project
              </button>
            </form>
          </div>

          {/* CLIENT FORM */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-blue-800 mb-6">
              Add Client
            </h2>
            <form onSubmit={addClient} className="space-y-4">
              <input
                className={input}
                placeholder="Client Name"
                value={clientForm.name}
                onChange={(e) =>
                  setClientForm({ ...clientForm, name: e.target.value })
                }
                required
              />
              <input
                className={input}
                placeholder="Designation"
                value={clientForm.designation}
                onChange={(e) =>
                  setClientForm({
                    ...clientForm,
                    designation: e.target.value,
                  })
                }
                required
              />
              <textarea
                className={input}
                rows={3}
                placeholder="Client Description"
                value={clientForm.description}
                onChange={(e) =>
                  setClientForm({
                    ...clientForm,
                    description: e.target.value,
                  })
                }
                required
              />
              <input
                type="file"
                onChange={(e) =>
                  setClientForm({
                    ...clientForm,
                    image: e.target.files[0],
                  })
                }
                required
              />
              <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded text-sm">
                Add Client
              </button>
            </form>
          </div>
        </div>

        {/* CONTACTS */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg font-semibold text-blue-800 mb-4">
            Contact Submissions
          </h2>

          {/* IMPORTANT: overflow wrapper */}
          <div className="relative -mx-4 sm:mx-0 overflow-x-auto">
            <table className="min-w-[640px] w-full text-sm border-collapse">
              <thead className="bg-blue-50 text-blue-900">
                <tr>
                  <th className="px-4 py-2 text-left font-medium">Name</th>
                  <th className="px-4 py-2 text-left font-medium">Email</th>
                  <th className="px-4 py-2 text-left font-medium">Mobile</th>
                  <th className="px-4 py-2 text-left font-medium">City</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((c) => (
                  <tr key={c._id} className="border-t">
                    <td className="px-4 py-2 whitespace-nowrap">{c.name}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{c.email}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{c.mobile}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{c.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SUBSCRIBERS */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-blue-800 mb-4">
            Newsletter Subscribers
          </h2>
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
            {subscribers.map((s) => (
              <li key={s._id}>{s.email}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
