import { useState } from "react";
import Question from "./Question";
import data from "./data";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-300">
      <div className="bg-white border p-5 rounded-md w-[1100px]">
        <h1 className="text-center text-3xl font-bold mb-3">Questions</h1>
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </div>
    </div>
  );
};

export default App;
