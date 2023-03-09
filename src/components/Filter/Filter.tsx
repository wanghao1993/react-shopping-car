const Filter = () => {
  const state = {
    items: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
  };
  return (
    <div id="filter">
      <div style={{ fontWeight: 500 }}>
        Size:
        <div className="size-items">
          {state.items.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
