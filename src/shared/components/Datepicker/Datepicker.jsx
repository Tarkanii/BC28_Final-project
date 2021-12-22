import { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./Datepicker.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { pickData } from "../../../../redux/calendar/summaries/summaries-operations";
import { format } from "date-fns";

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const chousenDate = format(e, "yyyy-MM-dd");

    setIsOpen(!isOpen);
    setStartDate(e);
    dispatch(
      pickData({
        date: chousenDate,
      })
    );
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  // const formatDate = (date) => {
  //   let dd = date.getDate();
  //   if (dd < 10) dd = "0" + dd;
  //   let mm = date.getMonth() + 1;
  //   if (mm < 10) mm = "0" + mm;
  //   let yyyy = date.getFullYear();
  //   return dd + "." + mm + "." + yyyy;
  // };
  //  const date = format(new Date(), "yyyy-MM-dd");
  return (
    <div className={styles.DatePickerSection}>
      {/* <span className={styles.DiaryDate}>{formatDate(startDate)}</span> */}
      <span className={styles.DiaryDate}>
        {format(startDate, "dd-MM-yyyy")}
      </span>

      <button onClick={handleClick} className={styles.DatePickerBtn}></button>
      {isOpen && (
        <DatePicker selected={startDate} onChange={handleChange} inline />
      )}
    </div>
  );
};

export default Datepicker;
