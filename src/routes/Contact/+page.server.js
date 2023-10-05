import { BREVO_API_KEY, MAILER_EMAIL } from '$env/static/private';
import SibApiV3Sdk from 'sib-api-v3-sdk';


export function load() {
  const pageData = {
    name: 'Page de contact',
    apiKey: BREVO_API_KEY, 

  };

  return {
    context: {
      page: pageData,
    },
  };
}

export const actions = {
  default: async ({ request }) => {
    const data = new URLSearchParams(await request.text());
    console.log(data);

    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = BREVO_API_KEY;
    if (!name || !email || !message) {
  return {
    status: 400,
    body: { status: "verifiez le form, une erruer s'est produit !" }
  };
}

    const api = new SibApiV3Sdk.TransactionalEmailsApi();

    const sendContactMessage = async () => {
      const mailOptions = {
        sender: { email: email, name: name },
        subject: name,
        htmlContent: message,
        to: [{ email: MAILER_EMAIL }],
      };

      try {
        const responseData = await api.sendTransacEmail(mailOptions);
        console.log(responseData);
        console.log('Votre message a été envoyé avec succès.');

       
      } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
      }
    };

    await sendContactMessage();

  
  },
}
