import React from "react";
import {
  ArContainerF,
  ArContainerFCon,
  ArContainerFHe,
  ArContainerS,
  ArContainerSImg,
  ArSubConPa,
  ArSubContainerF,
  ArWrapper,
} from "./Article.elements";
import physician from "../../assets/physician.svg";

const Article = () => {
  return (
    <ArWrapper>
      <ArContainerF>
        <ArSubContainerF>
          <ArContainerFHe>تعلم اكثر مع غيرك</ArContainerFHe>
          <ArSubConPa>
            تجاوز الكتب المدرسية. تمرن على النطق، احصل على رؤى ثقافية وتبادل
            نصائح اللغة المحلية مع مجتمعنا العالمي من المتعلمين
          </ArSubConPa>
        </ArSubContainerF>
      </ArContainerF>
      <ArContainerS>
        <ArContainerSImg src={physician} />
      </ArContainerS>
    </ArWrapper>
  );
};

export default Article;
