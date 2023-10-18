// Node modules
import { useState } from "react";

// Project files
import "./style.css";

export default function App() {
  // State
  const [check, setCheck] = useState(false);

  return (
    <div className="App">
      <h1>Input style components</h1>
      <p>Item is checked? {check ? "yup" : "nope"}</p>
      {/* Checkbox */}
      <label className="input-field checkbox">
        <input
          type="checkbox"
          value={check}
          onChange={() => setCheck(!check)}
        />
        Click here to agree with the terms and conditions
      </label>
    </div>
  );
}
