import express from "express"
import URL from "../models/url.js"

const deleteUrl =  async (req, res)=> {
    let urlShortId = req.params.shId
        console.log(urlShortId)
        let urlData = await URL.findOneAndDelete({shortId:urlShortId})
        res.redirect("/yourLink")
}
export default deleteUrl