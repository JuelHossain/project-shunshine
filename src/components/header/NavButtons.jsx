import { Link, useLocation } from "react-router-dom";
import navbuttons from "./navs";

export default function NavButtons() {
  const { pathname } = useLocation();
  const navs = navbuttons.map(({ name, link }) => {
    const match = pathname === link;
    return (
      <li key={name} className="flex">
        <Link
          rel="noopener noreferrer"
          to={link}
          className={`flex items-center px-4 py-2 rounded -mb-1 border border-violet-400 dark:border-transparent text-violet-100 capitalize dark:border-violet-400 ${
            match && "bg-violet-500"
          }`}
        >
          {name}
        </Link>
      </li>
    );
  });
  return <ul className="items-stretch hidden space-x-3 lg:flex">{navs}</ul>;
}
