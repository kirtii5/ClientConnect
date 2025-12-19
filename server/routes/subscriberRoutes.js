import express from "express";
import { addSubscriber, getSubscribers } from "../controllers/subscriberController.js";

const router = express.Router();

router.post("/", addSubscriber);
router.get("/", getSubscribers);

export default router;
