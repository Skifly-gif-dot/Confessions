import { sendEmail } from '../services/emailService';

const emailWorker = async (emailData) => {
    try {
        await sendEmail(emailData);
        console.log('Email sent successfully:', emailData);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export default emailWorker;