import Input from "../../shared/components/Input/Input";
import { useState } from "react";
import useForm from "../../shared/hooks/useForm";
import styles from "./SprintListPage.module.scss";
import { SubmitButton } from "../../shared/components/Buttons";
import Datepicker from "../../shared/components/Datepicker/Datepicker";

const initialState = {
  name: "",
  duration: "",
  previous: false,
  date: "",
};

const AddNewSprintForm = () => {
  const [checked, setChecked] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
  };
  const [data, handleChange, handleSubmit] = useForm(initialState, onSubmit);

  const toggleCheck = () => {
    setChecked(!checked);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.Form}>
          <h3 className={styles.FormTitle}>Creating a sprint</h3>
          <div className={styles.SprintInput}>
            <Input
              value={data.name}
              onChange={handleChange}
              name="name"
              placeholder="The name of the sprint"
            />
          </div>
          <div className={styles.radioBox}>
            <input
              type="radio"
              id="radioBtn"
              checked={checked}
              className={`${styles.radioButton} ${styles.visuallyHidden}`}
            />
            <label htmlFor="id" className={styles.radioLabel}>
              <span className={styles.customRadio} onClick={toggleCheck}></span>
              <span className={styles.RadioText}>Previous days</span>
            </label>
          </div>

          <div className={styles.SprintInputDate}>
            <Datepicker onChange={handleChange} />
            <Input
              value={data.duration}
              name="duration"
              onChange={handleChange}
              placeholder="Duration"
            />
          </div>
          <div className={styles.ReadyBtn}>
            <SubmitButton text="Ready" />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddNewSprintForm;
