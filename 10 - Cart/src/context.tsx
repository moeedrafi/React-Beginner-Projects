import cartItems from "./data";
import { reducer } from "./reducer";
import { AppContextType, State } from "./types";
import { createContext, useContext, useEffect, useReducer } from "react";

interface AppProviderProps {
  children: React.ReactNode;
}

const initialState: State = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

// Context
export const AppContext = createContext<AppContextType | undefined>(undefined);
export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobal must be used within a AppProvider");
  }
  return context;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increase = (id: number) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id: number) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const toggleAmount = (id: number, type: "inc" | "dec") => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, increase, decrease, toggleAmount }}
    >
      {children}
    </AppContext.Provider>
  );
};
