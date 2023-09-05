import React from "react";
import styled from "styled-components";

type Props = {
  value: string;
  placeholder: string;
  setDropdownItem: (product: string) => void;
  itemList: Array<string>;
};

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownButton = styled.select`
  font-size: 16px;
  font-weight: bold;
  background: white;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-radius: 6px;
  height: 30px;
  width: auto;
  padding: 5px 30px;
  cursor: pointer;
`;

const Dropdown = ({ value, placeholder, itemList, setDropdownItem }: Props) => {
  const handleChange = React.useCallback((event: any) => {
    if (event.target.value) {
      setDropdownItem(event.target.value);
    }
  },[setDropdownItem]);

  return (
    <DropdownContainer>
      <DropdownButton value={value} onChange={handleChange}>
        <option disabled={true} value="">
          {placeholder}
        </option>

        {itemList.map((item: string) => {
          return <option value={item}> {item} </option>;
        })}
      </DropdownButton>
    </DropdownContainer>
  );
};

export default Dropdown;
