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
    <html lang="en">
      <body className={inter.className}>
        <nav className="items-center bg-neutral-100 flex justify-between px-10 py-5">
          <Link href="/">
            <Image
              loading="lazy"
              src="/amazoniaonline.svg"
              alt="Mapa"
              width={50}
              height={50}
              className="aspect-square object-cover object-center w-[50px] h-[50px]"
            />
          </Link>
          <Link href="/login">
            <Button className="">Entrar</Button>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
