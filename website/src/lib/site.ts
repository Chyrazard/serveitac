export const site = {
  name: "ServeiCat 24H",
  domain: "serveicat.com",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+34 668 52 53 16",
  phoneTel: process.env.NEXT_PUBLIC_PHONE_TEL || "+34668525316",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34668525316",
  email: process.env.NEXT_PUBLIC_EMAIL || "serveicat24@gmail.com",
  baseCity: "Vilanova i la Geltrú",
  coverage: [
    "Vilanova i la Geltrú",
    "Castelldefels",
    "Viladecans",
    "Gavà",
    "Sitges",
    "Sant Pere de Ribes",
    "Calafell",
    "Cubelles"
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
