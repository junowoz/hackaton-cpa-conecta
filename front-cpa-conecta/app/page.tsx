import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function UpdatedComponent() {
  return (
    <main className="overflow-hidden overflow-x-hidden overflow-y-hidden relative">
      <section className="flex flex-col p-24 gap-4 justify-center items-center">
        <strong className="text-center text-4xl self-center">
          Amazônia Online
        </strong>
        <p className="text-center text-2xl self-center">
          Democratizando o acesso à internet no estado do Amazonas
        </p>
        <Link href={"/about"}>
          <Button>Saiba mais</Button>
        </Link>
      </section>
      <section className="items-center flex h-screen justify-center w-full relative">
        <Card>
          <Image src="/mapa.png" alt="Mapa" layout="fill" objectFit="cover" />
          <Button className="absolute top-[50%] left-[60%] bg-blue-500 text-white p-2 rounded-full">
            Rede 1
          </Button>
          <Button className="absolute top-[30%] left-[40%] bg-blue-500 text-white p-2 rounded-full">
            Rede 2
          </Button>
          <Button className="absolute top-[80%] left-[40%] bg-blue-500 text-white p-2 rounded-full">
            Rede 3
          </Button>
          <Button className="absolute top-[60%] left-[30%] bg-blue-500 text-white p-2 rounded-full">
            Rede 4
          </Button>
          <Button className="absolute top-[50%] left-[40%] bg-blue-500 text-white p-2 rounded-full">
            Rede 5
          </Button>
          <Button className="absolute top-[60%] left-[50%] bg-blue-500 text-white p-2 rounded-full">
            Rede 6
          </Button>
        </Card>
        <Dialog>
          {/* Coloque aqui as informações desejadas para o diálogo */}
        </Dialog>
      </section>
    </main>
  );
}
