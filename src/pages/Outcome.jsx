import React, { useEffect } from "react";
import { Footer, NavTech, Result } from "../components";

const Outcome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavTech />
      <Result />
      <Footer />
    </>
  );
};

export default Outcome;
