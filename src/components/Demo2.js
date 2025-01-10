import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 10; // x will not be changing reflect in ui
  const [y, setY] = useState(0);
  const ref = useRef(0);
  return (
    <div className="m-4 p-10 w-96 h-96 border border-red-700 bg-slate-200">
      <div>
        <button
          className="bg-green-300 p-2 m-2 rounded-md"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          increase x
        </button>
        <span className="text-semibold text-xl">Let: {x}</span>
      </div>
      <div>
        <button
          className="bg-green-300 p-2 m-2 rounded-md"
          onClick={() => {
            setY(y + 1);
            console.log("..rendering");
          }}
        >
          increase y
        </button>
        <span className="text-semibold text-xl">State: {y}</span>
      </div>
      <div>
        <button
          className="bg-green-300 p-2 m-2 rounded-md"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref: ", ref);
          }}
        >
          increase ref
        </button>
        <span className="text-semibold text-xl">ref: {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
