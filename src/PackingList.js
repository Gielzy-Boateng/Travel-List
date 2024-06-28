import { useState } from "react";
import Items from "./Items";

const PackingList = ({ things, onAddDelete, onAddCheckbox, onAddClear }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedThings;

  if (sortBy === "input") sortedThings = things;

  if (sortBy === "description")
    sortedThings = things
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedThings = things
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedThings.map((item) => (
          <Items
            item={item}
            key={item.id}
            onAddDelete={onAddDelete}
            onAddCheckbox={onAddCheckbox}
          />
        ))}
      </ul>
      <select
        className="actions"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="input">Sort By Input Order</option>
        <option value="description">Sort By Description</option>
        <option value="packed">Sort By Packed Status</option>
      </select>
      <button onClick={onAddClear}>Clear List</button>
    </div>
  );
};

export default PackingList;
