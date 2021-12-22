import AddButton from "./addButton";
import SubmitButton from "./submitButton";
import DeleteButton from "./deleteButton";
import EditButton from "./editButton";
import GraphicButton from "./graphicButton";
import LogOutButton from "./logOutButton";
import CloseButton from "./closeButton";

export {
  AddButton,
  SubmitButton,
  DeleteButton,
  EditButton,
  GraphicButton,
  LogOutButton,
  CloseButton,
};

function Buttons() {
  return (
    <div className="Buttons">
      <p>Submit Button h 44 px</p>
      <SubmitButton text="Register" />
      <p>Add Button 44х44 px</p>
      <AddButton variant="member" />
      <p>AddMember Button 20x20</p>
      <AddButton variant="item" />
      <p>Graphic Button 44х44 px</p>
      <GraphicButton />
      <p>Delete Button primary 30х30 px</p>
      <DeleteButton variant="primary" />
      <p>Delete Button secondary 20х20 px</p>
      <DeleteButton variant="secondary" />
      <p>log Out Button 30х30 px</p>
      <LogOutButton />
      <p>Edit Button 20х20 px</p>
      <EditButton />
      <p>Close Button 20х20 px</p>
      <CloseButton />
    </div>
  );
}

export default Buttons;
