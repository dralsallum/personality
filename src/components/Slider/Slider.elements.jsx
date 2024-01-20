import styled from "styled-components";

export const SliderWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
`;

export const SliderArrowContainerAll = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SliderArrowContainer = styled.div`
  position: relative;
  gap: 1rem;
  display: flex;
`;
export const SliderArrowContainer1 = styled.div`
  position: relative;
  gap: 1rem;
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  color: #2946b6;

  @media screen and (max-width: 960px) {
    font-size: 1.3rem;
    padding-top: 0.4rem;
  }
`;

export const SliderContainer = styled.div`
  padding: 1.5rem 1.5rem;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (min-width: 1536px) {
    max-width: 1280px;
    margin: auto;
  }
`;

export const SliderCardContainer = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 1rem;
  border-radius: 10px;
  max-width: max-content;
  margin: auto;
  transition: all 0.5 ease-in-out;

  &:hover {
    scale: 1.025;
    cursor: pointer;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(136, 160, 255, 0.46) 217.91%
    );
    box-shadow: 0px 72px 49px -51px rgba(136, 160, 255, 0.21);
  }
`;

export const SliderCardSubSpan3 = styled.div`
  color: #000000;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  overflow: hidden;
  position: relative;
  max-height: 2.2em; // Assuming line-height of 1.1, thus 2 lines will be 2.2em
  line-height: 1.1em;
  align-self: center;

  &:after {
    background-color: white; // Match this with your background color
  }

  @media screen and (max-width: 960px) {
    font-size: 0.9rem;
  }
`;
