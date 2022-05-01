import { createContext, FC, useState, useCallback, useContext } from "react";

const ItemsContext = createContext({});

const DEFAULT_ITEMS = [
  { text: "test 0", id: 0, liked: false },
  { text: "test 1", id: 1, liked: false },
  { text: "test 2", id: 2, liked: false },
  { text: "test 3", id: 3, liked: false },
  { text: "test 4", id: 4, liked: false },
  { text: "test 5", id: 5, liked: false },
];

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(DEFAULT_ITEMS);

  const onItemClick = useCallback((id) => {
    setItems((oldItems) =>
      oldItems.map((oldItem) =>
        oldItem.id === id ? { ...oldItem, liked: !oldItem.liked } : oldItem
      )
    );
  }, []);

  return (
    <ItemsContext.Provider value={{ items, onItemClick }}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItemsContext = () => useContext(ItemsContext);
