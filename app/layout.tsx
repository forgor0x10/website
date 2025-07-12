import type { Metadata } from "next";
import { JetBrains_Mono, Nunito } from "next/font/google";

import "./globals.css";

import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

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
    <html lang="en" className={`${jetBrainsMono.variable} ${nunito.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className=" flex flex-col place-content-between min-h-screen">
        <div className="hidden">nf-fa-discord nf-fa-github nf-fa-youtube</div>
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
            <h2>Links</h2>

            <div className="flex flex-col gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.com/users/954606816820613160"
              >
                <FaDiscord className="inline mr-2" />
                Discord
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/forgor0x10"
              >
                <FaGithub className="inline mr-2" />
                GitHub
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtube.com/@forgor0x10"
              >
                <FaYoutube className="inline mr-2" />
                YouTube
              </a>
            </div>
          </div>

          <div className="absolute right-4 bottom-4">
            <a
              target="_blank"
              href="https://nextjs.org"
              className="block w-full h-full"
            >
              <SiNextdotjs size="2rem" className="m-1" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
