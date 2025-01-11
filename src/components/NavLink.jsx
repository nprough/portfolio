import { motion } from "framer-motion";

const NavLink = ({ name, link }) => {
  return (
    <motion.a
      href={"#" + link}
      onTap={{ scale: 1.1 }}
      className="flex flex-col align-middle justify-center text-xl font-bold"
    >
      {name}
    </motion.a>
  );
};

export default NavLink;
