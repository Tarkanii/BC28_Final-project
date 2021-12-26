import { useDispatch } from "react-redux";
import { renameProject } from "../../../redux/projects/projects-operations";
import { renameSprint } from "../../../redux/sprints/sprints-operations";
import Input from "../Input/Input";
import InputAttr from "../Input/InputAttr";
import useForm from "../../hooks/useForm";

export default function ChangeName({onClick,isSprint}) {
    const [data, handleChange, handleSubmit] = useForm({ name: ""},onSubmit);
    const dispatch = useDispatch();

    function onSubmit (data) {
      isSprint ?  dispatch(renameSprint(data)) :  dispatch(renameProject(data));
      onClick()
    };
  
    return (
        <form onSubmit={handleSubmit}>
        <Input {...InputAttr.name} onChange={handleChange} value={data.name} />
      </form>
    )
};

