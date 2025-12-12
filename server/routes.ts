import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertContactInquirySchema } from "@shared/schema";
import sgMail from "@sendgrid/mail";

const CONTACT_RECIPIENTS = [
  "hello.gitltz@gmail.com",
  "sid@gammainternationaltz.com",
  "vijay@gammainternationaltz.com",
  "Himanshu@gammainternationaltz.com",
  "info@gammainternationaltz.com",
];

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn("SENDGRID_API_KEY not set - emails will fail until configured.");
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    console.log("📧 Contact form received:", req.body);
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);

      const phoneCountryCode = (req.body as any).phoneCountryCode ?? "";
      const phoneNumber = (req.body as any).phoneNumber ?? "";
      const phoneDisplay = `${phoneCountryCode} ${phoneNumber}`.trim();

      const plainTextBody = [
        `Name: ${validatedData.name}`,
        `Email: ${validatedData.email}`,
        validatedData.company ? `Company: ${validatedData.company}` : undefined,
        phoneDisplay ? `Phone: ${phoneDisplay}` : undefined,
        "",
        "Message:",
        validatedData.message,
      ]
        .filter(Boolean)
        .join("\n");

      const htmlBody = `<p><strong>Name:</strong> ${validatedData.name}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ""}
${phoneDisplay ? `<p><strong>Phone:</strong> ${phoneDisplay}</p>` : ""}
<hr />
<p>${validatedData.message.replace(/\n/g, "<br />")}</p>`;

      // Send via SendGrid
      if (!process.env.SENDGRID_API_KEY) {
        throw new Error("SENDGRID_API_KEY not configured in environment");
      }

      const msg: any = {
        to: CONTACT_RECIPIENTS,
        from: process.env.SENDGRID_FROM_EMAIL || validatedData.email,
        replyTo: validatedData.email,
        subject: `New contact inquiry from ${validatedData.name}`,
        text: plainTextBody,
        html: htmlBody,
      };

      await sgMail.send(msg);
      console.log("Contact form submission sent via SendGrid:", validatedData);

      res.json({
        success: true,
        message: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
    } catch (error) {
      console.error("Contact form error - Full details:", error);
      console.error("Error message:", (error as any).message);
      console.error("Error code:", (error as any).code);
      console.error("SMTP_USER:", process.env.SMTP_USER);
      console.error("SMTP_HOST:", process.env.SMTP_HOST);
      console.error("SMTP_PORT:", process.env.SMTP_PORT);
      res.status(400).json({
        success: false,
        message: "Please check your form and try again.",
        error: (error as any).message,
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
