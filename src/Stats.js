const Stats = ({ things }) => {
  if (!things.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list❤🚀</em>
      </p>
    );
  const numItems = things.length;
  const packedItems = things.filter((things) => things.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : ` You have ${numItems} items on your list and you already selected
        ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
