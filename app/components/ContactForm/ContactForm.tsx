// app/components/ContactForm.tsx
"use client"; // Habilita recursos client-side no Next.js para esse componente

import { useState } from "react";
import styles from "./ContactForm.module.scss"; // Importa os estilos SCSS específicos para o formulário

// Componente funcional ContactForm
export default function ContactForm() {
  // Estado inicial para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  // Função para atualizar o estado conforme o usuário preenche os campos
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita o recarregamento da página ao enviar o formulário
    alert(
      // Exibe os dados preenchidos em um alerta
      `Mensagem enviada!\nNome: ${formData.nome}\nEmail: ${formData.email}\nMensagem: ${formData.mensagem}`,
    );
    // Limpa os campos após o envio
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    // Formulário com evento onSubmit atrelado à função handleSubmit
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Contato</h2>
      {/* Campo de texto para o nome */}
      <input
        type="text"
        name="nome"
        placeholder="Seu nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />
      {/* Campo de email */}
      <input
        type="email"
        name="email"
        placeholder="Seu e-mail"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {/* Campo de textarea para a mensagem */}
      <textarea
        name="mensagem"
        placeholder="Sua mensagem"
        value={formData.mensagem}
        onChange={handleChange}
        required
        rows={5}
      />
      {/* Botão de envio do formulário */}
      <button type="submit">Enviar</button>
    </form>
  );
}
