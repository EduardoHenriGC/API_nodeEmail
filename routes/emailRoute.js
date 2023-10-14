import express from 'express';
import { sendEmail } from "../controller/emailController.js"

const router = express.Router();

router.get('/sendemail', (req, res) => {
    res.json({
        message: 'Bem vindo.. API NodeEmail- 👋🌎🌍🌏',
    });
});

router.post("/sendemail", sendEmail);

export default router;
