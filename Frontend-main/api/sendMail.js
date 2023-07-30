import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  const { email } = req.body;

  const msg = {
    to: "justin@arcusbtc.com",
    from: "justin@arcusbtc.com",
    subject: `New Subscriber - ${email}`,
    text: `Congrats! You have a new early access subscriber with the email ${email}!`,
    html: `<p style="font-size: 24px; color: black; font-weight: bold;">Congrats! You have a new <span style="color: orange;">early access subscriber</span> with the email <span style="color: blue;">${email}</span>.</p>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).send("Message sent successfully.");
    })
    .catch((error) => {
      console.log("ERROR", error);
      console.error(error.response.body);
      res.status(400).send(`Message not sent. ${error.message}`);
    });
}
