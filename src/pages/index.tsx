import axios from "axios";
import { InferGetServerSidePropsType, NextPage } from "next";
import { motion } from "framer-motion";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faJs,
  faDocker,
  faCloudflare,
  faHtml5,
  faCss3,
  faNodeJs,
  faYarn,
  faVuejs,
  faUbuntu,
  faTrello,
  faSass,
  faReact,
  faMarkdown,
  faGithub,
  faGit,
  faCpanel,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/layout";
import { NextSeo } from "next-seo";

export const getServerSideProps = async () => {
  const { data } = await axios.get(
    "https://gh-pinned-repos.egoist.dev/?username=marinofranz"
  );

  return {
    props: {
      pinned: data,
    },
  };
};

const knowledge: Software[] = [
  {
    name: "JavaScript",
    icon: faJs,
  },
  {
    name: "Docker",
    icon: faDocker,
  },
  {
    name: "Cloudflare",
    icon: faCloudflare,
  },
  {
    name: "HTML",
    icon: faHtml5,
  },
  {
    name: "CSS",
    icon: faCss3,
  },
  {
    name: "Node.js",
    icon: faNodeJs,
  },
  {
    name: "Yarn",
    icon: faYarn,
  },
  {
    name: "Vue.js",
    icon: faVuejs,
  },
  {
    name: "Ubuntu",
    icon: faUbuntu,
  },
  {
    name: "Trello",
    icon: faTrello,
  },
  {
    name: "Sass",
    icon: faSass,
  },
  {
    name: "React",
    icon: faReact,
  },
  {
    name: "Markdown",
    icon: faMarkdown,
  },
  {
    name: "GitHub",
    icon: faGithub,
  },
  {
    name: "Git",
    icon: faGit,
  },
  {
    name: "cPanel",
    icon: faCpanel,
  },
];

const jobs: Job[] = [
  {
    name: "Honky",
    href: "https://honky.tools",
    position: "Project Manager",
    start: "December 2022",
    end: null,
  },
  {
    name: "Airbridge Group",
    position: "Team Lead",
    href: "#",
    start: "April 2023",
    end: null,
  },
  {
    name: "PartydoosMedia Studios",
    href: "https://www.partydoosmedia.com",
    position: "Development Team",
    start: "November 2021",
    end: "June 2023",
  },
  {
    name: "REYFM",
    position: "Development",
    href: "https://www.reyfm.de",
    start: "December 2021",
    end: "April 2022",
  },
];

interface Software {
  name: string;
  icon: IconDefinition;
}

interface Job {
  name: string;
  position: string;
  href: string;
  start: string;
  end: string | null;
}

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
const Home: NextPage<Props> = ({ pinned }) => {
  return (
    <Layout>
      <NextSeo
        title="MarinoCodes"
        description="Marino's Portfolio"
        canonical="https://marino.codes"
        themeColor="#000"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://marino.codes/",
          title: "MarinoCodes",
          description: "Marino's Portfolio",
          siteName: "MarinoCodes",
        }}
        twitter={{ handle: "@MarinoCodes", site: "@MarinoCodes" }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/memoji_laptop_blue.png",
          },
        ]}
      />
      <div className="space-y-10">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">Hey there, I'm Marino 👋</h1>
          <p className="opacity-90">
            I am an Icelandic full-stack developer. Programming piques my
            attention, and I find delight in writing code. Rather than frontend
            programming, I am mostly interested in backend development. In
            addition, I am quite interested in aviation.
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Aviation 🛫</h1>
          <p className="opacity-90">
            In addition to being a developer, I also enjoy flying and plan to
            apply to a flight academy soon. I've been flying in flight
            simulators both visually and with instruments, and it is truly
            astonishing what an airplane is capable of. That's something; I've
            also been practicing air traffic control simulation. As you can
            undoubtedly tell, I have a great deal of interest in flying.
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Knowledge 💡</h1>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {knowledge.map((software, id) => (
              <div className="flex items-center space-x-2" key={id}>
                <FontAwesomeIcon fixedWidth icon={software.icon} />
                <p>{software.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Career 💼</h1>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            {jobs.map((job, id) => (
              <motion.a
                className="bg-white/5 border border-white/10 border-b-4 cursor-pointer p-3 py-4 rounded-lg"
                key={id}
                whileTap={{ scale: 0.98 }}
                href={job.href}
                target="_blank"
              >
                <p className="font-bold">{job.name}</p>
                <p>{job.position}</p>
                <p className="opacity-80">
                  {job.start} - {job.end === null ? "Present" : job.end}
                </p>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Pinned Repositories 📌</h1>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            {pinned.map((pin: any, id: number) => (
              <motion.a
                className={`space-x-3 bg-white/5 border border-white/10 border-b-4 cursor-pointer p-3 py-4 rounded-lg`}
                key={id}
                whileTap={{ scale: 0.98 }}
                href={pin.link}
                target="_blank"
              >
                <p className="font-semibold">
                  <span className="opacity-80 font-normal">{pin.owner} </span>/{" "}
                  {pin.repo}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
