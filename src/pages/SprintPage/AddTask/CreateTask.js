import s from "./CreateTask.module.scss";
import Input from "../../../shared/components/Input/Input";
import InputAttr from "../../../shared/components/Input/InputAttr";
import SubmitButton from "../../../shared/components/Buttons/submitButton";
import { useDispatch, useSelector} from "react-redux";
import { addTask } from "../../../redux/sprints/sprints-operations";
import useForm from "../../../shared/hooks/useForm";
import { getUserId } from "../../../redux/auth/auth-selectors";

export default function CreateTask({onClick}) {
    const dispatch = useDispatch();
const userId = useSelector(getUserId);
    const onSubmit = (data) => {
        const dataToSend = {
            name: data.name,
            scheduledHours: Number(data.hours),
            owner:userId
        }
      dispatch(addTask(dataToSend));
      onClick();
    };
  
    const [data, handleChange, handleSubmit] = useForm(
      {name: "", hours: 0},
      onSubmit
    );

    return (<>
       <h2 className={s.title}>Creating a task</h2>
      <form onSubmit={handleSubmit}>
        <Input {...InputAttr.name} placeholder="Task name" onChange={handleChange} value={data.name} />
        <Input
          {...InputAttr.hours}
          placeholder="Scheduled hours"
          onChange={handleChange}
          value={data.hours}
        />
        <SubmitButton text="Ready" className={s.submitBtn} />
      </form>
      <button type="button" className={s.cancelBtn} onClick={onClick}>
        Cancel
      </button>

    </>)
};
