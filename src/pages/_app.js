/** @format */

import Theme from "../styles/theme";
import "../styles/WorkStyles.css";
import "../styles/ProjectStyles.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
