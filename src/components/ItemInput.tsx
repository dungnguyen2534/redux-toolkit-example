import { useState } from "react";
import { addItem, addItemAsync } from "../redux-toolkit/slices/itemSlice";
import { useAppDispatch } from "../redux-toolkit/hooks";

export default function ItemInput() {
  const [item, setItem] = useState("");
  const dispatch = useAppDispatch();

  const handleAddItem = () => {
    if (item.trim() === "") return;

    dispatch(addItem(item));
    setItem("");
  };

  const handleAddItemAsync = () => {
    if (item.trim() === "") return;

    dispatch(addItemAsync(item));
    setItem("");
  };

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add item</button>
      <button onClick={handleAddItemAsync}>Add item async</button>
    </div>
  );
}
