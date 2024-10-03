import express from "express";
import cors from "cors"
import registerRouter from "./routes/authentication/register.js";
import mongoDBconnect from "./db/mongooseConnect.js";
import loginRouter from "./routes/authentication/login.js";
import propertyRouter from "./routes/properties/propertyRouter.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import emailVerificationRouter from "./routes/authentication/passwordReset/emailVerificationRouter.js";
import updatePasswordRouter from "./routes/authentication/passwordReset/updatePassword.js";
import urlShortenerRouter from "./routes/urlShortener/urlShortener.js";
import getlongurlRouter from "./routes/urlShortener/getLongUrl.js";
import getAllShortUrlRouter from "./routes/urlShortener/getAllShortUrl.js";

dotenv.config();

await mongoDBconnect();

const server = express();

server.use(express.json())

server.use(cors());

let port = 8000;

server.get("/", (req,res) => {
    res.send("Buy Home Nest Backend")
})

//Middleware to authoeize API
function authorizeAPI(req,res,next){
    
    try {
        let token = req.headers.authorization;
        var decoded = jwt.verify(token, process.env.JWT_Key);
        // console.log(decoded);
        next()
      } catch(err) {
        // err
        res.status(403).send({msg:"Not authorised"})
      }
    
}

server.use("/login", loginRouter);
server.use("/register", registerRouter);
server.use("/property", authorizeAPI, propertyRouter);
server.use("/emailverification", emailVerificationRouter);
server.use("/updatepassword", updatePasswordRouter);
server.use("/urlshortener", urlShortenerRouter)
server.use("/getlongurl", getlongurlRouter)
server.use("/getallshorturl",getAllShortUrlRouter)

server.listen(port, () => {
    console.log("Server running on port: ",port);
});