import React from "react";
import {
  ArContainerF,
  ArContainerFCon,
  ArContainerFHe,
  ArContainerFPara,
  ArContainerS,
  ArContainerSImg,
  ArSubContainerF,
  ArWrapper,
} from "./Divider.elements";
import Study from "../../assets/study.svg";

const Divider = () => {
  return (
    <ArWrapper>
      <ArContainerF>
        <ArSubContainerF>
          <ArContainerFHe>افهم الآخرين</ArContainerFHe>
          <ArContainerFPara>
            في أوصاف الأنماط المجانية لدينا، ستتعلم ما الذي يحفز ويُلهم ويُقلق
            أنواع الشخصيات المختلفة، مما يساعدك على بناء علاقات أكثر معنى
          </ArContainerFPara>
        </ArSubContainerF>
      </ArContainerF>
      <ArContainerS>
        <ArContainerSImg src={Study} />
      </ArContainerS>
    </ArWrapper>
  );
};

export default Divider;
