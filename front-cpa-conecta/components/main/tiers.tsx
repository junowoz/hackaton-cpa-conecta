import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

type Tier = {
  nome: string;
  internet: string;
  checks: string[];
  imagem: string;
};

type TierDialogProps = {
  title: string;
  checks: string[];
};

type TierCardProps = Tier;

const tiers = [
  {
    nome: "Bronze",
    internet: "Acesso à internet: 1h",
    checks: [
      "Recicle 10 garrafas de plástico",
      "Plante uma árvore",
      "Limpe um parque local",
    ],
    imagem: "/tier/bronze.png",
  },
  {
    nome: "Prata",
    internet: "Acesso à internet: 6h",
    checks: [
      "Recicle 20 garrafas de plástico",
      "Participe de uma caminhada ecológica",
      "Doe roupas usadas",
      "Ensine alguém sobre reciclagem",
      "Participe de uma ação de caridade local",
    ],
    imagem: "/tier/silver.png",
  },
  {
    nome: "Ouro",
    internet: "Acesso à internet: 12h",
    checks: [
      "Recicle 30 garrafas de plástico",
      "Organize uma coleta de lixo na comunidade",
      "Ajude em um abrigo de animais",
      "Doe alimentos para um banco de alimentos local",
      "Faça uma compostagem",
      "Promova uma palestra sobre sustentabilidade",
      "Crie uma campanha de conscientização ecológica",
    ],
    imagem: "/tier/gold.png",
  },
];

function TierDialog({ title, checks }: TierDialogProps) {
  const [selectedChecks, setSelectedChecks] = React.useState<number[]>([]);
  const allChecksSelected = checks.length === selectedChecks.length;

  return (
    <Dialog>
      <DialogTrigger>
        <Button disabled={allChecksSelected}>
          {allChecksSelected ? "Acesso Garantido" : "Desbloquear"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {checks.map((check, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox
              id={`check-${index}`}
              className="my-2"
              checked={selectedChecks.includes(index)}
              onCheckedChange={(isChecked) => {
                setSelectedChecks((prev) =>
                  isChecked
                    ? [...prev, index]
                    : prev.filter((item) => item !== index)
                );
              }}
            />
            <label
              htmlFor={`check-${index}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {check}
            </label>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
}

function TierCard({ nome, internet, checks }: TierCardProps) {
  return (
    <Card className="p-8 gap-4 flex w-60 max-w-full grow flex-col mx-auto">
      <h2 className="text-center text-2xl self-center">{nome}</h2>
      <p className="text-neutral-500 text-center">{internet}</p>
      <TierDialog title={nome} checks={checks} />
    </Card>
  );
}

export default function Tiers() {
  return (
    <section className="flex flex-col my-24 p-5 justify-center items-center w-full">
      <div className="gap-5 flex flex-row justify-center items-center max-md:flex-col max-md:items-stretch max-md:gap-0">
        {tiers.map((tier: Tier) => (
          <TierCard key={tier.nome} {...tier} />
        ))}
      </div>
    </section>
  );
}
