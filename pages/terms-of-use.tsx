import { Footer, Header } from "@components/common";
import FooterUpdated from "@components/common/FooterUpdated";
import GetInTouch from "@components/common/GetInTouch";
import OurProducts from "@components/common/OurProducts";
import WhoWeAre from "@components/common/WhoWeAre";
import Banner from "@components/home/Banner";
import NewsSection from "@components/home/NewsSection";
import Partners from "@components/home/Partners";
import Products from "@components/home/Products";
import Team from "@components/home/Team";
import PrivacyPolicy from "@components/PrivacyPolicy";
import Terms from "@components/Terms";
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
      {/* <WhoWeAre /> */}
      {/* <PrivacyPolicy/> */}
      <Terms/>
      {/* <GetInTouch />
      <NewsSection /> */}
      <FooterUpdated />
    </Layout>
  );
};

export default Home;
