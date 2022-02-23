import React, { useState } from "react";

import PlayerForm from "./components/PlayerForm";
import Players from "./components/Players";

const initialFormValues = {
  nickname: "",
  name: "",
  email: "",
  role: "",
};

function App() {
  const [player, setPlayer] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  console.log(player);
  const onSubmit = () => {
    setPlayer([formValues, ...player]);
    setFormValues(initialFormValues);
  };

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  console.log(player);

  return (
    <div className="App">
      <h1>Players Inf</h1>
      <PlayerForm values={formValues} onChange={onChange} submit={onSubmit} />
      <div className="players">
        {player.map((element, index) => {
          return (
            <Players
              nickname={element.nickname}
              name={element.name}
              email={element.email}
              role={element.role}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
