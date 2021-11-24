import { createStore } from "redux";

/*
  0. НИКОГДА НЕ МУТИРУЕМ СТОРУ
  1. создать стору
  2. раздать стору
  3. принять стору
*/

const INITIAL_STATE = { 
  categories :
  [
    { id: 1, type: "house", label: " Дом, сад, зоотовары" },
    { id: 2, type: "children", label: "Детям и мамам" },
    { id: 3, type: "cosmetics", label: "Косметика, парфюмерия" },
    { id: 4, type: "souvenirs", label: "Сувениры, галантерея" },
    { id: 5, type: "books", label: "Книги" },
    { id: 6, type: "products", label: "Продукты, деликатесы" },
    { id: 7, type: "electronics", label: "Техника, электроника" },
    { id: 8, type: "studies", label: "Канцтовары, учёба" },
    { id: 9, type: "sport", label: "Туризм, отдых, спорт" },
    { id: 10, type: "health", label: "Здоровье, медтехника" },
    ]
}

// функции редюсеры - принимают предыдущий стейт, при необходимости изменяего и возвращают новый изменнный
const reducer = (state = INITIAL_STATE) => {
  return state;
};

//   1. создать стору
export const store = createStore(reducer);







