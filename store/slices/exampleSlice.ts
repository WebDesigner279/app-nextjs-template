// Importa funções do Redux Toolkit para criar um slice e tipar a ação (PayloadAction)
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a interface do estado, com uma única propriedade 'value' do tipo number
interface ExampleState {
  value: number;
}

// Define o estado inicial do slice
const initialState: ExampleState = {
  value: 0,
};

// Cria o slice com nome, estado inicial e os reducers (funções que modificam o estado)
const exampleSlice = createSlice({
  name: "example", // Nome do slice, usado como prefixo nos tipos de ação
  initialState, // Estado inicial
  reducers: {
    // Função para incrementar o valor em 1
    increment: (state) => {
      state.value += 1;
    },
    // Função para decrementar o valor em 1
    decrement: (state) => {
      state.value -= 1;
    },
    // Função para incrementar o valor por uma quantidade específica
    // A quantidade é passada como payload na ação
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Exporta as ações para serem utilizadas nos componentes ou outros arquivos
export const { increment, decrement, incrementByAmount } = exampleSlice.actions;

// Exporta o reducer para ser incluído no store da aplicação
export default exampleSlice.reducer;
