import React, { useEffect } from "react";
import { NavTech, Result } from "../components";

const Outcome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavTech />
      <Result />
    </>
  );
};

export default Outcome;
