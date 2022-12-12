import Head from "next/head";
import React from "react";
import InCount from "components/InCount";
import Industry from "components/Industry";
import Services from "components/Services";
import Layout from "layouts/Layout";
import Contact from "components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SoftSells</title>
        <meta name="SoftSells" content="SoftSells software solutions." />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="assets/favicon/site.webmanifest" />
      </Head>
      <Layout>
        <Services />
        <Industry />
        <InCount />
        <Contact />
      </Layout>
    </div>
  );
}
