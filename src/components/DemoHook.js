import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/findNthPrime";
import Demo2 from "./Demo2";

const DemoHook = () => {
  const [text, setText] = useState(0);
  const [isDark, setIsDark] = useState(false);
  //   let prime = findNthPrime(text);
  let prime = useMemo(() => findNthPrime(text), [text]);
  console.log(text);
  return (
    <>
      <div
        className={`m-4 p-4 w-96 h-96 border border-blue-700 ${
          isDark ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <div className="text-center">
          <button
            className="bg-green-300 p-2 m-2 rounded-md"
            onClick={() => setIsDark(!isDark)}
          >
            Toggle
          </button>
        </div>
        <div>
          <input
            className="m-2 p-2 border border-black text-lg"
            type="number"
            name=""
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <p className="m-2 text-2xl font-semibold">{prime}</p>
      </div>
      <Demo2 />
    </>
  );
};

export default DemoHook;
