import express from "express"
import  routeObject   from "../controllers/url.js";
const route = express.Router()
route.post("/", routeObject["handleUrl"])
export default route
