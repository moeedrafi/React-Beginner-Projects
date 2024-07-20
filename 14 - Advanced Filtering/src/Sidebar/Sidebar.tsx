import "./Sidebar.css";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import Category from "./Category/Category";
import { SidebarProps } from "../types";

const Sidebar = ({ handleChange }: SidebarProps) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1 className="sidebar-title">🛒</h1>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
