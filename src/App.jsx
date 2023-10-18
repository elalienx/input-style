// Node modules
import { useState } from "react";

// Project files
import "./styles/style.css";
import InputCheckbox from "./components/InputCheckbox";

export default function App() {
  // State
  const [check, setCheck] = useState(false);

  return (
    <div className="App">
      <h1>Input style components</h1>
      <p>
        This project will serve as a mini repository or even library of styled
        components.
      </p>
      <p>Item is checked? {check ? "yup" : "nope"}</p>
      <InputCheckbox
        settings={{ label: "Click here to agree" }}
        state={[check, setCheck]}
      />
    </div>
  );
}
