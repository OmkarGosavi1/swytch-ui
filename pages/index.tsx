// import BlogsDetailsPage from "@components/blogs/BlogsDetailsPage/BlogsDetailsPage";
// import BlogsPage from "@components/blogs/BlogsPage/BlogsPage";
import { Footer, Header } from "@components/common";
import FooterUpdated from "@components/common/FooterUpdated";
import GetInTouch from "@components/common/GetInTouch";
import ServiceCard from "@components/common/ServiceCard";
import Banner from "@components/home/Banner";
import NewsSection from "@components/home/NewsSection";
import Partners from "@components/home/Partners";
import Products from "@components/home/Products";
import Services from "@components/home/Services/Services";
import Solution from "@components/home/Solution";
import Team from "@components/home/Team";
import PitchDeck from "@components/PitchDeck";
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
      <Banner />
      {/* <Solution/> */}
      {/* <ServiceCard/> */}
      <Services />
      <Products />
      <Partners />
      {/* <Team /> */}
      {/* <PitchDeck /> */}
      {/* <BlogsDetailsPage /> */}
      {/* <BlogsPage /> */}
      {/* <GetInTouch /> */}
      {/* <NewsSection /> */}
      <FooterUpdated />
    </Layout>
  );
};

export default Home;
