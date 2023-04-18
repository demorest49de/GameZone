import {accordionHelper} from './modules/accordion.js';
import {renderGO} from './modules/renderGO.js';
import {callModalHandler} from './modules/callModal.js';
import {
  headerClickHandler,
  burgerMenuClickHandler,
  toggleMenuHandler
} from './modules/burgerMenu.js';
import {vars} from './modules/mainVars.js';

{
  const init = (selectorApp) => {
    renderGO(selectorApp);
    const $ = vars();

    accordionHelper();
    callModalHandler();
    burgerMenuClickHandler($);
    headerClickHandler($);
    toggleMenuHandler($);
  };

  window.goInit = init;
}


