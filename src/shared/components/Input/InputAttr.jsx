const InputAttr = {
  email: {
    name: "email",
    placeholder: "Enter e-mail",
    pattern: "[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*",
    required: true,
  },
  password: {
    name: "password",
    placeholder: "Password",
    type: "password",
    // pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).+",
    pattern: "^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$",
    // "Введите минимум 8 символов, обязательно должны присутствовать цифры и буквы разного регистра",
    required: true,
  },
  name: {
    name: "name",
    placeholder: "Input name",
    maxlength:"30",
    // pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    required: true,
  },
  description: {
    name: "description",
    placeholder: "Description",
    maxlength:"40",
    // pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    required: true,
  },
  hours: {
    name: "hours",
    placeholder: "Scheduled hours",
    type: 'number',
    required: true,
  }
};

export default InputAttr;
