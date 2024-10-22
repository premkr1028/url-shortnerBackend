import express from "express";
import { v4 as uuidv4 } from 'uuid';
import user_schema from "../models/user.js";
import funCarr from "../services/auth.js"
import { Error } from "mongoose";
let [setUserId, getUserId] = funCarr
const handleSignUp = async (req, res) => {

    let { userName, email, password } = req.body;
    let user = await user_schema.find({ email })
    if (user.length != 0) {
        console.log("again")
        return res.render("signUp", {
            err: "Email already available"
        })
    }

    let userData = await user_schema.create({
        userName,
        email,
        password
    })
    console.log(userData);
    res.render("login", {
        logSuccess: true
    })

}
const handleLogIn = async (req, res) => {
    let { email, password } = req.body;
    let user = await user_schema.findOne({ email, password })
    console.log(user)
    if (!user) {
        return res.redirect("/login")
    }

    let sessionId = uuidv4()
    setUserId(sessionId, user)

    res.cookie("uid", sessionId)
    console.log("logDone")
    return res.redirect("/")
}
let authArr = [handleSignUp, handleLogIn]
export default authArr