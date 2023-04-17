import {accordionHelper} from './modules/accordion.js';
import {renderGO} from './modules/renderGO.js';
import {callModalHandler} from './modules/callModal.js';
import {burgerHandler} from './modules/burgerMenu.js';
import {vars} from './modules/mainVars.js';
// import '../temp/temp.js';

{
  const init = (selectorApp) => {
    const $ = vars(selectorApp);
    renderGO($);

    accordionHelper();
    callModalHandler();
    burgerHandler();
  };

  window.goInit = init;
}


