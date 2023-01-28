import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import Footer from "../components/footer";

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {
  const { asPath } = useRouter();

  return (
    <div className="mx-auto max-w-3xl px-5">
      <Navbar />
      <AnimatePresence mode="wait">
        <Component key={asPath} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
