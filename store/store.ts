// Importa a função 'configureStore' do Redux Toolkit para configurar a store
import { configureStore } from "@reduxjs/toolkit";
// Importa o reducer do slice, que contém a lógica de estado para uma parte específica do app
import exampleReducer from "./slices/exampleSlice";

// Criação da store utilizando 'configureStore' do Redux Toolkit
export const store = configureStore({
  reducer: {
    // O 'example' é a chave que mapeia o reducer 'exampleReducer' para o estado global
    example: exampleReducer,
  },
});

// Define o tipo RootState, que representa a estrutura do estado global da aplicação
export type RootState = ReturnType<typeof store.getState>;
// Define o tipo AppDispatch, que representa a função de despacho de ações da store
export type AppDispatch = typeof store.dispatch;
