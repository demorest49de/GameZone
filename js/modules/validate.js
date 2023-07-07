export const ValidateForm = () => {
  const mask = new Inputmask('+7 (999)-999-99-99');
  const inputPhone = document.querySelector('.call__input-phone');
  const modalTitle = document.querySelector('.call__title');
  mask.mask(inputPhone);

  const ValidateFormInput = () => {
    const justValidate = new JustValidate('.call__form');
    justValidate
      .addField('.call__input-name', [
        {
          rule: 'required',
          errorMessage: 'укажите ваше имя'
        },
        {
          rule: 'minLength',
          value: 3,
          errorMessage: 'не короче 3 символов',
        },
        {
          rule: 'maxLength',
          value: 30,
          errorMessage: 'слишком длинное имя',
        }
      ])
      .addField('.call__input-phone', [
        {
          rule: 'required',
          errorMessage: 'укажите номер телефона'
        },
        {
          validator(value) {
            const phone = inputPhone.inputmask.unmaskedvalue();
            console.log(' : ', phone);
            return !!(Number(phone) && phone.length === 10);
          },
          errorMessage: 'Телефон не корректный'
        }
      ])
      .onSuccess(event => {
        console.log(' : ', event);
        const target = event.target;
        axios.post('https://jsonplaceholder.typicode.com/posts', {
          call__name: target.call__name,
          call__phone: target.call__phone,
        })
          .then(response => {
            console.log(' : ',response);
          })
        ;
      })
    ;
  };

  ValidateFormInput();
};




