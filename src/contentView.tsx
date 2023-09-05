import React from "react";
import styled from "styled-components";
import {
    PRODUCT_LIST,
    MonthData,
    monthsWithId,
    MONTHS_ARRAY,
  } from "./constants";
  import Dropdown from "./dropdown";
import SearchableDropdown from "./inputWithSearch";
import DataView from "./dataView";
import TopHeader from "./header";
import { MOBILE_SCREEN_BREAKPOINT } from "./constants";

const Content = styled.div`
  width: 100%;
  transition: margin-left 0.5s;
  align-items: center;
  justify-content: center;
  background-color: #f7f5f4;
`;

const PlaceholderText = styled.div`
  padding: 40px 100px 30px 100px;
  font-size: 24px;
  @media only screen and (max-width: ${MOBILE_SCREEN_BREAKPOINT}px) {
    padding: 40px 50px 30px 50px;
  }
`;

const ProductInputRow = styled.div`
  display: flex;
  padding: 0px 100px;
  flex-direction: row;
  @media only screen and (max-width: ${MOBILE_SCREEN_BREAKPOINT}px) {
    padding: 0 50px;
  }
`;

const HorizontalSpacer = styled.div`
  width: 30px;
`;

const MonthSearchInputRow = styled.div`
  display: flex;
  padding: 30px 100px 30px 100px;
  flex-direction: row;
  @media only screen and (max-width: ${MOBILE_SCREEN_BREAKPOINT}px) {
    padding: 30px 50px 30px 50px;
  }
`;

const DataViewRow = styled.div`
  padding: 30px 100px 30px 100px;
  @media only screen and (max-width: ${MOBILE_SCREEN_BREAKPOINT}px) {
    padding: 30px 50px 30px 50px;
  }
`;


const ContentView = () => {

    const [firstProductSelection, setFirstProductSelection] =
    React.useState("Product A");
  const [secondProductSelection, setSecondProductSelection] =
    React.useState("Product B");

  const [value, setValue] = React.useState<string | null>("");



  return (
  
<Content>
        <TopHeader />

        <PlaceholderText>What would you like to compare today?</PlaceholderText>

        <ProductInputRow>
          <Dropdown
            itemList={
              secondProductSelection
                ? PRODUCT_LIST.filter(
                    (product: string) => product !== secondProductSelection
                  )
                : PRODUCT_LIST
            }
            placeholder="Choose Product"
            setDropdownItem={setFirstProductSelection}
            value={firstProductSelection}
          />
          <HorizontalSpacer />
          <Dropdown
            itemList={
              firstProductSelection
                ? PRODUCT_LIST.filter(
                    (product: string) => product !== firstProductSelection
                  )
                : PRODUCT_LIST
            }
            placeholder="Choose Product"
            setDropdownItem={setSecondProductSelection}
            value={secondProductSelection}
          />
        </ProductInputRow>

        <MonthSearchInputRow>
          <SearchableDropdown
            options={monthsWithId}
            label="name"
            id="id"
            selectedVal={value || ""}
            handleChange={(val: string | null) => setValue(val)}
          />
        </MonthSearchInputRow>

        {firstProductSelection && secondProductSelection && (
          <DataViewRow>
            <DataView
              firstProduct={firstProductSelection}
              secondProduct={secondProductSelection}
              heading={`${value} Comparison`}
              month={value as MonthData}
              currentMonth={MONTHS_ARRAY[new Date().getMonth()] as MonthData}
            />
          </DataViewRow>
        )}
      </Content>
    );
};

export default ContentView;






















































