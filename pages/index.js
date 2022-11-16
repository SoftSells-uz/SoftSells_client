import Head from "next/head";
import React from "react";
import Layout from "src/layouts/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SoftSells</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>Lorem</main>
      </Layout>
    </div>
  );
}
