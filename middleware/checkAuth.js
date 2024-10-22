import funCarr from "../services/auth.js";
let getUserFunc = funCarr[1]
async function checkAuth(req,res,next) {
    let uidFromCookies = req.cookies.uid;
    let user = getUserFunc(uidFromCookies) 
    req.user = user; 
    next()
    
}

export default checkAuth