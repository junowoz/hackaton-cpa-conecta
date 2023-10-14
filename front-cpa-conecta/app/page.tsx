"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Map from "@/components/main/map";

export default function Home() {

  return (
    <main className="overflow-hidden overflow-x-hidden overflow-y-hidden relative">
      <section className="flex flex-col p-24 justify-center items-center">
        <Card className="flex flex-col items-center justify-center gap-6 p-16">
          <strong className="text-center text-4xl self-center">
            Amazônia Online
          </strong>
          <p className="text-center text-2xl self-center">
            Democratizando o acesso à internet na Amazônia
          </p>
          <Link href={"/about"}>
            <Button>Saiba mais</Button>
          </Link>
        </Card>
      </section>
      <Map />
    </main>
  );
}
