import user_schema from "../models/user.js";
import funCarr from "../services/auth.js";
let getUserFunc = funCarr[1]
async function restrictToLoggedInOnly(req,res,next) {
    let uidFromCookies = req.cookies.uid;
    if(!uidFromCookies) return res.redirect("/login")
    let user = getUserFunc(uidFromCookies) 
    if(!user) return res.redirect("/login")
    req.user = user; 
    console.log(req.user)
    next()
    
}


export default restrictToLoggedInOnly