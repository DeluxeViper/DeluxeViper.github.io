import React, { useEffect, useState, useContext } from "react";
import ReactMarkdown from "react-markdown";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { Layout } from "../../layout/Layout";
import { useRouter } from "next/router";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { BlogTags, BlogTag, StyledMarginBot } from "./BlogPageStyle";
import remarkBreaks from "remark-breaks";
import remarkRehype from "remark-rehype/lib";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { blogs } from "../../constants/blog_constants";

const BlogPost = () => {
  const [content, setContent] = useState("");
  const [blogInfo, setBlogInfo] = useState();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const shortname = router.query.shortname;
      if (!shortname) return null;
      // Fetch content from markdown file
      fetch(`./${shortname}.md`)
        .then((res) => {
          return res.text();
        })
        .then((text) => setContent(text));

      // Find corresponding blog
      setBlogInfo(blogs.filter((blog) => shortname === blog.shortname)[0]);
    }
  }, [router.isReady]);

  return (
    <Layout isBlog={true}>
      {/* Shifts starting of page down */}
      <StyledMarginBot />
      <Section blog>
        <SectionDivider />
        <SectionTitle>{blogInfo?.title}</SectionTitle>
        <SectionText>{blogInfo?.date_posted}</SectionText>
        {/* Reduces padding of SectionText */}
        <div style={{ marginTop: "-40px" }}></div>{" "}
        <BlogTags>
          {blogInfo?.topics.map((tag, index) => (
            <BlogTag key={`${blogInfo.shortname}-tag-index-${index}`}>
              {tag}
            </BlogTag>
          ))}
        </BlogTags>
        <ReactMarkdown
          source={content.replace(/\n/gi, "\\n")}
          // style={{ whiteSpace: "pre-wrap" }}
          remarkPlugins={[remarkBreaks]}
          rehypePlugins={[remarkRehype]}
          children={content}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={children}
                  style={tomorrow}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <SyntaxHighlighter
                  style={tomorrow}
                  className="md-code"
                  PreTag="div"
                >
                  {children}
                </SyntaxHighlighter>
              );
            },
          }}
        />
        <br />
        <SectionDivider />
      </Section>
    </Layout>
  );
};

export default BlogPost;
