import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="h-screen flex items-center justify-center">
        <div className="bg-white p-5 rounded-lg w-[500px]">
          <h3 className="text-3xl mb-5">{people.length} Birthdays Today</h3>
          <List people={people} />
          <button
            className="bg-fuchsia-500 rounded-sm text-white p-1 w-full"
            onClick={() => setPeople([])}
          >
            Clear All
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
