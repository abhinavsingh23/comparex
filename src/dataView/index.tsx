import React from "react";
import styled from "styled-components";
import bug from "./bug.png";
import newIcon from "./new.png";
import { getJsonKeyForProduct, getMonthData, getOverallData } from "./utils";
import { MonthData } from "../constants";

type Props = {
  heading: string;
  month: string;
  currentMonth: string;
  firstProduct: string;
  secondProduct: string;
};

const DataViewContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  padding-right: 10px;
  background-color: white;
`;

const DataHeadline = styled.div`
  padding: 20px 0px 35px 20px;
  font-size: 28px;
  font-weight: 600;
`;

const BottomSpacer = styled.div`
  height: 30px;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 50px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  padding-right: 20px;
`;

const Info = styled.div`
  width: 85%;
`;

const Spacer = styled.div`
  height: 30px;
`;

const Underline = styled.div`
  width: 90%;
  margin: 8px 0;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  opacity: 0.95;
`;

const DataView = ({
  firstProduct,
  secondProduct,
  month,
  currentMonth,
}: Props) => {
  const productComparisonKey = getJsonKeyForProduct(
    firstProduct,
    secondProduct
  );
  const monthToCalculateFor = month ? month : currentMonth;
  const monthData = getMonthData(
    productComparisonKey,
    monthToCalculateFor as MonthData
  );
  const overallData = getOverallData(productComparisonKey, monthToCalculateFor);

  return (
    <>
      <DataViewContainer>
        <DataHeadline> {`${monthToCalculateFor} Comparison`} </DataHeadline>

        {monthData.map((dataText: string, index: number) => {
          const rowIcon = (index + 1) % 3 === 0 ? bug : newIcon;

          return (
            <>
              <InfoRow>
                <Icon src={rowIcon} />

                <Info> {dataText} </Info>
              </InfoRow>
              <Underline />
            </>
          );
        })}

        <BottomSpacer />
      </DataViewContainer>
      <Spacer />
      <DataViewContainer>
        <DataHeadline> Overall Comparison </DataHeadline>

        {overallData.map((dataText: string, index: number) => {
          const rowIcon = (index + 1) % 3 === 0 ? bug : newIcon;
          return (
            <>
              <InfoRow>
                <Icon src={rowIcon} />
                <Info> {dataText} </Info>
              </InfoRow>
              <Underline />
            </>
          );
        })}

        <BottomSpacer />
      </DataViewContainer>
    </>
  );
};

export default DataView;
