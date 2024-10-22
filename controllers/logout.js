const logout = (req,res)=>{
    res.clearCookie("uid")
    res.redirect("/")
}

export default logout