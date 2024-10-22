import express from "express";
import logout from "../controllers/logout.js";
const logOutRouter = express.Router()
logOutRouter.post("/", logout)
export default logOutRouter