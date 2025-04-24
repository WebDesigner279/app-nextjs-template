// Define os tipos de propriedades aceitas pelo componente Button.
// Ele estende os atributos HTML padrão para elementos genéricos (HTMLElement),
// e adiciona as propriedades personalizadas `as` e `href`.
interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  as?: "button" | "a"; // Define se o botão será renderizado como <button> ou <a>
  href?: string;        // Define o link, usado apenas quando `as` for "a"
}

// Importa os estilos SCSS aplicados ao botão
import styles from "./button.module.scss";

// Componente Button reutilizável
export default function Button({
  children,     // Conteúdo interno do botão (texto ou outros elementos)
  as = "button", // Valor padrão é "button", mas pode ser "a" (link)
  href,         // Endereço do link se for renderizado como <a>
  ...props      // Qualquer outra propriedade passada para o botão
}: ButtonProps) {
  // Se `as` for "a" (link) e um `href` for fornecido, renderiza um <a>
  if (as === "a" && href) {
    return (
      <a href={href} className={styles.myButton} {...props}>
        {children}
      </a>
    );
  }

  // Caso contrário, renderiza um botão padrão <button>
  return (
    <button className={styles.myButton} {...props}>
      {children}
    </button>
  );
}
