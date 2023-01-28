import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faReddit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

interface Social {
  href: string;
  icon: IconDefinition;
}

const socials: Social[] = [
  {
    href: "https://github.com/marinofranz",
    icon: faGithub,
  },
  {
    href: "https://twitter.com/MarinoCodes",
    icon: faTwitter,
  },
  {
    href: "https://www.reddit.com/user/Mundane_Marionberry4",
    icon: faReddit,
  },
];

export default function Footer() {
  return (
    <div className="py-6 mb-2">
      <hr className="mt-3 h-px bg-white/20 border-0" />
      <div className="flex items-center justify-between mt-4">
        <p className="opacity-90">
          Marino.Codes -{" "}
          <span className="font-semibold">{new Date().getFullYear()}</span>
        </p>
        <div className="flex items-center space-x-2">
          {socials.map((social, id) => (
            <Link href={social.href} target="_blank" key={id}>
              <FontAwesomeIcon
                size="lg"
                icon={social.icon}
                className="hover:opacity-90 transition-opacity"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
