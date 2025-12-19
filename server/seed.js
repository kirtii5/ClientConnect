import mongoose from "mongoose";
import dotenv from "dotenv";

import Project from "./models/Project.js";
import Client from "./models/Client.js";
import Contact from "./models/Contact.js";
import Subscriber from "./models/Subscriber.js";

dotenv.config();

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding");
};

const seedData = async () => {
    try {
        await connectDB();

        // Clear existing data
        await Project.deleteMany();
        await Client.deleteMany();
        await Contact.deleteMany();
        await Subscriber.deleteMany();

        // ---------------- PROJECTS ----------------
        await Project.insertMany([
            {
                name: "Website Redesign",
                description:
                    "A modern corporate website redesign focused on improved UI, accessibility, and performance.",
                image:
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=250&q=80"
            },
            {
                name: "E-Commerce Platform",
                description:
                    "A scalable e-commerce platform with product management, secure checkout, and admin controls.",
                image:
                    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&h=250&q=80"
            },
            {
                name: "Admin Dashboard",
                description:
                    "An intuitive admin dashboard to manage users, analytics, and reports efficiently.",
                image:
                    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&h=250&q=80"
            }
        ]);

        // ---------------- CLIENTS ----------------
        await Client.insertMany([
            {
                name: "John Doe",
                description:
                    "The team delivered exceptional results on time. Communication and quality were top-notch.",
                designation: "CEO",
                image:
                    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=150&h=150&q=80"
            },
            {
                name: "Sarah Williams",
                description:
                    "Highly professional team with great attention to detail. Would definitely work again.",
                designation: "Product Manager",
                image:
                    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&h=150&q=80"
            },
            {
                name: "Amit Sharma",
                description:
                    "Reliable, efficient, and skilled developers. The project exceeded expectations.",
                designation: "Founder",
                image:
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
            }
        ]);

        // ---------------- CONTACTS ----------------
        await Contact.insertMany([
            {
                name: "Rahul Verma",
                email: "rahul.verma@example.com",
                mobile: "9876543210",
                city: "Indore"
            },
            {
                name: "Neha Singh",
                email: "neha.singh@example.com",
                mobile: "9123456789",
                city: "Bhopal"
            }
        ]);

        // ---------------- SUBSCRIBERS ----------------
        await Subscriber.insertMany([
            { email: "subscriber1@example.com" },
            { email: "subscriber2@example.com" }
        ]);

        console.log("Database seeded successfully");
        process.exit();
    } catch (error) {
        console.error("Seeding failed:", error);
        process.exit(1);
    }
};

seedData();
