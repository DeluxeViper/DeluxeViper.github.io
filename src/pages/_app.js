/** @format */

import "../styles/WorkStyles.css";
import "../styles/ProjectStyles.css";
import "../styles/ToggleStyles.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GOOGLE_ANALYTICS_TAG}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.REACT_APP_GOOGLE_ANALYTICS_TAG}', {
            page_path: window.location.pathname,
          });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}