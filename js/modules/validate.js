export const ValidateCallModal = () => {
  const mask = new Inputmask('+7 (999)-999-99-99');
  const inputPhone = document.querySelector('.call__input-phone');
  console.log(' : ', inputPhone);
  mask.mask(inputPhone);
};

export const ValidateFormInput = () => {
  const justValidate = new JustValidate('.call__form');
  console.log(' : ', justValidate);
  justValidate
    .addField('.call__input-phone', [
      {
        rule: 'required',
      }
    ]);
};
