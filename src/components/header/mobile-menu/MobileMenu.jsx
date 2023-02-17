import Navs from "./Navs";
import Search from "./Search";

export default function MobileMenu() {
  return (
    <div className="flex flex-col p-3 lg:hidden  dark:bg-gray-900 dark:text-gray-100 absolute right-0 ">
      <div className="space-y-3">
        <Search />
        <Navs />
      </div>
      {/* <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          alt=""
          className="w-12 h-12 rounded-lg dark:bg-gray-500"
        />
        <div>
          <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
          <span className="flex items-center space-x-1">
            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">
              View profile
            </a>
          </span>
        </div>
      </div> */}
    </div>
  );
}
