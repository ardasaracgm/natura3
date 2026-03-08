import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Sadece POST desteklenir." });
  }

  try {
    const { name, phone, email, apartmentType, message, project } = req.body || {};

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Ad Soyad ve Telefon zorunludur."
      });
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "RESEND_API_KEY tanımlı değil."
      });
    }

    if (!process.env.LEAD_TO_EMAIL) {
      return res.status(500).json({
        success: false,
        message: "LEAD_TO_EMAIL tanımlı değil."
      });
    }

    const fromEmail = process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.LEAD_TO_EMAIL;

    const submittedAt = new Date().toLocaleString("tr-TR", {
      timeZone: "Europe/Istanbul"
    });

    const subject = `[${project || "Natura Alacaatlı"}] Yeni Lead Geldi`;

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
        <h2 style="margin:0 0 16px;">Yeni Form Talebi</h2>
        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#e2e8f0;width:100%;max-width:700px;">
          <tr><td><strong>Proje</strong></td><td>${project || "Natura Alacaatlı"}</td></tr>
          <tr><td><strong>Ad Soyad</strong></td><td>${name || "-"}</td></tr>
          <tr><td><strong>Telefon</strong></td><td>${phone || "-"}</td></tr>
          <tr><td><strong>E-posta</strong></td><td>${email || "-"}</td></tr>
          <tr><td><strong>Daire Tipi</strong></td><td>${apartmentType || "-"}</td></tr>
          <tr><td><strong>Mesaj</strong></td><td>${message || "-"}</td></tr>
          <tr><td><strong>Tarih</strong></td><td>${submittedAt}</td></tr>
        </table>
      </div>
    `;

    const text = [
      "Yeni Form Talebi",
      `Proje: ${project || "Natura Alacaatlı"}`,
      `Ad Soyad: ${name || "-"}`,
      `Telefon: ${phone || "-"}`,
      `E-posta: ${email || "-"}`,
      `Daire Tipi: ${apartmentType || "-"}`,
      `Mesaj: ${message || "-"}`,
      `Tarih: ${submittedAt}`
    ].join("\n");

    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject,
      html,
      text,
      reply_to: email || undefined
    });

    return res.status(200).json({
      success: true,
      message: "Talep başarıyla alındı.",
      emailId: emailResult?.data?.id || null
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "Mail gönderimi sırasında hata oluştu."
    });
  }
}