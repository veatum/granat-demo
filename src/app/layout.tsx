import type { Metadata } from "next";
import { Nunito, Pacifico } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700", "800", "900"],
  preload: false,
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin", "cyrillic"],
  weight: "400",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veatum.github.io/granat-demo/"),
  title: "Гранат — демо сайта кулинарии",
  description:
    "Демонстрационный сайт кулинарии: меню, корзина и готовый заказ в WhatsApp.",
  openGraph: {
    title: "Гранат — демо сайта кулинарии",
    description: "Меню, корзина и готовый заказ в WhatsApp — пример проекта Veatum.",
    url: "https://veatum.github.io/granat-demo/",
    siteName: "Veatum",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/granat-demo/og-granat.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${nunito.variable} ${pacifico.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
