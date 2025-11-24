import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

interface Item {
  id: string;
  name: string;
}

const initialState: { items: Item[] } = {
  items: [],
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    // PayloadAction<Type>: defines the type of the action payload (type of the data that will be sent with the action)
    addItem: (state, action: PayloadAction<string>) => {
      const newItem: Item = {
        id: crypto.randomUUID(),
        name: action.payload,
      };

      // createSlice does all the magic of immutability under the hood
      state.items.push(newItem);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addItemAsync.pending, () => {
        console.log("addItemAsync pending...");
      })
      .addCase(
        addItemAsync.fulfilled,
        (state, action: PayloadAction<string>) => {
          const newItem: Item = {
            id: crypto.randomUUID(),
            name: action.payload,
          };

          state.items.push(newItem);
        }
      );
  },
});

// Asyncronous example
export const addItemAsync = createAsyncThunk(
  "items/addItemAsync",
  async (name: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return name;
  }
);
export const { addItem, removeItem } = itemSlice.actions;

export default itemSlice.reducer;
