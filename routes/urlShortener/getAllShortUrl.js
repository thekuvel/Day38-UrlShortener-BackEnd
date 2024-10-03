import express from "express"
import { shortUrlModel } from "../../db/model.js";

let getAllShortUrlRouter = express.Router();

getAllShortUrlRouter.post("/", async (req,res) => {
    let body = req.body;
    let shortUrlObjArray = await shortUrlModel.find({emailId:body.email})
    res.send({msg:"log url redirected", code:1, shortUrlObjArray});
})

export default getAllShortUrlRouter