import emailjs from '@emailjs/browser'

/**
 * EmailJS is a service used to send mail from client-side code
 * See https://www.emailjs.com/docs/introduction/how-does-emailjs-work/
 * TEMPLATE_ID is the name of the template EmailJS uses to format the email you receive.
 * It can be configured in the EmailJS Interface
 */

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string)

interface SendEmailParams {
  subject: string,
  name?: string,
  message: string,
  email: string
}


export default function sendEmail({ subject, name, message, email }: SendEmailParams) {
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
console.log(serviceId)
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, 
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, 
    { subject, name, message, email })
    .catch(err => console.error('Error sending email:', err))
}
