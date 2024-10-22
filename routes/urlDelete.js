import express from "express"
import deleteUrl from "../controllers/deleteUrl.js";
const delRoute = express.Router()
delRoute.post("/:shId",deleteUrl)
export default delRoute
