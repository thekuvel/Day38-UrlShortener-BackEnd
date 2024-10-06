import express from "express"
import { shortUrlModel } from "../../db/model.js";

let getlongurlRouter = express.Router();

getlongurlRouter.post("/", async (req,res) => {
    let body = req.body;
    // console.log(body)
    // let shortUrlObj = await shortUrlModel.findOne({emailId:body.email, shortUrl:body.shortUrl})
    let shortUrlObj = await shortUrlModel.findOne({shortUrl:body.shortUrl})
    // console.log(shortUrlObj)
    res.send({msg:"log url redirected", code:1, longUrl : shortUrlObj.longUrl});

    await shortUrlModel.updateOne(
        // {emailId:body.email, shortUrl:body.shortUrl},
        {shortUrl:body.shortUrl},
        {
            $set: {hitCount : shortUrlObj.hitCount+1}
        }
    )

})

export default getlongurlRouter