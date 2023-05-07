const { InvitationEmail } = require("../config/mails");
const { Enterprise, Employee, Invitation } = require("../models");
const nodeMailer = require("nodemailer");

const enterpriseController = {
  inviteEmployee: async (req, res) => {
    try {
      const { id } = req.params;
      const { email } = req.body;
      const enterprise = await Enterprise.findById(id);
  
      if (!enterprise) {
        return res.status(404).send({
          status: false,
          message: "Enterprise not found.",
        });
      }


      const employeeExist = await Employee.findOne({email: email})
      const enterpriseExist = await Enterprise.findOne({email: email})

      if (employeeExist || enterpriseExist) {
        return res.status(400).send({
          status: false,
          message:
            "This email already have an account.",
        }); 
      }

      const invitationExist = Invitation.findOne({enterprise: enterprise._id, employeeEmail: email})

      if (invitationExist) {
        return res.status(400).send({
          status: false,
          message:
            "An invitation already exists for this email.",
        }); 
      }

      if (enterprise.employees.length <= 2) { //TODO: agregar limite de usuarios por empresa
        const transporter = await nodeMailer.createTransport({
          host: process.env.MAIL_HOST,
          port: process.env.MAIL_PORT,
          secure: true,
          auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });
  
        let url = `${process.env.FRONTEND_URL}/#/enterprise_invitation/${enterprise._id}?invitated_mail=${email}`;
  
        const mailMessage = InvitationEmail("", "You have been invited!",
        `Hello, you have been invited to join a enterprise!`, "Click below to start registration.", url, enterprise.name, 'ERP APP')
  
        const mailOptions = {
          from: `ERP <${process.env.MAIL_USERNAME}>`,
          to: email,
          subject: "Join enterprise",
          html: mailMessage
        };
  
        transporter.sendMail(mailOptions, async (error, info) => {
          if (error) {
            console.log(error);
            return res.status(500).send({
              status: false,
              message: "Error sending email.",
            });
          }
  
          const newInvitation = new Invitation({
            enterprise: id,
            memberEmail: email,
          });
  
          await newInvitation.save();
  
          return res.status(200).send({
            status: true,
            message: "Invitation sent successfully.",
          });
        });
      } else {
        return res.status(400).send({
          status: false,
          message:
            "You have exceeded the limit of allowed employees",
        });
      }
    } catch (error) {
      res.status(500).send({
        status: false,
        message: error.message,
      });
    }
  },
};

module.exports = enterpriseController;
