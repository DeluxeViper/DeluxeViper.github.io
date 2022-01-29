/** @format */

import "../styles/WorkStyles.css";
import "../styles/ProjectStyles.css";
import "../styles/ToggleStyles.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
