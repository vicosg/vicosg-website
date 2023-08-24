const sgMail = require('@sendgrid/mail')
const sgClientMail = require('@sendgrid/mail')

export default async function(req, res) {
  
  const sengrid_api_key = process.env.SENDGRID_API_KEY
  
  sgMail.setApiKey(sengrid_api_key)
  sgClientMail.setApiKey(sengrid_api_key)

  const { name, lastname, email, phone, subject } = req.body

  const content = {
    to: 'goezrentalsllc@gmail.com',
    from: 'goezrentalsllc@gmail.com',
    subject: `${subject}`,
    text: name,
    html: `<p> <b>${name}</b> <b>${lastname}</b> has requested to subscribe or needs more information.</p>
    <hr>
  <table border="1">
    <tr>
      <td>
       <b>Name</b>
      </td>
      <td>
      <b>Lastname</b>
      </td>
      <td>
      <b>Mail</b>
      </td>
      <td>
      <b>Phone</b>
      </td>
    </tr>
    <tr>
      <td>
        ${name}
      </td>
      <td>
        ${lastname}
      </td>
      <td>
        ${email}
      </td>
      <td>
        ${phone}
      </td>
    </tr>
</table>`
  }

  const ClientContent = {
    to: `${email}`,
    from: 'goezrentalsllc@gmail.com',
    subject: `${name}, you have a message from Go! EZ Rentals - We work 24/7!`,
    text: name,
    html: `<p> <b>${name}</b>, you have requested to subscribe or you need more information about our services.</p>
    <p> Thank you for reaching out and expressing interest in our services at <b>Go! EZ Rentals</b> </p>
    <p> In case you would like to have more information, we are happy to arrange a call or text message for further queries you might have. </p> 
    <p> We look forward to start working with you! </p>
    <p> And remember, We work 24/7 for you! </p>
    `
  }

  // Send message to Company (Go! EZ Rentals) and Client
  try {
    console.log("Sending Go! EZ Rentals and Client Mails with SendGrid ...")
    await sgMail.send(content)
    await sgClientMail.send(ClientContent)
    res.status(200).send('Go! EZ Rentals & Client Message sent successfully.')

  } catch (error) {
    console.log("ERROR sending mails with SendGrid")
    console.log('ERROR', error)
    res.status(400).send('Go! EZ Rentals and Client Messages not sent.')
  }
}