interface ListProps {
  people: Person[];
}

interface Person {
  id: number;
  name: string;
  age: number;
  image: string;
}

const List = ({ people }: ListProps) => {
  return (
    <>
      <div>
        {people.map((item) => (
          <div className="flex gap-x-2 mb-5">
            <img
              src={item.image}
              className="rounded-full w-[80px] h-[80px] object-cover"
            />
            <div className="flex flex-col justify-center">
              <h1 className="font-medium text-2xl">{item.name}</h1>
              <p className="font-light">{item.age} years</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
