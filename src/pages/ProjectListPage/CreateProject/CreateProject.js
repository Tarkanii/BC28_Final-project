import s from "./CreateProject.module.scss";
import CloseButton from "../../../shared/components/Buttons/closeButton";
import Input from "../../../shared/components/Input/Input";
import InputAttr from "../../../shared/components/Input/InputAttr";
import SubmitButton from "../../../shared/components/Buttons/submitButton";
import useForm from "../../../shared/hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../../../redux/projects/projects-operations";
import { fetchEmail, getUserId } from "../../../redux/auth/auth-selectors";

export default function CreateProject({ onClick }) {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId)
  const onSubmit = (data) => {
    dispatch(addProject(data));
    onClick();
  };

  const [data, handleChange, handleSubmit] = useForm(
    { name: "", description: "" , owner:userId},
    onSubmit
  );

  return (
    <>
      <h2 className={s.title}>Створення проекту</h2>
      <form onSubmit={handleSubmit}>
        <Input {...InputAttr.name} onChange={handleChange} value={data.name} />
        <Input
          {...InputAttr.description}
          onChange={handleChange}
          value={data.description}
        />
        <SubmitButton text="Готово" className={s.submitBtn} />
      </form>
      <button type="button" className={s.cancelBtn} onClick={onClick}>
        Відміна
      </button>
    </>
  );
}
