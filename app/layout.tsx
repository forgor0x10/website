import type { Metadata } from "next";

import { JetBrains_Mono, Nunito } from "next/font/google";

import "./globals.css";

import Image from "next/image";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "/home/forgor0x10",
  description: "forgor0x10's personal page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${jetBrainsMono.variable} ${nunito.variable} flex flex-col place-content-between min-h-screen`}
      >
        <header className="flex flex-col items-center">
          <h1 className="!text-5xl">forgor0x10</h1>
        </header>
        <p id="small-screen-warning-text" className="text-center mb-16">
          Using a small screen (Or viewing from mobile)
          <br />
          Contet may appear inaccurate
        </p>
        {children}
        <footer className="flex flex-col items-center gap-8">
          <div>
            <h2 className="spacing">Links</h2>

            <p>
              <a
                target="_blank"
                href="https://discord.com/users/954606816820613160"
              >
                <i className="nf nf-fa-discord mr-2"></i>Discord
              </a>
              <br />
              <a target="_blank" href="https://github.com/forgor0x10">
                <i className="nf nf-fa-github mr-2"></i>GitHub
              </a>
              <br />
              <a target="_blank" href="https://youtube.com/@forgor0x10">
                <i className="nf nf-fa-youtube mr-2"></i>YouTube
              </a>
            </p>
          </div>
          <div className="absolute w-32 h-16 right-4 bottom-4">
            <a
              target="_blank"
              href="https://nextjs.org"
              className="dark-underline block w-full h-full"
            >
              <Image src="/svg/next.svg" alt="Next.js Logo" fill />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
