import { Link } from "react-router-dom";

interface CocktailProps {
  id: string;
  name: string;
  image: string;
  glass: string;
  info: string;
}

const Cocktail = ({ glass, id, image, info, name }: CocktailProps) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
