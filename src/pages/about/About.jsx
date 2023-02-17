import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://source.unsplash.com/600x200"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            The Best
            <span className="dark:text-violet-400">Job </span>Hunting Website
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            we are the best job hunting websites
            <br className="hidden md:inline lg:hidden" />
            our goal is , get you a job. and make you happy
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Login Now
            </Link>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
