const sgMail = require('@sendgrid/mail')
const sgClientMail = require('@sendgrid/mail')

export default async function(req, res) {
  
  const sengrid_api_key = process.env.SENDGRID_API_KEY
  
  sgMail.setApiKey(sengrid_api_key)
  sgClientMail.setApiKey(sengrid_api_key)

  const { name, lastname, email, phone } = req.body

  console.log("MIREMOS")
  console.log(name)

  const content = {
    to: 'vicosgvip@gmail.com',
    from: 'vicosgvip@gmail.com',
    subject: `${name}, is interested in subscribing to a plan`,
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
    from: 'vicosgvip@gmail.com',
    subject: `${name}, you have a message from VICOSG Online Coaching`,
    text: name,
    html: `<p> <b>${name}</b>, you have requested to subscribe or you need more information about our services.</p>
    <p> Thank you for reaching out and expressing interest in our services at <b>VICOSG</b> </p>
    <p> In case you would like to have more information, we are happy to arrange a call or text message for further queries you might have. </p> 
    <p> We look forward to start working with you! </p>
    <p> And remember, We work 24/7 for you! </p>
    `
  }

  // Send message to Company (VICOSG) and Client
  try {
    console.log(content)
    console.log("Sending VICOSG and Client Mails with SendGrid ...")
    await sgMail.send(content)
    await sgClientMail.send(ClientContent)
    res.status(200).send('VICOSG & Client Message sent successfully.')

  } catch (error) {
    console.log
    console.log("ERROR sending mails with SendGrid")
    console.log('ERROR', error)
    res.status(400).send('VICOSG and Client Messages not sent.')
  }
}