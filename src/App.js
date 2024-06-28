import Form from "./Form";
import "./index.css";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

function App() {
  const [things, setThings] = useState([]);

  function onAddThings(materials) {
    setThings((things) => [...things, materials]);
  }

  // onAddThings(something);

  const HandleDelete = (id) => {
    setThings((things) => things.filter((remove) => remove.id !== id));
  };

  const handleCheckbox = (id) => {
    setThings((things) =>
      things.map((things) =>
        things.id === id ? { ...things, packed: !things.packed } : things
      )
    );
  };

  const handleClear = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setThings([]);
  };

  return (
    <div className="App">
      <Logo />
      <Form onHandleAddThings={onAddThings} />
      <PackingList
        things={things}
        onAddDelete={HandleDelete}
        onAddCheckbox={handleCheckbox}
        onAddClear={handleClear}
      />
      <Stats things={things} />
    </div>
  );
}

export default App;
