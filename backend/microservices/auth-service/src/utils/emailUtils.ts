import MailService from '../integrations/mailService';
import Logger from './logger';

class EmailUtils {
  public static async sendVerificationEmail(email: string, verificationLink: string): Promise<void> {
    try {
      await MailService.send({
        to: email,
        subject: 'Email Verification',
        template: 'verification-email',
        data: { verificationLink },
      });
      Logger.info(`Verification email sent to ${email}`);
    } catch (error) {
      Logger.error(`Failed to send verification email: ${error}`);
      throw error;
    }
  }

  public static async sendPasswordResetEmail(email: string, resetLink: string): Promise<void> {
    try {
      await MailService.send({
        to: email,
        subject: 'Password Reset',
        template: 'password-reset-email',
        data: { resetLink },
      });
      Logger.info(`Password reset email sent to ${email}`);
    } catch (error) {
      Logger.error(`Failed to send password reset email: ${error}`);
      throw error;
    }
  }
}

export default EmailUtils;
