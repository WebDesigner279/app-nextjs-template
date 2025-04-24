// app/about/page.tsx

"use client"; // Indica que este componente será renderizado no cliente (necessário em apps Next.js com app router)

// Importa os módulos e componentes necessários
import Link from "next/link"; // Componente de navegação do Next.js
import Button from "../components/Button"; // Componente de botão personalizado
import Navbar from "../components/Navbar"; // Componente de navegação superior
import styles from "./page.module.scss"; // Importa o módulo de estilos SCSS específico para esta página

// Função principal do componente da página "About"
export default function AboutPage() {
  return (
    <>
      {/* Renderiza o componente de navegação */}
      <Navbar />

      {/* Conteúdo principal da página com estilo aplicado via CSS Module */}
      <main className={styles.container}>
        {/* Título da página */}
        <h1>Você está na página About</h1>

        {/* Link para a página Home com botão personalizado */}
        <Link href="home">
          <Button as="a">Voltar para Home</Button>
        </Link>

        {/* Link para a página de Contato com botão personalizado */}
        <Link href="contact" passHref>
          <Button as="a">Contact</Button>
        </Link>
      </main>
    </>
  );
}
