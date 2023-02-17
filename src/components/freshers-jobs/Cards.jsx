/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Cards({ title, location, photo, company }) {
  return (
    <article className="flex flex-col dark:bg-gray-900">
      <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={photo} />

      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs tracking-wider  hover:underline dark:text-violet-400">{company || "xyz company"}</p>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{title}</h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
          <Link to="/login" className="bg-violet-400 py-2 px-3 text-white rounded" type="button">
            {" "}
            Apply Now
          </Link>
          <span className="capitalize flex gap-2 items-center text-gray">
            <FaLocationArrow className="" />
            {location}
          </span>
        </div>
      </div>
    </article>
  );
}
