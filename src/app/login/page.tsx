import Image from "next/image";
import { LoginForm } from "@/presentation/components/auth/LoginForm";
import { LoginHero } from "@/presentation/components/auth/LoginHero";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <LoginHero />
      
      <div className="relative flex-1 flex items-center justify-center px-6 py-12">
        <Image
          src="/images/login/imagen_web_prueba2.png"
          alt="Background"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-[#f1f5f9]/80" />
        <div className="relative z-10 w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

