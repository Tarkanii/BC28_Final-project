import s from "./CreateProject.module.scss";
import Input from "../../../shared/components/Input/Input";
import InputAttr from "../../../shared/components/Input/InputAttr";
import SubmitButton from "../../../shared/components/Buttons/submitButton";
import useForm from "../../../shared/hooks/useForm";
import { useDispatch } from "react-redux";
import { addProject } from "../../../redux/projects/projects-operations";

export default function CreateProject({ onClick }) {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addProject(data));
    onClick();
  };

  const [data, handleChange, handleSubmit] = useForm(
    { name: "", description: ""},
    onSubmit
  );

  return (
    <>
      <h2 className={s.title}>Create a project</h2>
      <form onSubmit={handleSubmit}>
        <Input {...InputAttr.name} onChange={handleChange} value={data.name} />
        <Input
          {...InputAttr.description}
          onChange={handleChange}
          value={data.description}
        />
        <SubmitButton text="Ready" className={s.submitBtn} />
      </form>
      <button type="button" className={s.cancelBtn} onClick={onClick}>
        Cancel
      </button>
    </>
  );
}
