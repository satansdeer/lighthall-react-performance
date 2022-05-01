const Item = ({ item, onItemClick }) => {
  const onClick = () => {
    onItemClick(item.id);
  };

  return (
    <li onClick={onClick}>
      {item.text}{" "}
      <input type="checkbox" checked={item.liked} />
    </li>
  );
};

function App() {
  const [items, setItems] = useState(DEFAULT_ITEMS);

  const onItemClick = (id) => {
    setItems((oldItems) =>
      oldItems.map((oldItem) =>
        oldItem.id === id
          ? { ...oldItem, liked: !oldItem.liked }
          : oldItem
      )
    );
  };

  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onItemClick={onItemClick}
        />
      ))}
    </ul>
  );
}
