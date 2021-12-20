import Input from "./Input.jsx";
import InputAttr from "./InputAttr.jsx";

export { Input, InputAttr };

function Inputs() {
  return (
    <div>
      <br />
      <h1>Input example</h1>
      <br />
      <br />
      <Input {...InputAttr.email} name="email" required placeholder="E-mail" />
      <br />
      <br />
      <Input {...InputAttr.email} name="email" required placeholder="E-mail" />
      <br />
      <br />
      <br />
      <Input {...InputAttr.password} />
      <br />
      <br />
      <Input {...InputAttr.password} />
      <br />
      <br />
      <br />
      <Input {...InputAttr.hours} />
      <br />
      <br />
      <Input {...InputAttr.hours} />
      <br />
      <br />
    </div>
  );
}

export default Inputs;
