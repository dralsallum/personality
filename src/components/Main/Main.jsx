import React, { useState } from "react";
import {
  MaConTwo,
  MaHe,
  MaSubTwo,
  MaWrapper,
  Button,
  MaPara,
  MaImag,
} from "./Main.elements";
import { Link } from "react-router-dom";
import Real from "../../assets/real.png";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <MaWrapper>
        <MaConTwo>
          <MaSubTwo>
            <MaHe>من الرائع أن يتم فهمك أخيرًا</MaHe>
            <MaPara>
              بعالم مزدحم بالتحديات والفرص، يصبح فهم طبيعتك أمرًا ضروريًا للتنقل
              بثقة. سواء كنت تسعى لتحسين علاقاتك، أو مسارك المهني، فإن اختبارنا
              يوفر لك الإطار المثالي لتحقيقه
            </MaPara>
            <Link
              to="/personality"
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <Button>ابدا الان</Button>
            </Link>
          </MaSubTwo>
        </MaConTwo>
      </MaWrapper>
      <MaWrapper>
        <MaImag src={Real} alt="" />
      </MaWrapper>
    </>
  );
};

export default Main;
