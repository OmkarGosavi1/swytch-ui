import { Footer, Header } from "@components/common";
import Careers from "@components/common/Careers";
import CareerVacancy from "@components/common/CareerVacancy";
import DefiDevelopment from "@components/common/DefiDevelopment";
import GetInTouch from "@components/common/GetInTouch";
import OurProducts from "@components/common/OurProducts";
import WhoWeAre from "@components/common/WhoWeAre";
import WhyChooseUs from "@components/common/WhyChooseUs";
import Banner from "@components/home/Banner";
import NewsSection from "@components/home/NewsSection";
import Partners from "@components/home/Partners";
import Products from "@components/home/Products";
import Team from "@components/home/Team";
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
      {/* <Careers/> */}
      <CareerVacancy/>
      {/* <DefiDevelopment/> */}
      {/* <GetInTouch />
      <NewsSection /> */}
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
