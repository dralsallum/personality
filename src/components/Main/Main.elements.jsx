import styled from "styled-components";

export const Button = styled.button`
  border-radius: 8px;
  background: #886199;
  padding: 10px 15px;
  color: #fff;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  width: 70%;
  margin-bottom: 10px;

  &:hover {
    transition: all 0.3s ease-out;
    background: #000;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const MaWrapper = styled.div`
  direction: rtl;
  background: #4198b4;
  position: relative;
  border: none;
  outline: none;
  margin-bottom: -1px;

  @media screen and (max-width: 768px) {
  }
`;
export const MaImag = styled.img`
  width: 100%;

  position: relative;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
`;

export const MaConTwo = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
  padding: 35px 60px 0px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 25px 25px 0px;
  }
`;
export const MaSubTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const MaHe = styled.h1`
  color: #ffffff;
  font-family: Raleway Medium;
  font-size: 3.2rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const MaPara = styled.p`
  color: #ffffff;
  font-family: Raleway Medium;
  font-size: 1.8rem;
  margin-bottom: 14px;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const MaInput = styled.input`
  border-radius: 10px;
  color: #666 !important;
  font: normal normal 500 16px/18px Helvetica Now Text Regular;
  letter-spacing: 0.16px;
  opacity: 1;
  text-align: right;
  width: 100%;
  overflow: visible;
  border: none;
  outline: none;

  @media screen and (max-width: 768px) {
  }
`;
