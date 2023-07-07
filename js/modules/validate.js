export const ValidateCallModal = () => {
  const mask = new Inputmask('+7 (999)-999-99-99');
  const inputPhone = document.querySelector('.call__input[name=call__phone]');
  console.log(' : ', inputPhone);
  mask.mask(inputPhone);
};

export const ValidateFormInput = () => {
  const justValidate = new JustValidate('.call__form');
  console.log(' : ', justValidate);
};
