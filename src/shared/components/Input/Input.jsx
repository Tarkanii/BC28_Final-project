import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";
import { useState } from "react";

const Input = ({ label, placeholder, ...field }) => {
  const id = nanoid();
  // if (field.required) {
  //   field.placeholder += " *";
  // }

  const [input, setInput] = useState("");

  // const handleChange = ({ target }) => {
  //   setInput(target.value);
  // };

  return (
    <div className={styles.formGroup}>
      <label
        className={`${styles.formLabel} ${
          !(label || field.value) && styles.isHidden
        }`}
        htmlFor={id}
      >
        {label || placeholder}
      </label>
      <input
        // value={input}
        // onChange={handleChange}
        className={styles.formInput}
        placeholder={placeholder}
        {...field}
        id={id}
      />
    </div>
  );
};

Input.defaultProps = {
  required: false,
  type: "text",
};

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
