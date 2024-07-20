import { useState } from "react";
import data from "./data";

const App = () => {
  const [companies, setCompanies] = useState(data);
  const [value, setValue] = useState(0);
  const { company, dates, duties, title } = data[value];

  return (
    <div className="h-full flex items-center">
      <div className="pl-80 mt-20 flex flex-col items-center gap-y-1">
        {companies.map((company, index) => (
          <button
            key={company.id}
            onClick={() => setValue(index)}
            className={`${
              index === value && "bg-green-500"
            } px-2 py-1 rounded-lg hover:border-b hover:bg-green-500 active:bg-green-500 focus:outline-none focus:bg-green-500 hover:border-green-500 transition duration-200`}
          >
            {company.company}
          </button>
        ))}
      </div>
      <div className="pl-20 mt-20 flex items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          <p className="bg-gray-200 rounded-md p-1 text-neutral-400 text-sm">
            {company}
          </p>
          <p className="font-light text-sm">{dates}</p>
          <ul>
            {duties.map((duty) => (
              <li className="list-disc">{duty}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
