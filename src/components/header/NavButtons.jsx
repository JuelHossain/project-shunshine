import { Link } from "react-router-dom";

export default function NavButtons() {
  const navbuttons = [
    { name: "home", link: "/" },
    { name: "about", link: "/about" },
    { name: "contact", link: "/contact" },
  ];
  const navs = navbuttons.map(({ name, link }) => (
    <Link className="bg-red-500 px-4 py-2 rounded-md" to={link} key={name}>
      {name}
    </Link>
  ));
  return <div className="flex gap-4 text-2xl font-bold capitalize text-white ">{navs}</div>;
}
