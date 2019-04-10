const nodemailer = require('nodemailer');
require('dotenv').config();

const { EMAIL_USER, EMAIL_PASSWORD } = process.env;
const contact = ({ body }, res) => {
  console.log(body);
  nodemailer.createTestAccount((err, account) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.googlemail.com', // Gmail Host
      port: 465, // Port
      secure: true, // this is true as port is 465
      auth: {
        user: EMAIL_USER, // Gmail username
        pass: EMAIL_PASSWORD, // Gmail password
      },
    });

    const mailOptions = {
      from: body.email,
      to: EMAIL_USER, // Recepient email address. Multiple emails can send separated by commas
      subject: body.subject,
      text: `Nome: ${body.name}, mensagem: ${body.message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      let message = 'Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.';
      if (error) {
        message = 'Ocorreu um erro ao tentar enviar sua mensage, por favor tente novamente em alguns minutos.';
  		}
  		res.send({ message });
    });
  });
};

module.exports = {
  contact,
};
