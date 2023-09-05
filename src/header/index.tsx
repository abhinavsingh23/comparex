import React from "react";
import styled from "styled-components";
import dataJson from "../dataView/compareX.json";
import { MOBILE_SCREEN_BREAKPOINT } from "../constants";
import { useIsMobileScreen } from "../useMediaQuery";
import download from './download.png';

const Header = styled.div`
  height: 65px;
  background-color: #f7f5f4;
  padding: 0 100px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: ${MOBILE_SCREEN_BREAKPOINT}px) {
    padding: 0 50px;
  }
`;

const HeaderText = styled.span`
  font-size: 32px;
  font-weight: bold;
  @media only screen and (max-width: ${MOBILE_SCREEN_BREAKPOINT}px) {
    font-size: 24px;
  }
`;

const Button = styled.button`
  background-color: #f5432a;
  color: white;
  border: none;
  border-radius: 8px;
  height: 35px;
  width: 160px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const Image = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const TopHeader = () => {

    const isMobileScreen = useIsMobileScreen();
  const downloadJsonFile = () => {
    const jsonString = JSON.stringify(dataJson);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data.json";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Header>
      <HeaderText>Marketplace Comparison</HeaderText>
      {isMobileScreen ? 
      <Image src ={download}/>
      : 
      <Button onClick={downloadJsonFile}> Download Report</Button>
      }
      
    </Header>
  );
};

export default TopHeader;
