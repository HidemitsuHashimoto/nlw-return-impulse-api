import nodemailer from 'nodemailer'
import { IMailAdapter, ISendMailData } from "../mail-adatpter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ee61f04d9df334",
    pass: "54612292078a15"
  }
});

export class NodeMailerAdapter implements IMailAdapter {
  async sendMail({ subject, body }: ISendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Hide <bata@gmail.com>',
      subject: subject,
      html: body,
    })
  }
}