import { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/16/solid";

interface QuestionProps {
  title: string;
  info: string;
}

const Question = ({ title, info }: QuestionProps) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <div className="m-5 bg-white shadow-sm border p-2 ">
      <div className="flex items-center justify-between">
        <h4 className="text-2xl">{title}</h4>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <MinusCircleIcon className="size-6" />
          ) : (
            <PlusCircleIcon className="size-6" />
          )}
        </button>
      </div>
      {showInfo && <p className="text-zinc-400 line-clamp-2">{info}</p>}
    </div>
  );
};

export default Question;
