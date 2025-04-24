// app/home/page.tsx

// "use client" indica que esse componente será renderizado no lado do cliente (Client Component)
"use client";

// Importa o componente Link do Next.js para navegação entre páginas
import Link from "next/link";

// Importa o componente de botão personalizado
import Button from "../components/Button";

// Importa a barra de navegação
import Navbar from "../components/Navbar";

// Importa os estilos definidos no arquivo SCSS correspondente
import styles from "./page.module.scss";

// Componente principal da página inicial
export default function HomePage() {
  return (
    <>
      {/* Componente de navegação no topo da página */}
      <Navbar />

      {/* Conteúdo principal da página com classe de estilo aplicada */}
      <main className={styles.container}>
        {/* Título de boas-vindas */}
        <h1>
          Bem-vindo ao modelo de aplicativo Next.js com TypeScript, Redux
          Toolkit e SCSS.
        </h1>

        {/* Link para a página "About" com botão personalizado */}
        <Link href="about" passHref>
          <Button as="a">Ir para About</Button>
        </Link>
      </main>
    </>
  );
}
