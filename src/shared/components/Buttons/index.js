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
      <AddButton text="+" />
      <p>Graphic Button 44х44 px</p>
      <GraphicButton />
      <p>Delete Button primary 30х30 px</p>
      <DeleteButton variant="primary" />
      <p>Delete Button secondary 20х20 px</p>
      <DeleteButton variant="secondary" />
      <p>log Out Button primary 30х30 px</p>
      <LogOutButton variant="primary" />
      <p>log Out Button secondary 30х30 px</p>
      <LogOutButton variant="secondary" />
      <p>Edit Button 20х20 px</p>
      <EditButton />
      <p>Close Button 20х20 px</p>
      <CloseButton />
    </div>
  );
}

export default Buttons;
