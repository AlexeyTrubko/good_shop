import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  {/* <Router> */}
  <App />
  {/* </Router> */}
    

  </Provider>
  </BrowserRouter>,
  
  rootElement
);


