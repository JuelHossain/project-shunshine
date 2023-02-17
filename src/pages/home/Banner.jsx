import { useState } from "react";

export default function Banner() {
  const [type, setUserType] = useState("poster");

  return (
    <div className="h-24 flex justify-around  ">
      <button
        onClick={() => setUserType("getter")}
        className={
          type === "getter"
            ? "text-violet-500 dark:bg-gray-800 dark:text-gray-100  flex-auto border-4 duration-300  border-violet-500 p-4 font-bold text-2xl"
            : "bg-violet-500 p-4 font-bold text-2xl"
        }
        type="button"
      >
        Get A Job
      </button>
      <button
        onClick={() => setUserType("poster")}
        className={
          type === "poster"
            ? "text-violet-500 dark:bg-gray-100 dark:text-gray-800  flex-auto border-4 duration-300 border-violet-500 p-4 font-bold text-2xl"
            : "bg-violet-500 p-4 font-bold text-2xl"
        }
        type="button"
      >
        Post A Job
      </button>
    </div>
  );
}
