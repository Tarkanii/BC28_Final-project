import { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./Datepicker.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
// import { pickData } from "../../../redux/calendar/summaries/summaries-operations";
import { format } from "date-fns";

const Datepicker = ({ onChange, name }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const chosenDate = format(e, "yyyy-MM-dd");
    const result = {
      target: { value: chosenDate, name },
    };
    onChange(result);
    setIsOpen(!isOpen);
    setStartDate(e);
    // dispatch(
    //   pickData({
    //     date: chousenDate,
    //   })
    // );
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.DatePickerSection}>
      <div className={styles.DatePickerLine}>
        {format(startDate, "dd MMM")}
        <button onClick={handleClick} className={styles.DatePickerBtn}></button>
      </div>

      <div className={styles.DatePickerTable}>
        {isOpen && (
          <DatePicker
            className={styles.DatePickerWindow}
            selected={startDate}
            onChange={handleChange}
            inline
          />
        )}
      </div>
    </div>
  );
};

export default Datepicker;
