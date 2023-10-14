"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Map() {
  const infoData = [
    {
      nome: "Sesi Clube do Trabalhador",
      local: "Av. Cosme Ferreira, 7399 - São José I, Manaus - AM, 69083-000",
      horario: "Aberto 24 horas",
      imagem: "/hubs/lugar1.jpeg",
      maps: "https://www.google.com/maps/place/Sesi+Clube+do+Trabalhador/@-3.0730559,-59.9860141,15z/data=!4m9!1m2!2m1!1sso+jose+operario!3m5!1s0x926c1b0fce0f5313:0xaa02b1047f2f18e8!8m2!3d-3.0730567!4d-59.9669586!16s%2Fg%2F1tg_h3n7?entry=ttu",
    },
    {
      nome: "Manaus Tech Hub",
      local:
        "Sidia Amazon Innovation - Av. Torquato Tapajós, 6770 - Novo Israel, Manaus - AM, 69039-125",
      horario: "9:00 - 17:00",
      imagem: "/hubs/lugar2.png",
      maps: "https://www.google.com/maps/place/Manaus+Tech+Hub/@-3.0787472,-60.1558752,12z/data=!4m10!1m2!2m1!1smanaus+tech+hub+endereco!3m6!1s0x926c1be66f91224f:0xf3efc451a45d17fe!8m2!3d-3.0187346!4d-60.0271799!15sChhtYW5hdXMgdGVjaCBodWIgZW5kZXJlY28iAkgBkgEQY29ycG9yYXRlX29mZmljZeABAA!16s%2Fg%2F11p9vrt0jj?entry=ttu",
    },
    {
      nome: "Soberane Live + Work",
      local: "R. Salvador, 440 - Adrianópolis, Manaus - AM, 69057-040",
      horario: "Aberto 24 horas",
      imagem: "/hubs/lugar3.webp",
      maps: "https://www.google.com/maps/place/Soberane+Live+%2B+Work/@-3.1106307,-60.0204832,16.5z/data=!4m9!1m2!2m1!1sso+jose+operario!3m5!1s0x926c054e89cf04a7:0x8992d917f5a2550f!8m2!3d-3.1081706!4d-60.0123057!16s%2Fg%2F11c4bc7nhc?entry=ttu",
    },
    {
      nome: "Arena da Amazônia",
      local: "Av. Constantino Nery, 5001 - Flores, Manaus - AM, 69043-100",
      horario: "8:00 - 22:00",
      imagem: "/hubs/lugar4.jpg",
      maps: "https://www.google.com/maps/place/Arena+da+Amaz%C3%B4nia/@-3.0865572,-60.0380355,15.83z/data=!4m14!1m7!3m6!1s0x926c0fff8dd7b6d1:0xe423f75d474a183a!2sArena+da+Amaz%C3%B4nia!8m2!3d-3.0832457!4d-60.0281392!16s%2Fm%2F0cnzzs2!3m5!1s0x926c0fff8dd7b6d1:0xe423f75d474a183a!8m2!3d-3.0832457!4d-60.0281392!16s%2Fm%2F0cnzzs2?entry=ttu",
    },
    {
      nome: "Parque Municipal do Mindu",
      local:
        "R. Domingos José Martins, S/n - Parque Dez de Novembro, Manaus - AM, 69098-257",
      horario: "Aberto 24 horas",
      imagem: "/hubs/lugar5.jpg",
      maps: "https://www.google.com/maps/place/Parque+Municipal+do+Mindu/@-3.0780748,-60.0109824,17z/data=!3m1!4b1!4m6!3m5!1s0x926c1a9228488da1:0x9b63abcb6c90bd84!8m2!3d-3.0780748!4d-60.0084021!16s%2Fg%2F11x1nm7tm?entry=ttu",
    },
  ];

  return (
    <section className="items-center flex h-screen justify-center w-full relative">
      <Image src="/mapa.png" alt="Mapa" layout="fill" objectFit="cover" />
      {infoData.map((info, index) => (
        <Dialog key={index}>
          <DialogTrigger
            className={`absolute ${getButtonPosition(
              index
            )} bg-blue-500 text-white p-2 rounded-full`}
          >
            {`Rede ${index + 1}`}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{info.nome}</DialogTitle>
              <DialogDescription>
                {info.local}
                <p>Horário: {info.horario}</p>
              </DialogDescription>
            </DialogHeader>
            <Image src={info.imagem} alt={info.nome} width={400} height={400} />
            <Link href={info.maps} target="_blank" rel="noopener noreferrer">
              <Button>Ver no mapa</Button>
            </Link>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
}

// This function returns the positions for the buttons, you can modify the positions if necessary.
function getButtonPosition(index: number) {
  switch (index) {
    case 0:
      return "top-[50%] left-[60%]";
    case 1:
      return "top-[30%] left-[40%]";
    case 2:
      return "top-[70%] left-[40%]";
    case 3:
      return "top-[60%] left-[30%]";
    case 4:
      return "top-[50%] left-[40%]";
    default:
      return "";
  }
}
