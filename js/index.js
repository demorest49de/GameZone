import {
  accordeonHelper
} from './modules/accordeon.js';
import './modules/call-modal.js';
import './modules/control.js';
import './modules/burgerMenu.js';
import '../temp/temp.js';
import {vars} from './modules/mainVars.js';



{
  const init = (selectorApp) => {

    const $ = vars();
    // accordeon
    accordeonHelper($);
  };

  window.goInit = init;
}


