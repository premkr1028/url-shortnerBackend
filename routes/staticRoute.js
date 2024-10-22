import express from "express";
import Window from "window"
import { PORT } from "../index.js";
const staticRouter = express.Router()
const window = new Window
staticRouter.get("/",(req,res)=>{
    // console.log(window.location.href);
    
    res.render("home",{
        shrtUrlId : null
    })
})
export default staticRouter