import Project from "../models/Project.js";
import cloudinary from "../config/cloudinary.js";

// ADD PROJECT
export const addProject = async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const uploadResult = await cloudinary.uploader.upload(
            `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
            { folder: "clientconnect/projects" }
        );

        const project = await Project.create({
            name,
            description,
            image: uploadResult.secure_url,
        });

        res.status(201).json(project);

    } catch (error) {
        console.error("ADD PROJECT ERROR:", error);
        res.status(500).json({ message: error.message });
    }
};


// GET PROJECTS
export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch projects" });
    }
};
