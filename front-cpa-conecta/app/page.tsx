"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import MapInfo from "@/components/main/MapInfo";
import { useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

type InfoType = {
  nome: string;
  local: string;
  horario: string;
  imagem: string;
  maps: string;
};

export default function Home() {
  const infoData = [
    {
      nome: "Praça da Matriz",
      local: "Praça Tenreiro Aranha, Centro, Manaus",
      horario: "Aberto 24 horas",
      imagem: "/hubs/lugar1.jpeg",
      maps: "https://maps.example.com/praca-da-matriz",
    },
    {
      nome: "Teatro Amazonas",
      local: "Praça Ramos Ferreira, Centro, Manaus",
      horario: "9:00 - 17:00",
      imagem: "/hubs/lugar2.jpeg",
      maps: "https://maps.example.com/teatro-amazonas",
    },
    {
      nome: "Mercado Municipal Adolpho Lisboa",
      local: "R. dos Barés, Centro, Manaus",
      horario: "6:00 - 18:00",
      imagem: "/hubs/lugar3.jpeg",
      maps: "https://maps.example.com/mercado-municipal",
    },
    {
      nome: "Porto de Manaus",
      local: "Blvd. Vivaldo Lima, Centro, Manaus",
      horario: "Aberto 24 horas",
      imagem: "/hubs/lugar4.jpeg",
      maps: "https://maps.example.com/porto-de-manaus",
    },
    {
      nome: "Manaus Tech Hub",
      local: "Rua Otávio Cabral, Petrópolis, Manaus",
      horario: "9:00 - 16:30",
      imagem: "/hubs/lugar5.jpg",
      maps: "https://maps.example.com/bosque-da-ciencia",
    },
  ];

  // Estado para rastrear qual conjunto de informações mostrar
  const [currentInfo, setCurrentInfo] = useState<InfoType | null>(null);

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = (infoIndex: number) => {
    setCurrentInfo(infoData[infoIndex]);
    setDialogOpen(true); // Abra o diálogo quando um botão é clicado
  };

  const handleCloseDialog = () => {
    setDialogOpen(false); // Feche o diálogo
  };

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
          <Dialog>
            <DialogTrigger
              onClick={() => handleButtonClick(0)}
              className="absolute top-[50%] left-[60%] bg-blue-500 text-white p-2 rounded-full"
            >
              Rede 1
            </DialogTrigger>
          </Dialog>
          <Button
            onClick={() => handleButtonClick(1)}
            className="absolute top-[30%] left-[40%] bg-blue-500 text-white p-2 rounded-full"
          >
            Rede 2
          </Button>
          <Button
            onClick={() => handleButtonClick(2)}
            className="absolute top-[70%] left-[40%] bg-blue-500 text-white p-2 rounded-full"
          >
            Rede 3
          </Button>
          <Button
            onClick={() => handleButtonClick(3)}
            className="absolute top-[60%] left-[30%] bg-blue-500 text-white p-2 rounded-full"
          >
            Rede 4
          </Button>
          <Button
            onClick={() => handleButtonClick(4)}
            className="absolute top-[50%] left-[40%] bg-blue-500 text-white p-2 rounded-full"
          >
            Rede 5
          </Button>
        </Card>
        {currentInfo && (
          <MapInfo
            {...currentInfo}
            isOpen={isDialogOpen}
            onClose={handleCloseDialog}
          />
        )}{" "}
      </section>
    </main>
  );
}
