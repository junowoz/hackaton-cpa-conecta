"use client";
import * as React from "react";
import Map from "@/components/main/map";
import Tiers from "@/components/main/tiers";

export default function Dashboard() {
  return (
    <main className="overflow-hidden overflow-x-hidden overflow-y-hidden relative">
      <Tiers />
      <Map />
    </main>
  );
}
