import React, { useState } from "react";
import ButtonComponent from "./q2/ButtonComponent";
import InputComponent from "./q3/InputComponent";
import "./App.css";

function App() {
  const [initialValue] = useState("");

  const handleClick = () => {
    alert("You have clicked the button");
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-4">
        <InputComponent initialValue={initialValue} />
      </div>
      <div className="row justify-content-center">
        <ButtonComponent
          title={"Nurocat Button"}
          onClick={handleClick}
          isDanger={false}
          isBlock={true}
        />
      </div>
    </div>
  );
}

export default App;
