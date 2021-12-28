import s from "../../ProjectListPage/CreateProject/CreateProject.module.scss";
import styles from "./AddPeople.module.scss"
import Input from "../../../shared/components/Input/Input";
import InputAttr from "../../../shared/components/Input/InputAttr";
import SubmitButton from "../../../shared/components/Buttons/submitButton";
import useForm from "../../../shared/hooks/useForm";
import { useDispatch } from "react-redux";
import { addPeople } from "../../../redux/projects/projects-operations";
import { useSelector } from "react-redux";
import { getPeople } from "../../../redux/projects/projects-selectors";
export default function AddPeople({ onClick, projectId }) {
  const dispatch = useDispatch();
  const people = useSelector(getPeople);
  const onSubmit = (e,data) => {
    console.log(people);
    if (people.find(item=>item.email===data.email)) {
      return;
    }
    return dispatch(addPeople({projectId,data}));
  };

  const [data, handleChange, handleSubmit] = useForm({ email: "" }, onSubmit);

  return (
    <>
      <h2 className={s.title}>Add people</h2>
      <form onSubmit={handleSubmit}>
        <Input
        className={styles.input}
          {...InputAttr.email}
          onChange={handleChange}
          value={data.email}
        />
        <h3 className={styles.memberTitle}>Added members:</h3>
        <ul className={styles.memberList}>
          {people.map((el) => {
            console.log(el);
            return <li key={el._id} className={styles.membersItem}>{el.email}</li>
        })}
        </ul>
        <SubmitButton text="Ready" className={s.submitBtn} />
        <button type="button" className={s.cancelBtn} onClick={onClick}>
          Cancel
        </button>
      </form>
    </>
  );
}
