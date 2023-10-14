import express from 'express';
import { sendEmail } from "../controller/emailController.js"

const router = express.Router();

router.post("/sendemail", sendEmail);

export default router;
