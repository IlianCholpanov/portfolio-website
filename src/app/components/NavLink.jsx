import { Link as ScrollLink } from "react-scroll";

const NavLink = ({ href, title }) => {
  return (
    <ScrollLink
      to={url}
      smooth={true}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
