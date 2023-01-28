import { NextPage } from "next";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import { NextSeo } from "next-seo";

const Contact: NextPage = () => {
  return (
    <Layout>
      <NextSeo
        title="Contact - MarinoCodes"
        description="Marino's Portfolio"
        canonical="https://marino.codes"
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
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Contact 📥</h1>
        <p className="opacity-90">
          Send an email to{" "}
          <span className="font-semibold">me@marino.codes</span> if you want to
          contact me or if you have any questions. I'll try to respond to you as
          quickly as I can. I appreciate you visiting my website, and I hope to
          speak with you soon.
        </p>
        <motion.a
          className="bg-white/5 border border-white/10 block border-b-4 cursor-pointer p-3 rounded-lg text-center"
          whileTap={{ scale: 0.98 }}
          href="mailto:me@marino.codes"
          target="_blank"
        >
          Send email
        </motion.a>
      </div>
    </Layout>
  );
};

export default Contact;
