import { removeItem } from "../redux-toolkit/slices/itemSlice";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hooks";

export default function ItemList() {
  const items = useAppSelector((state) => state.mainItems.items);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
