import express from "express"
import qrcode from "qrcode"
import URL from "../models/url.js"
import ShortUniqueId from "short-unique-id"
const handleUrl = async (req, res) => {
    const uid = new ShortUniqueId({ length: 6 });
    let shrtId = uid.rnd()
    let qrCodeString;
    let { longUrlLink, custName } = req.body
    qrcode.toDataURL(longUrlLink, async (err, code) => {
        if (err) {
            qrCodeString = "";
console.log("err qrcode")
        } else {
        
            let data = await URL.create({
                name: custName,
                shortId: shrtId,
                redirectUrl: longUrlLink,
                createdBy: req.user._id,
                qrCode: code,
            })
           console.log(data)
        }
    })
   
 
    res.render("home", {
        shrtUrlId: shrtId
    })
}
let megha = "little"
export default { handleUrl }