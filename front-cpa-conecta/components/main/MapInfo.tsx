import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type InfoType = {
  nome: string;
  local: string;
  horario: string;
  imagem: string;
  maps: string;
};

type MapInfoProps = InfoType & {
  isOpen: boolean;
  onClose: () => void;
};

export default function MapInfo({
  nome,
  local,
  horario,
  imagem,
  maps,
  isOpen,
  onClose,
}: MapInfoProps) {
  return (
    <Dialog open={isOpen} onDismiss={onClose}>
      <DialogTrigger>Open</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{nome}</DialogTitle>
          <DialogDescription>
            {local}
            <p>Horário: {horario}</p>
          </DialogDescription>
        </DialogHeader>
        <Image src={imagem} alt={nome} width={400} height={400} />
        <Link href={maps} target="_blank" rel="noopener noreferrer">
          <Button>Ver no mapa</Button>
        </Link>
      </DialogContent>
    </Dialog>
  );
}
