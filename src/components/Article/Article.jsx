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
          <ArContainerFHe>تعلم اكثر عن نفسك</ArContainerFHe>
          <ArSubConPa>
            اكتشف نفسك من خلال اختبار شخصيتنا المميز. هذا الاختبار صُمم ليساعدك
            على فهم جوانب شخصيتك بشكل أعمق وأكثر دقة. ستتعرف على ميولك، قوتك،
            وكيفية تفاعلك مع العالم من حولك. ابدأ رحلتك نحو الوعي الذاتي والنمو
            الشخصي اليوم
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
