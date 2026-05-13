"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Por favor, completa todos los campos.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Buey Sherpa <contacto@bueysherpa.com>', // Ahora usando tu dominio verificado
      to: ['hola@bueysherpa.com'],
      subject: `Nueva expedición: ${name}`,
      replyTo: email,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      return { error: 'Error de Resend: ' + error.message };
    }

    return { success: true };
  } catch (err) {
    return { error: 'Error inesperado al enviar el correo.' };
  }
}
