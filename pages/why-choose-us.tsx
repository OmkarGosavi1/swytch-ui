import { Header } from "@components/common";
import FooterUpdated from "@components/common/FooterUpdated";
import WhyChooseUs from "@components/common/WhyChooseUs";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      <Header />
      {/* <Banner />
      <Products />
      <Partners />
      <Team /> */}
      <WhyChooseUs />
      {/* `````<DefiDevelopment/>````` */}
      {/* <GetInTouch />
      <NewsSection /> */}
      {/* <Footer /> */}
      <FooterUpdated/>
    </Layout>
  );
};

export default Home;
