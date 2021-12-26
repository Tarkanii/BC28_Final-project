import s from "./CreateTask.module.scss";
import Input from "../../../shared/components/Input/Input";
import InputAttr from "../../../shared/components/Input/InputAttr";
import SubmitButton from "../../../shared/components/Buttons/submitButton";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/sprints/sprints-operations";
import useForm from "../../../shared/hooks/useForm";

export default function CreateTask({onClick}) {
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const dataToSend = {
            name: data.name,
            scheduledHours: Number(data.hours)
        }
      dispatch(addTask(dataToSend));
      onClick();
    };
  
    const [data, handleChange, handleSubmit] = useForm(
      {name: "", hours: 1},
      onSubmit
    );

    return (<>
       <h2 className={s.title}>Створення задачі</h2>
      <form onSubmit={handleSubmit}>
        <Input {...InputAttr.name} onChange={handleChange} value={data.name} />
        <Input
          {...InputAttr.hours}
          onChange={handleChange}
          value={data.hours}
        />
        <SubmitButton text="Готово" className={s.submitBtn} />
      </form>
      <button type="button" className={s.cancelBtn} onClick={onClick}>
        Відміна
      </button>

    </>)
};
