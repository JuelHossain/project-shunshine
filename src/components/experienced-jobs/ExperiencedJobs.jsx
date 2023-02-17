import Cards from "../freshers-jobs/Cards";
import experienced from "./experienced";

export default function ExperiencedJobs() {
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Experienced Jobs</h2>
          <p className="font-serif text-sm dark:text-gray-400">
            All experienced people are welcome here, you can find freshers job here.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {experienced.map((job) => (
            <Cards key={Math.random()} {...job} />
          ))}
        </div>
        <button className="text-center w-full bg-violet-300 text-black font-semibold text-xl  p-4" type="button">
          See All
        </button>
      </div>
    </section>
  );
}
