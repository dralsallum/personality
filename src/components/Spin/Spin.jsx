import React, { useState } from "react";
import {
  ButCen,
  ButCon,
  ButSp,
  ButSpa,
  ButStr,
  ButSubCon,
  ButWr,
  Inp,
  InputWr,
  LaOn,
  LaOnCo,
  LaOnDe,
  LaOnFe,
  LaOnKe,
  LaOnLe,
  LaOnPe,
  LaOnQe,
  LaOnRe,
  LaOnSp,
  LaOnSu,
  LaOnTe,
  LaOnYe,
  LaOnZe,
  LaTw,
  MainCon,
  MainEiEi,
  MainEiEl,
  MainEiFi,
  MainEiFo,
  MainEiNi,
  MainEiOne,
  MainEiSe,
  MainEiSi,
  MainEiTe,
  MainEiTh,
  MainEiTi,
  MainEiTw,
  MainImg,
  MainImgCon,
  MainImgEi,
  MainImgFi,
  MainImgFo,
  MainImgNi,
  MainImgOn,
  MainImgSe,
  MainImgSi,
  MainImgTh,
  MainImgTw,
  MainNTw,
  MainNiOn,
  MainNiTw,
  MainSubCon,
  MainWr,
  SpAli,
  SpCon,
  SpOn,
  SpSubCon,
  SpTw,
  SpVe,
  SpinB,
  SpinCon,
  SpinCro,
  SpinCross,
  SpinSp,
  SpinSpOn,
  SpinSpTw,
  SpinSpa,
  SpinSpan,
  SpinSubSpan,
  SpinWra,
  SpinWrapper,
} from "./Spin.elements";

const getRandomSpinDegree = () => {
  // Assuming each section is 30 degrees and there are 12 sections
  const sectionDegree = 360 / 12;
  const randomSection = Math.floor(Math.random() * 12);
  // Adding a bit randomness to stop within the section
  const degreeWithinSection = Math.random() * sectionDegree;
  return randomSection * sectionDegree + degreeWithinSection;
};

const Spin = () => {
  const [email, setEmail] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDegree, setSpinDegree] = useState(0);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Your submit logic...
    const newSpinDegree = getRandomSpinDegree();
    setSpinDegree(newSpinDegree); // Set the random degree
    setIsSpinning(true); // Start spinning

    // Stop spinning after 2 seconds
    setTimeout(() => setIsSpinning(false), 1000);
  };

  return (
    <SpinWrapper>
      <SpinWra></SpinWra>
      <SpinCon>
        <SpinCross>
          <SpinCro>
            <SpOn>
              <SpTw>
                <SpinSpTw>
                  <SpinSpOn>x</SpinSpOn>
                </SpinSpTw>
              </SpTw>
            </SpOn>
          </SpinCro>
        </SpinCross>
        <div></div>
        <div></div>
        <MainWr>
          <MainCon>
            <MainSubCon>
              <MainImg>
                <MainImgOn></MainImgOn>
                <MainImgTw
                  spin={isSpinning}
                  style={{ transform: `rotate(${spinDegree}deg)` }}
                >
                  <LaOn>
                    <LaOnCo>
                      <LaOnSp>$15 OFF</LaOnSp>
                    </LaOnCo>
                  </LaOn>
                  <LaOn>
                    <LaOnSu>
                      <LaOnSp>15% OFF</LaOnSp>
                    </LaOnSu>
                  </LaOn>
                  <LaOn>
                    <LaOnRe>
                      <LaOnSp>10% OFF</LaOnSp>
                    </LaOnRe>
                  </LaOn>
                  <LaOn>
                    <LaOnDe>
                      <LaOnSp>15% OFF</LaOnSp>
                    </LaOnDe>
                  </LaOn>
                  <LaOn>
                    <LaOnTe>
                      <LaOnSp>$15 OFF</LaOnSp>
                    </LaOnTe>
                  </LaOn>
                  <LaOn>
                    <LaOnQe>
                      <LaOnSp>Try again</LaOnSp>
                    </LaOnQe>
                  </LaOn>
                  <LaTw>
                    <LaOnYe>
                      <LaOnSp>10% OFF</LaOnSp>
                    </LaOnYe>
                  </LaTw>
                  <LaTw>
                    <LaOnZe>
                      <LaOnSp>15% OFF</LaOnSp>
                    </LaOnZe>
                  </LaTw>
                  <LaTw>
                    <LaOnFe>
                      <LaOnSp>20% OFF</LaOnSp>
                    </LaOnFe>
                  </LaTw>
                  <LaTw>
                    <LaOnLe>
                      <LaOnSp>10% OFF</LaOnSp>
                    </LaOnLe>
                  </LaTw>
                  <LaTw>
                    <LaOnKe>
                      <LaOnSp>Try again</LaOnSp>
                    </LaOnKe>
                  </LaTw>
                  <LaTw>
                    <LaOnPe>
                      <LaOnSp>15% OFF</LaOnSp>
                    </LaOnPe>
                  </LaTw>
                </MainImgTw>
                <MainImgTh></MainImgTh>
                <MainImgFo></MainImgFo>
                <MainImgFi></MainImgFi>
                <MainImgSi></MainImgSi>
                <MainImgSe></MainImgSe>
                <MainImgEi>
                  <MainEiOne></MainEiOne>
                  <MainEiTw></MainEiTw>
                  <MainEiTh></MainEiTh>
                  <MainEiFo></MainEiFo>
                  <MainEiFi></MainEiFi>
                  <MainEiSi></MainEiSi>
                  <MainEiSe></MainEiSe>
                  <MainEiEi></MainEiEi>
                  <MainEiNi></MainEiNi>
                  <MainEiTe></MainEiTe>
                  <MainEiEl></MainEiEl>
                  <MainEiTi></MainEiTi>
                </MainImgEi>
                <MainImgNi>
                  <MainNiOn></MainNiOn>
                  <MainNiTw>
                    <MainNTw></MainNTw>
                  </MainNiTw>
                </MainImgNi>
              </MainImg>
            </MainSubCon>
          </MainCon>
        </MainWr>
        <ButCon>
          <ButSubCon>
            <ButWr>
              <ButCen>
                <ButSpa>
                  <ButStr>
                    <ButSp onClick={handleSubmit}>Spin to win</ButSp>
                  </ButStr>
                </ButSpa>
              </ButCen>
            </ButWr>
          </ButSubCon>
        </ButCon>
        <InputWr>
          <Inp
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
          />
        </InputWr>
        <SpCon>
          <SpSubCon>
            <SpVe>
              <SpAli>
                <SpinSpan>
                  <SpinSubSpan>
                    <SpinSp>
                      <SpinB>Want an even better deal?</SpinB>
                    </SpinSp>
                    <SpinSpa>
                      <SpinB>
                        Spin to unlock an exclusive offer on your first order.
                      </SpinB>
                    </SpinSpa>
                  </SpinSubSpan>
                </SpinSpan>
              </SpAli>
            </SpVe>
          </SpSubCon>
        </SpCon>
        <div></div>
        <div></div>
      </SpinCon>
    </SpinWrapper>
  );
};

export default Spin;
