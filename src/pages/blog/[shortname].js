/** @format */

import React, { useState } from "react";

import { Layout } from "../../layout/Layout";
import Theme from "../../styles/theme";
import { useRouter } from "next/router";

const BlogPost = () => {
  const [themeType, setThemeType] = useState("light");
  const router = useRouter();
  const shortname = router.query.shortname;

  console.log(shortname);

  return (
    <Theme themeType={themeType}>
      <Layout isBlog={true}>{shortname}</Layout>
    </Theme>
  );
};

export default BlogPost;
