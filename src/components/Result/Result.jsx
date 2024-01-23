import React, { useState } from "react";
import {
  CardCon,
  ProBottm,
  ProCon,
  ProFe,
  ProIn,
  ProMiddle,
  ProOn,
  ProRe,
  ProTop,
  ResCon,
  ResHe,
  ResHeader,
  ResPara,
  ResTop,
  TraBut,
  TraCon,
  TraHe,
  TraInfo,
  TraMain,
  TraMid,
  TraOnCon,
  TraOne,
  TraSp1,
  TraSp2,
  TraSp3,
  TraSp4,
  TraSp5,
  TraSp6,
  TraSubCon,
  TraThr,
} from "./Result.elements";
import {
  ProgressCal,
  ProgressCon,
  ResAll,
  ResBor,
  ResBot,
  ResBox,
  ResCar,
  ResDot,
  ResFie,
  ResHr,
  ResImg,
  ResMid,
  ResOp,
  ResOpBut,
  ResRoof,
  ResSubTit,
  ResTit,
  ResTyCon,
  ResTySp,
} from "../Personality/Personality.elements";
import { selectQuizResults } from "../../redux/quizSlice";
import { useSelector } from "react-redux";
import statements from "../../utils/statements";
import { selectResultText } from "../../redux/quizSlice";

const TraitComponent = ({
  traitName,
  traitPercentage,
  proTopText,
  backgroundColor,
  kindLeft,
  kindRight,
}) => {
  const percentageValue = parseInt(traitPercentage, 10);
  const leftPosition = `${percentageValue}%`;
  return (
    <TraOne>
      <TraOnCon>
        <TraSp1>{traitName}:</TraSp1>
        <TraSp2>
          <TraSp3>{traitPercentage}</TraSp3>
        </TraSp2>
        <TraSp4>
          <TraSp5>
            <TraBut>
              <TraSp6>
                <svg
                  aria-labelledby="i_ig6y79sie9"
                  viewBox="0 0 48 48"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title id="i_ig6y79sie9">Help</title>
                  <path
                    d="M24.938 0C17.456 0 12.608 3.066 8.802 8.531a2.25 2.25 0 0 0 .488 3.085l4.04 3.065c.975.74 2.353.563 3.122-.384 2.344-2.944 4.088-4.631 7.763-4.631 2.887 0 6.45 1.856 6.45 4.65 0 2.118-1.744 3.196-4.594 4.8-3.319 1.865-7.716 4.18-7.716 9.975v.918a2.245 2.245 0 0 0 2.25 2.25h6.797a2.245 2.245 0 0 0 2.25-2.25v-.543c0-4.022 11.747-4.182 11.747-15.057C41.39 6.216 32.897 0 24.938 0zM24 35.016a6.506 6.506 0 0 0-6.497 6.497A6.506 6.506 0 0 0 24 48.009a6.506 6.506 0 0 0 6.497-6.496A6.506 6.506 0 0 0 24 35.016z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </TraSp6>
            </TraBut>
          </TraSp5>
        </TraSp4>
      </TraOnCon>
      <ProCon>
        <ProTop>{proTopText}</ProTop>
        <ProMiddle>
          <ProIn>
            <ProOn>
              <ProRe style={{ backgroundColor: backgroundColor }}>
                <ProFe style={{ left: leftPosition }}></ProFe>
              </ProRe>
            </ProOn>
          </ProIn>
        </ProMiddle>
        <ProBottm>{kindRight}</ProBottm>
      </ProCon>
    </TraOne>
  );
};

const Result = () => {
  const quizResults = useSelector(selectQuizResults);
  const [resultPage, setResultPage] = useState(0);
  const resultText = useSelector(selectResultText);

  if (!quizResults) {
    return <div>Loading results...</div>;
  }
  const { totalScore, scoreDetails } = quizResults;
  const maxTotalScore = statements.length * 7;

  const handleNextPage = () => {
    if (resultPage < 2) {
      setResultPage((prevPage) => prevPage + 1);
    } else {
      // Redirect the user to a different page, for example, '/results'
    }
  };

  const renderResultContent = () => {
    // Example implementation, adjust based on your requirements
    const content = "Your result content here based on scoreDetails"; // Modify this line as needed
    return <div>{content}</div>;
  };

  return (
    <>
      <ResCon>
        <ResHeader>
          <ResTop>
            <ResHe>نتائج اختبار الشخصية</ResHe>
            <ResPara>
              استعرض نتائج اختبار شخصيتك وتعرف أكثر على نوع شخصيتك والسمات
              الأساسية لها.
            </ResPara>
          </ResTop>
        </ResHeader>
        <CardCon>
          <ResCon>
            <ResBox>
              <ResBor>
                <ResHr />
                <ResCar>
                  <ResFie>
                    <ResAll>
                      <ResTop></ResTop>
                      <ResTit>نوع شخصيتك هو</ResTit>
                      <ResSubTit>{scoreDetails.personalityType}</ResSubTit>
                      <ResTyCon>
                        <ResTySp></ResTySp>
                        اي تي م - الف
                      </ResTyCon>
                      <ResMid>
                        <ResImg src={scoreDetails.svg} alt="score indicator" />
                        <br />

                        <ProgressCon></ProgressCon>
                      </ResMid>
                      <ResBot> {resultText.quote} </ResBot>
                    </ResAll>
                    <ResOp>
                      <ResRoof>
                        {[...Array(3)].map((_, index) => (
                          <ResDot
                            key={index}
                            onClick={() => setResultPage(index)}
                            style={{
                              backgroundColor:
                                resultPage === index ? "#4298b4" : "#ccc",
                              cursor: "pointer",
                            }}
                          />
                        ))}
                      </ResRoof>

                      <ResOpBut onClick={handleNextPage}>التالي</ResOpBut>
                    </ResOp>
                  </ResFie>
                </ResCar>
              </ResBor>
            </ResBox>
          </ResCon>
          <TraCon>
            <TraSubCon>
              <TraMain>
                <TraInfo>
                  <TraHe>صفات شخصيتك</TraHe>
                  <TraMid>
                    <TraitComponent
                      traitName="طاقة"
                      traitPercentage="19%"
                      proTopText="اجتماعي"
                      backgroundColor="#4298b4"
                      kindRight="انطواي"
                    />
                    <TraitComponent
                      traitName="الفكر"
                      traitPercentage="89%"
                      proTopText="بديهي"
                      backgroundColor="#e4ae3a"
                      kindRight="ملاحظ"
                    />
                    <TraitComponent
                      traitName="طبيعتك"
                      traitPercentage="29%"
                      proTopText="تفكيري"
                      backgroundColor="#32a474"
                      kindRight="شعوري"
                    />
                    <TraitComponent
                      traitName="تكتيكاتك"
                      traitPercentage="79%"
                      proTopText="حكم"
                      backgroundColor="#886199"
                      kindRight="استكشاف"
                    />
                    <TraitComponent
                      traitName="هوية"
                      traitPercentage="59%"
                      proTopText="حازم"
                      backgroundColor="#f25e62"
                      kindRight="مضطرب"
                    />

                    <TraThr></TraThr>
                  </TraMid>
                </TraInfo>
              </TraMain>
            </TraSubCon>
          </TraCon>
        </CardCon>
      </ResCon>
    </>
  );
};

export default Result;
