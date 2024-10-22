import express from "express";
import route from "./routes/url.js";
import mongoose from "mongoose"
import URL from "./models/url.js";
import router from "./routes/auth.js";
import cookieParser from "cookie-parser";
import restrictToLoggedInOnly from "./middleware/auth.js";
import user_schema from "./models/user.js";
import checkAuth from "./middleware/checkAuth.js";
import staticRouter from "./routes/staticRoute.js";
import delRoute from "./routes/urlDelete.js";
import logOutRouter from "./routes/logout.js";
const app = express()
export const PORT = 3000;
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/url", restrictToLoggedInOnly, route)
app.set("view engine", "ejs")
app.use("/delUrl",delRoute)
app.use("/logOut", logOutRouter)
mongoose.connect("mongodb+srv://prem:lilurl@lilurl.t4nzr.mongodb.net/lilUrl").then(data => {
    console.log("connected")
})

app.use("/user", router)
app.get("/", restrictToLoggedInOnly, staticRouter)
app.get("/lil/:sId",async (req,res)=>{
    let id = req.params.sId;
let urlData = await URL.findOne({shortId:id})
if(!urlData) return res.send("404 NOT FOUND")
let redirectLink = urlData.redirectUrl   
console.log(redirectLink) 
if(!redirectLink.includes("https://")){
    console.log("enterinuvgVFD");
    
    redirectLink = `https://${redirectLink}`
}
console.log(redirectLink)
return res.redirect(`${redirectLink}`)     
})

app.get("/yourLink", checkAuth, async (req, res) => {
    let liData = await URL.find({ createdBy: req.user._id })
    console.log("creationData");
    console.log(liData)
    return res.render("yourLink", {
        data: liData,
    })
    // console.log(liData)
})


app.get("/signup", (req, res) => {
    res.render("signUp", {
        err: false
    })
})
app.get("/login", (req, res) => {
    res.render("login", {
        logSuccess: false
    })
})
app.get("/profile", checkAuth, (req, res) => {
    let userDataInfo = req.user
    req.user
    res.render("profile", {
        userInfo: userDataInfo
    })
})
async function clearData() {
    let urlData = await URL.deleteMany({})
    let userData = await user_schema.deleteMany({})
    console.log("urlData");
    console.log(urlData);
    console.log("userData");
    console.log(userData);

}
// clearData()
app.listen(PORT, () => {
    console.log(`server running in port: ${PORT}`)
})