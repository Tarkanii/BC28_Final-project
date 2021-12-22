import { useState } from "react";

const useForm = (initialState, onSubmit) => {
  const [data, setData] = useState(initialState);

  const handleChange = ({ target }) => {
    const { type, name, value, checked } = target;
    const newValue = type === "checkbox" ? checked : value;
    setData({ ...data, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    setData({ ...initialState });
  };

  return [data, handleChange, handleSubmit];
};

export default useForm;
