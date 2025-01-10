const NavLink = ({ name, link }) => {
  return (
    <a
      className="flex flex-col align-middle justify-center text-xl font-bold"
      href={link}
    >
      {name}
    </a>
  );
};

export default NavLink;
