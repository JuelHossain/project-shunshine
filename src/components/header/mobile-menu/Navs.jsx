import { Link } from "react-router-dom";
import navbuttons from "../navs";

export default function Navs() {
  const buttons = navbuttons.map(({ name, Icon, link }) => (
    <Link key={name} to={link} className="rounded-sm flex gap-2 items-center capitalize">
      <Icon />
      <span>{name}</span>
    </Link>
  ));
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-2">{buttons}</div>
    </div>
  );
}
