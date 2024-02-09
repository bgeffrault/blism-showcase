import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Blism",
  description:
    "Blism vous accompagne dans vos projets de création de site web, applicatif et traitement de données",
  metadataBase: new URL("https://blism.fr"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-[#ffad4230] via-white to-[#7062505c]" />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center pt-32 pb-24">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
