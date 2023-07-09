import {accordionHelper} from './modules/accordion.js';
import {renderGO} from './modules/renderGO.js';
import {callModalHandler} from './modules/callModal.js';
import {
  burgerMenuClickHandler,
  initBurgerMenu,
} from './modules/burgerMenu.js';
import {vars} from './modules/mainVars.js';
import {initSwiperRooms} from "./swiper.js";
import {ValidateForm} from "./modules/validate.js";

{
  const init = (selectorApp) => {
    renderGO(selectorApp);
    const $ = vars();

    accordionHelper();
    callModalHandler($);
    burgerMenuClickHandler($);
    initBurgerMenu($);
    initSwiperRooms();
    ValidateForm()
  };

  window.goInit = init;
}
