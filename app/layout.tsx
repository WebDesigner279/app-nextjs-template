// app/layout.tsx

// Importa o arquivo global de estilos SCSS
import "./globals.scss";

// Importa o React para utilizar o JSX e tipagens
import React from "react";

// Define metadados globais da aplicação
export const metadata = {
  title: "Next.js App Template", // Título da aplicação exibido no navegador
  description: "", // Descrição da aplicação (pode ser usada em SEO)
  icons: {
    icon: "/favicon.ico", // Caminho para o ícone da aba do navegador (favicon)
  },
};

// Componente de layout raiz que envolve toda a aplicação
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Tipagem do conteúdo que será renderizado dentro do <body>
}) {
  return (
    <html lang="pt-BR">
      {" "}
      {/* Define o idioma da aplicação como português do Brasil */}
      <body>
        {children} {/* Renderiza os componentes filhos dentro do <body> */}
      </body>
    </html>
  );
}
