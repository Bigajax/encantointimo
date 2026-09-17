import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import { site } from "@/data/site.config";
import "./globals.css";

/* A serifa fina e alta faz a manchete e os títulos, e a itálica dela é
   a voz da marca (a logo é uma serifa fina em caixa alta; a Cormorant é
   a versão que fala baixo). A Mulish, macia, faz o corpo, os botões e
   os campos. */
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--fonte-display",
  display: "swap",
});

const corpo = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--fonte-corpo",
  display: "swap",
});

const TITULO = "Encanto Íntimo: pijamas, lingeries e body splash em Itaporanga";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: TITULO,
    template: "%s · Encanto Íntimo",
  },
  description: "Short dolls, pijamas de camiseta e short, lingerie de renda e body splash Victoria's Secret, escolhidos com carinho. Você escolhe no site e pede pelo WhatsApp: entrega para toda a região de Itaporanga, SP.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Encanto Íntimo",
    url: site.url,
    title: TITULO,
    description: site.posicionamento,
    images: [{ url: "/og/site.jpg", width: 1200, height: 630, alt: "Encanto Íntimo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: site.posicionamento,
    images: ["/og/site.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${corpo.variable} antialiased`}>{children}</body>
    </html>
  );
}
