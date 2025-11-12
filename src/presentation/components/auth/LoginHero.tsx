import Image from "next/image";

export const LoginHero = () => {
  return (
    <div className="relative hidden lg:flex lg:w-1/2 items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] overflow-hidden">
      <Image
        src="/images/login/imagen_web_prueba.png"
        alt="Login hero"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
      
      <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
        <div className="absolute top-1/4 left-1/4">
          <div className="w-20 h-20 rounded-full bg-[#3b82f6]/20 backdrop-blur-sm border border-[#3b82f6]/30 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-[#3b82f6]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4 opacity-30">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-[#3b82f6] rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

