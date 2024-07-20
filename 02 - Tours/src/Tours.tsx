import Tour from "./Tour";

interface ToursProps {
  tours: Tour[];
  removeTour: (id: string) => void;
}

interface Tour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

const Tours = ({ tours, removeTour }: ToursProps) => {
  return (
    <section className="w-full mx-auto max-w-[1170px]">
      <div className="text-center m-10">
        <h2 className="text-3xl mb-2">Our Tours</h2>
        <div className="w-[130px] h-[3px] mx-auto bg-[#118913]" />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:p-5">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
