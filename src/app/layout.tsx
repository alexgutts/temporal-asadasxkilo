import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AsadasXKilo | Carne Asada a la Leña - Tepatitlán",
  description:
    "La mejor carne asada a la leña de Tepatitlán de Morelos, Jalisco. Asada, Sirloin y Picaña por kilo. Servicio a domicilio. Tel: 378 139 7280",
  keywords: [
    "carne asada",
    "asada a la leña",
    "Tepatitlán",
    "carne por kilo",
    "restaurante",
    "comida mexicana",
    "tacos",
    "quesadillas",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "AsadasXKilo | Carne Asada a la Leña",
    description: "La mejor carne asada a la leña de Tepatitlán de Morelos",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
