// signin
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

export default function SignIn() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hackaton-42r9.onrender.com/auth/token",
        { cpf, password }
      );
      // Save the token to local storage or cookie and redirect to dashboard or home
      localStorage.setItem("token", response.data.access_token);
      console.log("response", response);
      console.log("entrou!");
      router.push("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <section className="flex flex-col m-2 px-5 py-10 justify-center items-center">
      <Card className="p-4 w-sm justify-center items-center w-96 mt-12">
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
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
              <Button type="submit" className="mt-4">
                Entrar
              </Button>
            </Link>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="flex gap-2 mt-4">
            <span>Não tem uma conta?</span>
            <Link href="/signup" className="text-blue-800 underline">
              Cadastre-se
            </Link>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
