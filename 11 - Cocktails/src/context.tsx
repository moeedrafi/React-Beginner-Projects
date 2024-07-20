import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

interface AppProviderProps {
  children: React.ReactNode;
}

interface Cocktail {
  id: string;
  name: string;
  image: string;
  glass: string;
  info: string;
}

interface RawCocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strGlass: string;
  strAlcoholic: string;
}

interface AppContextProps {
  loading: boolean;
  cocktails: Cocktail[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);
export const useGlobalContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeModeProvider");
  }
  return context;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("a");

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newCocktails = drinks.map((item: RawCocktail) => {
          const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            glass: strGlass,
            info: strAlcoholic,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{ cocktails, loading, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
