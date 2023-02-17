import Authentication from "./auth/Authentication";
import Logo from "./Logo";
import NavButtons from "./NavButtons";

export default function Header() {
  return (
    <div className="bg-red-400 p-4 flex items-center  justify-between">
      <Logo />
      <NavButtons />
      <Authentication />
    </div>
  );
}
