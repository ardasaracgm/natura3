Natura Alacaatlı - Vercel Sürümü (Gerçek Mail Gönderen)

Kurulum:
1. ZIP'i açın.
2. GitHub'a yükleyin veya klasörü doğrudan Vercel'e import edin.
3. Vercel otomatik olarak Vite projesi olarak deploy eder.
4. Vercel Project Settings > Environment Variables alanına şunları ekleyin:
   - RESEND_API_KEY
   - LEAD_TO_EMAIL
   - LEAD_FROM_EMAIL

Gerekli servis:
- Resend hesabı
- Domain doğrulaması (önerilir)

Komutlar:
npm install
npm run dev
npm run build

Dosyalar:
- src/App.jsx : landing page
- src/styles.css : tasarım
- api/leads.js : gerçek mail gönderen Vercel serverless endpoint
- .env.example : örnek environment değişkenleri

Notlar:
- Form gönderildiğinde mail doğrudan LEAD_TO_EMAIL adresine gider.
- LEAD_FROM_EMAIL için kendi domain adresinizi kullanmanız en sağlıklısıdır.
- Resend domain doğrulaması yapılmadıysa test aşamasında onboarding@resend.dev ile başlayabilirsiniz.
- WhatsApp numarası: +90 530 841 6578
- İletişim e-posta adresi: info@mezonestate.com