import { IconType } from "react-icons";

export interface Data {
  img: string;
  title: string;
  star: IconType;
  reviews: string;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string;
  category: string;
}

export interface CardProps {
  img: string;
  title: string;
  star: unknown;
  reviews: string;
  prevPrice: string;
  newPrice: string;
}

export interface CategoryProps {
  handleChange: () => void;
}

export interface PriceProps {
  handleChange: () => void;
}

export interface ColorsProps {
  handleChange: () => void;
}

export interface InputProps {
  title: string;
  value: number | string;
  name: string;
  color?: string;
  handleChange?: () => void;
}

export interface SidebarProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface NavProps {
  query: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RecommendedProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ProductsProps {
  result: JSX.Element[];
}

export interface ButtonProps {
  onClickHandler: () => void;
  value: string;
  title: string;
}
