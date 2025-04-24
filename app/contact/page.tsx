"use client"; // Diretiva do Next.js que indica que este componente é renderizado no lado do cliente

import Link from "next/link"; // Importa o componente Link do Next.js para navegação entre páginas
import ContactForm from "../components/ContactForm"; // ✨ Importa o componente de formulário de contato
import Button from "../components/Button"; // Importa o componente de botão (presumivelmente personalizado)
import Navbar from "../components/Navbar"; // Importa a barra de navegação superior
import styles from "./page.module.scss"; // Importa os estilos específicos desta página

// Componente principal da página de contato
export default function ContactPage() {
  return (
    <>
      {/* Renderiza a barra de navegação no topo da página */}
      <Navbar />

      {/* Container principal da página, com estilo aplicado via SCSS */}
      <main className={styles.container}>
        {/* Renderiza o formulário de contato */}
        <ContactForm />

        {/* Botão com link para voltar à página inicial */}
        <Link href="/home">
          {/* O botão é renderizado como um link usando a prop 'as="a"' */}
          <Button as="a">Voltar para Home</Button>
        </Link>
      </main>
    </>
  );
}
