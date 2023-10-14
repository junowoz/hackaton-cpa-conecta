import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/main/navbar";
import { AuthProvider } from "@/lib/authContext";

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
      <AuthProvider>
        <body className={`flex flex-col min-h-screen ${inter.className}`}>
          <Navbar />
          <div className="flex-grow">{children}</div>
          <footer className="flex p-6 items-center justify-center">
            <div className="flex flex-row gap-2 text-white items-center justify-center">
              <strong>Campus Party Amazônia</strong>
              <strong>-</strong>
              <strong>Hackathon: Projeto Amazônia Online</strong>
            </div>
          </footer>
        </body>
      </AuthProvider>
    </html>
  );
}
