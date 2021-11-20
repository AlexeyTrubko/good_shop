import { createStore } from "redux";


/*
  0. НИКОГДА НЕ МУТИРУЕМ СТОРУ
  1. создать стору
  2. раздать стору
  3. принять стору
*/

const INITIAL_STATE = {
  house: [{ id: 1, label: "blabla" }],
  books: [{ id: 1, label: "bleble" }],
  food: [{ id: 1, label: "blublu" }],
};

// функции редюсеры - принимают предыдущий стейт, при необходимости изменяего и возвращают новый изменнный
const reducer = (state = INITIAL_STATE) => {
  return state;
};

//   1. создать стору
export const store = createStore(reducer);