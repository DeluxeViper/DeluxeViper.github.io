import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../layout/Layout";
import Theme from "../../styles/theme";
import { useRouter } from "next/router";

const BlogPost = () => {
  const [themeType, setThemeType] = useState("light");
  const [content, setContent] = useState("");
  const router = useRouter();
  const shortname = router.query.shortname;

  useEffect(() => {
    // Fetch content from markdown file
    fetch(`./${shortname}.md`)
      .then((res) => {
        return res.text();
      })
      .then((text) => setContent(text));
  }, []);

  return (
    <Theme themeType={themeType}>
      <Layout isBlog={true}>
        <ReactMarkdown children={content} />
      </Layout>
    </Theme>
  );
};

export default BlogPost;
