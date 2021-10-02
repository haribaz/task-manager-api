const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'rahuljaya007@gmail.com',
    subject: 'Welcome to Task App',
    text: `Hey there ${name}. How are you doing today?`
  })
}

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'rahuljaya007@gmail.com',
    subject: 'Sad to see you leave',
    text: `Why did you choose to opt out ${name}`
  })
}
module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
}
