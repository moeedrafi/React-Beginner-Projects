import { useState } from "react";
import data from "./data";
import Tours from "./Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
