import React, { useState } from "react";
// import "./styles.css";
import Dropdown from "./Dropdown.js";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
    console.log("selectedOption :", option);
  };

  return (
    <div className="App">
      <h1>Dropdown Component Example</h1>
      <Dropdown
        options={["option 1", "option 2", "option 3"]}
        onSelect={handleSelect}
      />
      <p>selected option : {selectedOption} </p>
    </div>
  );
}
