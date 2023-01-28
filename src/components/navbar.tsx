import Activity from "./activity";
import Link from "next/link";

const links: Link[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

interface Link {
  name: string;
  href: string;
}

export default function Navbar() {
  return (
    <div className="py-6 mb-2">
      <div className="flex flex-row space-x-2 items-center">
        <div className="flex-1">
          <div className="flex space-x-4">
            {links.map((link) => (
              <div
                key={link.name}
                className="font-semibold cursor-pointer hover:text-white/60 transition-all"
              >
                <Link href={link.href}>{link.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <Activity />
      </div>
      <hr className="mt-3 h-px bg-white/20 border-0" />
    </div>
  );
}
