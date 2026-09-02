import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#0a1128]/70 sm:text-xl rounded md:p-0 hover:text-[#1282a2]"
    >
      {title}
    </Link>
  );
};

export default NavLink;