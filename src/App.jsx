// Node modules
import { useState } from "react";

// Project files
import "./styles/style.css";
import InputCheckbox from "./components/InputCheckbox";
import InputRange from "./components/InputRange";
import myFormulary from "./data/myFormulary.json";

export default function App() {
  // State
  const [check, setCheck] = useState(false);
  const [range, setRange] = useState(5);

  return (
    <div className="App">
      <h1>Input style components</h1>
      <p>
        This project will serve as a mini repository or even library of styled
        components.
      </p>

      {/* Checkbox */}
      <h2>Checkbox</h2>
      <p>Item is checked? {check ? "yup ✅" : "nope ❌"}</p>
      <InputCheckbox settings={myFormulary.terms} state={[check, setCheck]} />

      {/* Range slider */}
      <h2>Range slider</h2>
      <InputRange settings={myFormulary.guests} state={[range, setRange]} />
    </div>
  );
}
