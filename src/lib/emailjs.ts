import emailjs from '@emailjs/browser'
import type { ContactFormData } from '../types'

export async function sendContactEmail(payload: ContactFormData): Promise<void> {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: payload.from_name,
      from_email: payload.from_email,
      subject: payload.subject,
      message: payload.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  )
}
