export const storage = {
  // Função para obter um item do localStorage
  // Retorna o valor associado à chave ou null se não encontrar o item
  get: (key: string): string | null => {
    // Verifica se o código está sendo executado no lado do cliente (navegador)
    // Para evitar erros em ambientes de servidor (como SSR no Next.js)
    if (typeof window === "undefined") return null;
    // Retorna o item armazenado no localStorage
    return localStorage.getItem(key);
  },

  // Função para salvar um item no localStorage
  set: (key: string, value: string): void => {
    // Verifica se o código está sendo executado no lado do cliente (navegador)
    if (typeof window === "undefined") return;
    // Armazena o item no localStorage com a chave e valor fornecidos
    localStorage.setItem(key, value);
  },

  // Função para remover um item do localStorage
  remove: (key: string): void => {
    // Verifica se o código está sendo executado no lado do cliente (navegador)
    if (typeof window === "undefined") return;
    // Remove o item do localStorage com a chave fornecida
    localStorage.removeItem(key);
  },
};
