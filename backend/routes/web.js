import express from "express"
import signup from "../controllers/signup.js";
import signin from "../controllers/signin.js"
import qrgenerator from "../controllers/qrgeneratorcontroller.js"
import qrscan from "../controllers/qrscancontroller.js";
const router=express.Router();


router.post("/signup",signup)
router.post("/signin",signin)
router.post("/qrcodegenerator",qrgenerator)
router.post("/qrscanner",qrscan)

export default router;