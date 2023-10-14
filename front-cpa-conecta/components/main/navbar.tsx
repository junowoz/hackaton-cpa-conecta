"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { AuthProvider, useAuth } from "@/lib/authContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
      <nav className="items-center bg-neutral-50 flex justify-between px-10 py-5">
        <Link href="/">
          <Image
            loading="lazy"
            src="/amazoniaonline.svg"
            alt="Logo"
            width={50}
            height={50}
            className="aspect-square object-cover object-center w-[50px] h-[50px]"
          />
        </Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <Button onClick={logout}>Sair</Button>
          </>
        ) : (
          <Link href="/login">
            <Button className="">Entrar</Button>
          </Link>
        )}
      </nav>
  );
}

export default Navbar;
