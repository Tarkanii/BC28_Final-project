const InputAttr = {
  email: {
    name: "email",
    placeholder: "E-mail",
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
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    required: true,
  },
  description: {
    name: "description",
    placeholder: "Description",
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    required: true,
  },
  hours: {
    name: "hours",
    placeholder: "Scheduled hours",
    pattern: "^(?=.*d)",
    required: true,
  },
};

export default InputAttr;
