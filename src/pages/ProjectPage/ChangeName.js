import { useDispatch } from "react-redux";
import { renameProject } from "../../redux/projects/projects-operations";
import Input from "../../shared/components/Input/Input";
import InputAttr from "../../shared/components/Input/InputAttr";
import useForm from "../../shared/hooks/useForm";

export default function ChangeName({onClick}) {
    const [data, handleChange, handleSubmit] = useForm({ name: ""},onSubmit);
    const dispatch = useDispatch();

    function onSubmit (data) {
      dispatch(renameProject(data));
      onClick()
    };
  
    return (
        <form onSubmit={handleSubmit}>
        <Input {...InputAttr.name} onChange={handleChange} value={data.name} />
      </form>
    )
};

