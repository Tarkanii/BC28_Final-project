import s from "../ProjectListPage/CreateProject/CreateProject.module.scss";
import Input from "../../shared/components/Input/Input";
import InputAttr from "../../shared/components/Input/InputAttr";
import SubmitButton from "../../shared/components/Buttons/submitButton";
import useForm from "../../shared/hooks/useForm";
import { useDispatch } from "react-redux";
import { addPeople } from "../../redux/projects/projects-operations";
import { useSelector } from "react-redux";
import { getPeople } from "../../redux/projects/projects-selectors";


export default function AddPeople({ onClick,projectId }) {
  const dispatch = useDispatch();
const people = useSelector(getPeople)
  const onSubmit = (data) => {
    dispatch(addPeople({projectId,data}));
  };  

  const [data, handleChange, handleSubmit] = useForm(
    { email: ""},
    onSubmit
  );

  return (
    <>
      <h2 className={s.title}>Додати людей</h2>
      <form onSubmit={handleSubmit}>
        <Input {...InputAttr.email} onChange={handleChange} value={data.email} />
        <SubmitButton text="Готово" className={s.submitBtn} />
      </form>
      <h3>Додані користувачі:</h3>
      <ul>
        {people.map(el=><li>{el.email}</li>)}
      </ul>
      <button type="button" className={s.cancelBtn} onClick={onClick}>
        Відміна
      </button>
    </>
  );
}
