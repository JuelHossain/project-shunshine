import { useState } from "react";

export default function Banner() {
  const [type, setUserType] = useState("poster");

  return (
    <div className="h-[100px] flex justify-around  ">
      <button
        onClick={() => setUserType("getter")}
        className={
          type === "getter"
            ? "text-blue-500  flex-auto border-4 duration-300  border-blue-500 p-4 font-bold text-2xl"
            : "bg-blue-500 p-4 font-bold text-2xl"
        }
        type="button"
      >
        Get A Job
      </button>
      <button
        onClick={() => setUserType("poster")}
        className={
          type === "poster"
            ? "text-blue-500  flex-auto border-4 duration-300 border-blue-500 p-4 font-bold text-2xl"
            : "bg-blue-500 p-4 font-bold text-2xl"
        }
        type="button"
      >
        Post A Job
      </button>
    </div>
  );
}
