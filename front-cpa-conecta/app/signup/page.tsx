// signup
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleCpfChange = (e: any) => {
    const formattedCpf = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    setCpf(formattedCpf);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("https://hackaton-42r9.onrender.com/user/", {
        cpf,
        email,
        password,
      });
      router.push("/dashboard");
      console.log("cadastrado!");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <section className="flex flex-col m-2 px-5 py-10 justify-center items-center">
      <Card className="p-4 w-sm justify-center items-center w-96 mt-12">
        <CardHeader>
          <CardTitle>Cadastro</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="cpf" className="text-base">
                CPF
              </label>
              <Input
                type="text"
                id="cpf"
                value={cpf}
                maxLength={12}
                onChange={handleCpfChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-base">
                Email
              </label>
              <Input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="senha" className="text-base">
                Senha
              </label>
              <Input
                type="password"
                id="senha"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <Link href={"dashboard"}>
              <Button className="mt-4">
                Cadastrar
              </Button>
            </Link>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="flex gap-2 mt-4">
            <span>Já tem uma conta?</span>
            <Link href="/login" className="text-blue-800 underline">
              Entre
            </Link>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
