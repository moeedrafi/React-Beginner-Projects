import { useState } from "react";

interface TourProps {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  removeTour: (id: string) => void;
}

const Tour = ({ id, image, info, name, price, removeTour }: TourProps) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="bg-white rounded-lg border my-2 shadow-lg transition-all">
      <p className="absolute bg-green-500 text-white p-1 rounded-sm tracking-widest">
        ${price}
      </p>
      <img
        src={image}
        alt={name}
        className="w-[700px] h-[300px] rounded-t-lg rounded-b-none"
      />
      <div className="p-3 mb-3">
        <h4 className="px-3 text-2xl text-center font-semibold my-3">{name}</h4>

        <p className="text-neutral-400">
          {readMore ? info : info.slice(0, 150)}
          <button
            onClick={() => setReadMore(!readMore)}
            className="text-emerald-400"
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>

        <button
          onClick={() => removeTour(id)}
          className="w-full mt-4 py-1 rounded-lg border border-green-500 text-green-500 transition hover:bg-green-600 hover:text-white"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
