import { Footer } from "@/components";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import "@/styles/globals.css";

function myApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pixelify</title>
        <meta
          name="description"
          content="Pixelify: Your Source for High-Quality, Free Pexels API Photos."
        />
      </Head>
      <div className="main_bg"></div>
      <Navigation />
      <main className="styled_app">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default myApp;
