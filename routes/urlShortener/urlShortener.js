import express from "express";
import { shortUrlModel } from "../../db/model.js";

let urlShortenerRouter = express.Router();

urlShortenerRouter.post("/", async (req,res) => {
    let body = req.body;
    // console.log(body);

    let shortUrl = Date.now().toString();

    let newShortUrl = await new shortUrlModel({
        emailId : body.email,
        longUrl : body.longUrl,
        shortUrl : shortUrl
    });

    await newShortUrl.save();

    res.send({msg:"Short url generated successfully", code : 1, shortUrl})
})

export default urlShortenerRouter