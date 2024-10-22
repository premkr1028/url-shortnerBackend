import express from "express";
import authArr from "../controllers/auth.js";
const router = express.Router()
router.post("/",authArr[0])
router.post("/login", authArr[1])
export default router