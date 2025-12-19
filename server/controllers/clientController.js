import Client from "../models/Client.js";
import cloudinary from "../config/cloudinary.js";

export const addClient = async (req, res) => {
    try {
        const { name, designation, description } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const uploadResult = await cloudinary.uploader.upload(
            `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
            { folder: "clientconnect/clients" }
        );

        const client = await Client.create({
            name,
            designation,
            description, // ⚠️ REQUIRED BY SCHEMA
            image: uploadResult.secure_url,
        });

        res.status(201).json(client);

    } catch (error) {
        console.error("ADD CLIENT ERROR:", error);
        res.status(500).json({ message: error.message });
    }
};


export const getClients = async (req, res) => {
    try {
        const clients = await Client.find().sort({ createdAt: -1 });
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch clients" });
    }
};
