/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey friends</p>
        <p>
          Welcome to my blog. I'd like to tell you what the most important about
          programming languages. What developers can know for giving a best
          result at his work
        </p>
      </section>
    </Layout>
  );
}
