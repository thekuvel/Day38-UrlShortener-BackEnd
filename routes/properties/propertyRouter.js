import express from "express";
import {propertyModel} from "../../db/model.js"

const propertyRouter = express.Router();

propertyRouter.get("/", async (req,res) => {
    let body = req.body;

    let allProperties = await propertyModel.find({});

    res.send(allProperties);
});

export default propertyRouter