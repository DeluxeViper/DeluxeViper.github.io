/** @format */

import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* Primary Meta Tags */}
          <meta
            name="title"
            content="Abdullah Mohamed - Personal Portfolio Site"
          />
          <meta
            name="description"
            content="Abdullah's Personal Portfolio Website. Innovating one project at a time."
          />

          {/* Open Graph / Facebook */}
          <meta
            name="title"
            property="og:title"
            content="Abdullah's Portfolio Site"
          />
          <meta name="type" property="og:type" content="website" />
          <meta
            name="image"
            property="og:image"
            content="images/demo_pic.png"
          />
          <meta
            name="url"
            property="og:url"
            content="https://deluxeviper.github.io/Portfolio-Website"
          />
          <meta
            name="description"
            property="og:description"
            content="Abdullah's Personal Portfolio Website. Innovating one project at a time."
          />

          {/* <link rel="manifest" href="/manifest.json" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
