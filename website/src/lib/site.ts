export const site = {
  name: "ServeiCat 24H",
  domain: "serveicat.com",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "900 123 456",
  phoneTel: process.env.NEXT_PUBLIC_PHONE_TEL || "+34900123456",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34900123456",
  email: process.env.NEXT_PUBLIC_EMAIL || "hola@serveicat.com",
  baseCity: "Vilanova i la Geltru",
  coverage: [
    "Vilanova i la Geltru",
    "Sitges",
    "Sant Pere de Ribes",
    "Cubelles",
    "Cunit",
    "Calafell",
    "El Vendrell",
    "Garraf",
    "Baix Penedes"
  ],
  ads: {
    id: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
    callLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL || "",
    whatsappLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL || ""
  }
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
