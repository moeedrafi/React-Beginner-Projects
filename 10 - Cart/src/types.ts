export type AppContextType = {
  loading: boolean;
  cart: CartItem[];
  total: number;
  amount: number;
  clearCart: () => void;
  remove: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  toggleAmount: (id: number, type: "inc" | "dec") => void;
};

export type CartItem = {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
};

export type State = {
  loading: boolean;
  cart: CartItem[];
  total: number;
  amount: number;
};

export type Action =
  | { type: "CLEAR_CART" }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREASE"; payload: number }
  | { type: "DECREASE"; payload: number }
  | { type: "GET_TOTALS" }
  | { type: "DISPLAY_ITEMS"; payload: CartItem[] }
  | { type: "TOGGLE_AMOUNT"; payload: { id: number; type: "inc" | "dec" } };
