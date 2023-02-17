import Authentication from "./auth/Authentication";
import Logo from "./Logo";
import NavButtons from "./NavButtons";

export default function Header() {
  return (
    <header className="p-4  text-violet-100 bg-violet-900">
      <div className="container flex justify-between h-16 mx-auto items-center">
        <NavButtons />
        <Logo />
        <Authentication />
      </div>
    </header>
  );
}
