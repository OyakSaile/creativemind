import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../Header";
import { HeroImage } from "../HeroImage";

const Home: NextPage = () => {
  return (
    <div >
      <Header />
      <HeroImage/>
    </div>
  );
};

export default Home;
