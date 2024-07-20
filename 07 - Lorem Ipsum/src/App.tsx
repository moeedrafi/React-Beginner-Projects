import { FormEvent, useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let amount = Number(count);

    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  };

  return (
    <div className="mt-2 flex flex-col items-center justify-center">
      <h1>Lorem Paragraph Generator</h1>
      <form
        className="mt-3 flex items-center justify-center gap-x-2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          className="border bg-neutral-300 px-2 py-2 w-12"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 rounded-md p-2 text-white"
        >
          Generate
        </button>
      </form>
      {text.map((item, index) => {
        return (
          <p className="p-2" key={index}>
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default App;
