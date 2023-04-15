import {
  createHeader,
  createMain,
  createFooter,
  createCallModal,
  createBurgerMenu,
} from '../modules/create.js';

export const renderGO = ($) => {
  const app = document.querySelector($.selectorApp);


  const header = createHeader();
  const main = createMain();
  const footer = createFooter();
  const call = createCallModal();
  const burger = createBurgerMenu();
  main.append(call, burger);

  app.append(header, main, footer);
};
