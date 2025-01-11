import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="w-100% h-[100px] flex justify-center gap-10 text-white">
      <NavLink name="Skills" link="skills" />
      <NavLink name="Work" link="work" />
      <NavLink name="Contact" link="contact" />
    </header>
  );
}
