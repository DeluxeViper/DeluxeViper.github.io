/** @format */

import Theme from "../styles/theme";
import "../styles/WorkStyles.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
