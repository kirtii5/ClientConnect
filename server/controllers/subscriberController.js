import Subscriber from "../models/Subscriber.js";

export const addSubscriber = async (req, res) => {
    try {
        const subscriber = await Subscriber.create(req.body);
        res.status(201).json(subscriber);
    } catch (error) {
        res.status(500).json({ message: "Subscription failed" });
    }
};

export const getSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find().sort({ createdAt: -1 });
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch subscribers" });
    }
};
