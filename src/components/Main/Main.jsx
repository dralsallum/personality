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
              مرحبًا بعودتك! الرجاء الضغط على الزر أدناه لمراجعة نتائجك، أو
              إعادة أخذ اختبار الشخصية المجاني لدينا
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

      <MaImag
        src="https://www.16personalities.com/static/images/homepage/header-mountains-mobile.svg"
        alt=""
      />
    </>
  );
};

export default Main;
