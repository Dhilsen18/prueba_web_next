"use client";

import { useState, FormEvent } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Link } from "../ui/Link";
import { Email } from "@/domain/auth/value-objects/Email";
import { Password } from "@/domain/auth/value-objects/Password";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setEmailError("");
    setPasswordError("");

    try {
      const emailValueObject = Email.create(email);
      const passwordValueObject = Password.create(password);
      
      console.log("Login attempt:", {
        email: emailValueObject.getValue(),
        password: passwordValueObject.getValue(),
      });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("correo")) {
          setEmailError(error.message);
        } else if (error.message.includes("contraseña")) {
          setPasswordError(error.message);
        }
      }
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-[#1e3a8a]"></div>
        <div className="absolute top-20 right-20 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-[#1e3a8a]"></div>
        <div className="absolute top-32 left-32 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-[#1e3a8a]"></div>
        <div className="absolute top-40 right-40 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[11px] border-b-[#1e3a8a]"></div>
        <div className="absolute top-16 left-1/4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[9px] border-b-[#1e3a8a]"></div>
        <div className="absolute top-24 right-1/3 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-[#1e3a8a]"></div>
        <div className="absolute top-8 left-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[10px] border-b-[#1e3a8a]"></div>
      </div>
      
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-6 items-center">
        <h1 className="text-3xl font-bold text-[#1e3a8a] mb-2 text-center">
          <div>Entra a</div>
          <div>tu sesión</div>
        </h1>
        
        <Input
          type="email"
          label="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />
        
        <Input
          type="password"
          label="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />
        
        <Link href="#" className="text-sm text-center font-bold mb-4">
          ¿Has olvidado tu contraseña?
        </Link>
        
        <Button type="submit" className="w-full">
          Entrar a mi cuenta
        </Button>
        
        <div className="text-center text-sm font-bold">
          <span className="text-[#1e3a8a]">¿Aún no tienes cuenta? </span>
          <Link href="#" variant="accent" className="font-bold">
            Crear cuenta
          </Link>
        </div>
      </form>
    </div>
  );
};

