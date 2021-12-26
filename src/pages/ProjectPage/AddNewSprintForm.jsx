import Input from "../../shared/components/Input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSprint } from "../../redux/sprints/sprints-operations";
import useForm from "../../shared/hooks/useForm";
import styles from "./SprintListPage.module.scss";
import { SubmitButton } from "../../shared/components/Buttons";
import Datepicker from "../../shared/components/Datepicker/Datepicker";
import { addDays, format } from "date-fns";

const initialState = {
  name: "",
  duration: "",
  previous: false,
  date:  format(new Date(), "yyyy-MM-dd")
};

const AddNewSprintForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const onSubmit = (data) => {
    const [year, month, day] = data.date.split("-");

    const date = new Date(year, month - 1, day);
    const formData = { name: data.name };
    if (data.previous) {
      formData.endDate = data.date;
      formData.startDate = format(addDays(date, -+data.duration), "yyyy-MM-dd");
    }
    if (!data.previous) {
      formData.startDate = data.date;
      formData.endDate = format(addDays(date, +data.duration), "yyyy-MM-dd");
    }
    dispatch(addSprint({
       name: data.name,
       startDate: formData.startDate,
       endDate: formData.endDate,
        duration: Number(data.duration),
      }));


    // addNewSprint({
    //   start: formData.startDate,
    //   end: formData.endDate,
    //   duration: date.duration,
    // });
    closeModal();
  };

  const [data, handleChange, handleSubmit, setData] = useForm(
    initialState,
    onSubmit
  );

  const toggleCheck = () => {
    setData((prevData) => ({ ...prevData, previous: !prevData.previous }));
  };

  return (
    <>
      <form className={styles.SprintForm} onSubmit={handleSubmit}>
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
              name="previous"
              type="checkbox"
              id="radioBtn"
              checked={data.previous}
              // onChange={handleChange}
              className={`${styles.radioButton} ${styles.visuallyHidden}`}
            />
            <label htmlFor="id" className={styles.radioLabel}>
              <span className={styles.customRadio} onClick={toggleCheck}></span>
              <span className={styles.RadioText}>Previous days</span>
            </label>
          </div>

          <div className={styles.SprintInputDate}>
            <Datepicker onChange={handleChange} name="date" />
            <Input
              value={data.duration}
              name="duration"
              onChange={handleChange}
              placeholder="Duration"
              className={styles.durationInput}
            />
          </div>
          <div className={styles.ReadyBtn}>
            <SubmitButton text="Ready" />
          </div>
          <div className={styles.Cancel}>
            <button
              type="button"
              onClick={closeModal}
              className={styles.CancelBtn}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddNewSprintForm;
