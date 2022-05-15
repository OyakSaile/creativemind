import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { HeroImage } from "../components/HeroImage";
import { ServicesComponent } from "../components/ServicesComponent";
import { Status } from "../components/Status";

const Home: NextPage = () => {
  return (
    <div >
      <Header />
      <HeroImage/>
      <Status/>
      <ServicesComponent/>
    </div>
  );
};

export default Home;
