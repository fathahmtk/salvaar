import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  stock: number;
  popularity: number;
  // Add other fields if necessary
}

type ShopState = {
  products: Product[];
  totalProducts: number;
  showingProducts: number;
};

const initialState: ShopState = {
  products: [],
  totalProducts: 0,
  showingProducts: 0,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setTotalProducts: (state, action: PayloadAction<number>) => {
      state.totalProducts = action.payload;
    },
    setShowingProducts: (state, action: PayloadAction<number>) => {
      state.showingProducts = action.payload;
    },
  },
});

export const { setProducts, setTotalProducts, setShowingProducts } = shopSlice.actions;

export default shopSlice.reducer;
