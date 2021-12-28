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
  const onSubmit = (data) => {
    if (people.find(item=>item.email===data.email)) {
      return;
    }
    return dispatch(addPeople({projectId,data}));
  };
  const submitCheck = (e)=>{
    if (people.find(item=>item.email===data.email)) {
     
      e.target.reset();
      const label = e.target.firstChild.firstChild;
      const initialLabel = label.innerHTML;
      console.log(initialLabel);
      label.innerHTML="This member is already added";
      label.classList.add(styles.error)
      setTimeout(()=>{
        label.innerHTML=initialLabel;
        label.classList.remove(styles.error);
      },5000)
      console.log(e.target.firstChild.firstChild);

      return ;
    }
  }

  const [data, handleChange, handleSubmit] = useForm({ email: "" }, onSubmit);
  return (
    <>
      <h2 className={s.title}>Add people</h2>
      <form onSubmit={(e)=>{
        submitCheck(e);
        handleSubmit(e)}}>
        <Input
        className={styles.input}
          {...InputAttr.email}
          onChange={handleChange}
          value={data.email.length?data.email:""}
        />
        <h3 className={styles.memberTitle}>Added members:</h3>
        <ul className={styles.memberList}>
          {people.map((el) => {
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
