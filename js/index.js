import {accordeonHelper} from './modules/accordeon.js';
import {renderGO} from './modules/renderGO.js';
import {vars} from './modules/mainVars.js';

// import './modules/callModal.js';
// import './modules/burgerMenu.js';


{
  const init = (selectorApp) => {
    const $ = vars(selectorApp);
    renderGO($);
    // accordeon
    accordeonHelper($);
  };

  window.goInit = init;
}


