import React, { useEffect } from "react";
import { Divider, Footer, Main, NavTech, Options } from "../components";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavTech />
      <Main />
      <Options />
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
