import { useState } from "react";

const Form = ({ onHandleAddThings }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItems = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItems);

    onHandleAddThings(newItems);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🥰✈ trip? </h3>
      <select value={quantity} onChange={handleQuantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={handleDescription}
      />
      <button>ADD</button>
    </form>
  );
};

export default Form;
