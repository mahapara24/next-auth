import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //TODO: configure mail for
    const transport = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });
    const mailOptions = {
      from: "", // sender address
      to: email, // list of receivers
      subject:
        emailType === "VERIFY"
          ? "Verify your email address"
          : "Reset your password",
      html: "<b>Hello world?</b>", // html body
    };
    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
