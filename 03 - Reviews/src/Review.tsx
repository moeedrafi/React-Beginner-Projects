import { useState } from "react";
import people from "./data";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const Review = () => {
  const [index, setIndex] = useState<number>(0);
  const { image, job, name, text } = people[index];

  const checkNumber = (number: number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const nextPerson = () => {
    setIndex((prevIndex) => checkNumber(prevIndex + 1));
  };

  const prevPerson = () => {
    setIndex((prevIndex) => checkNumber(prevIndex - 1));
  };

  const randomPerson = () => {
    const randomNumber = Math.floor(Math.random() * people.length);
    setIndex(checkNumber(randomNumber));
  };

  return (
    <div className="bg-white shadow-lg border max-w-[600px]">
      <div className="my-5 flex flex-col items-center justify-center gap-3">
        <img src={image} className="size-[150px] object-cover rounded-full" />
        <h4 className="capitalize font-semibold text-3xl">{name}</h4>
        <p className="text-blue-700 uppercase">{job}</p>
        <p className="text-neutral-500 px-10 text-center">{text}</p>
        <div className="flex items-center justify-center">
          <button onClick={prevPerson}>
            <ChevronLeftIcon className="size-8 text-blue-700" />
          </button>
          <button onClick={nextPerson}>
            <ChevronRightIcon className="size-8 text-blue-700" />
          </button>
        </div>
        <button
          onClick={randomPerson}
          className="bg-blue-300 text-blue-700 rounded-md px-2 py-1 hover:bg-blue-700 hover:text-blue-200 transition ease-in-out delay-50 duration-300"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Review;
