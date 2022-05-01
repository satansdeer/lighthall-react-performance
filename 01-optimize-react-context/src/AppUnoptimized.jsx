import { memo } from "react";
import { ItemsProvider, useItemsContext } from "./ItemsContextUnoptimized";

const Item = memo(({ text, id, liked }) => {
  const { onItemClick } = useItemsContext();

  const onClick = () => {
    onItemClick(id);
  };

  return (
    <li onClick={onClick}>
      {text} <input type="checkbox" checked={liked} />
    </li>
  );
});

const ItemsList = memo(() => {
  const { items } = useItemsContext();

  return (
    <ul>
      {items.map(({ id, liked, text }) => (
        <Item key={id} liked={liked} id={id} text={text} />
      ))}
    </ul>
  );
});

function App() {
  return (
    <ItemsProvider>
      <ItemsList />
    </ItemsProvider>
  );
}

export default App;
