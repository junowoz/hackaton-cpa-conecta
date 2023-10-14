import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazônia Online",
  description: "Democratizando o acesso à internet na Amazônia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[url('/bg/bg1.svg')]">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <nav className="items-center bg-neutral-50 flex justify-between px-10 py-5">
          <Link href="/">
            <Image
              loading="lazy"
              src="/amazoniaonline.svg"
              alt="Logo"
              width={50}
              height={50}
              className="aspect-square object-cover object-center w-[50px] h-[50px]"
            />
          </Link>
          <Link href="/login">
            <Button className="">Entrar</Button>
          </Link>
        </nav>
        <div className="flex-grow">{children}</div>
        <footer className="flex p-6 items-center justify-center">
          <div className="flex flex-row gap-2 text-white items-center justify-center">
            <strong>Campus Party Amazônia</strong>
            <strong>-</strong>
            <strong>Hackathon: Projeto Amazônia Online</strong>
          </div>
        </footer>
      </body>
    </html>
  );
}
