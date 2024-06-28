const Items = ({ item, onAddDelete, onAddCheckbox }) => {
  return (
    <div>
      <li>
        <span>
          <input
            type="checkbox"
            value={item.packed}
            onChange={() => onAddCheckbox(item.id)}
          />
        </span>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onAddDelete(item.id)}>❌</button>
      </li>
    </div>
  );
};
export default Items;
