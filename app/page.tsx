// app/page.tsx

// Indica que este componente é um Client Component no Next.js (necessário para usar hooks como useEffect)
"use client";

// Importa o hook useEffect do React para executar efeitos colaterais
import { useEffect } from "react";

// Importa o hook useRouter do Next.js para manipulação de rotas
import { useRouter } from "next/navigation";

// Componente principal da página
export default function RedirectHome() {
  // Inicializa o roteador para poder redirecionar o usuário
  const router = useRouter();

  // Efeito que será executado assim que o componente for montado
  useEffect(() => {
    // Redireciona o usuário para a rota "/home"
    router.push("/home");
  }, [router]); // O efeito será reexecutado somente se o objeto router mudar (o que não acontece na prática)

  // O componente não renderiza nada visualmente
  return null;
}
