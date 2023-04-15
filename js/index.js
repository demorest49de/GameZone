import {accordeonHelper} from './modules/accordeon.js';
import {renderGO} from './modules/renderGO.js';
import {vars} from './modules/mainVars.js';
import {callModalHandler} from './modules/callModal.js';
import {burgerHandler} from './modules/burgerMenu.js';


{
  const init = (selectorApp) => {
    const $ = vars(selectorApp);
    renderGO($);

    accordeonHelper();
    callModalHandler();
    burgerHandler();
  };

  window.goInit = init;
}


