import nodemailer from 'nodemailer';


export const sendEmail = async (req, res) => {
    const { name, email, message, contact } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,
        auth: {
            user: process.env.GOOGLE_CLIENT_USER, // Usando a variável de ambiente
            pass: process.env.GOOGLE_CLIENT_PASSWORD, // Usando a variável de ambiente
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.GOOGLE_CLIENT_USER, // Usando a variável de ambiente
        subject: 'Nova mensagem de contato',
        text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}\nContato: ${contact}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro ao enviar a mensagem.' });
    }
};
