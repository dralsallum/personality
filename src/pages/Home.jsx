import React, { useEffect } from "react";
import {
  Article,
  Divider,
  Footer,
  Main,
  NavTech,
  Options,
} from "../components";

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
      <Article />
      <Footer />
    </>
  );
};

export default Home;
