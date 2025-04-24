import React from "react"; // Importa o React para poder utilizar JSX
import { Provider } from "react-redux"; // Importa o Provider do react-redux para fornecer o store para o app
import { store } from "./store"; // Importa o store, onde a aplicação armazena o estado global

// Componente ReduxProvider que envolve a aplicação com o Provider do Redux
// Isso permite que todos os componentes filhos tenham acesso ao store
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    // O Provider do Redux passa o store para toda a árvore de componentes
    <Provider store={store}>
      {children} {/* Os componentes filhos que terão acesso ao estado global */}
    </Provider>
  );
}
