import ThemeSwitcher from "../themeToggle";
export default function Navbar() {
  return (
    <nav className="flex flex-row w-full justify-end">
      <div className="p-2 ">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
