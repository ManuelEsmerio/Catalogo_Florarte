import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AppClientProviders } from "@/components/AppClientProviders";

export const metadata: Metadata = {
  title: "Floreria Florarte - Dia de las Madres 💐",
  description:
    "Sorprende este 10 de Mayo con los mejores arreglos florales. Entrega en CDMX.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="light"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <AppClientProviders>{children}</AppClientProviders>
        <Toaster />
      </body>
    </html>
  );
}
