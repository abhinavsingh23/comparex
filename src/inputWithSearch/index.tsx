import React from "react";
import styled, { StyledComponent } from "styled-components";

type Props = {
  options: any;
  label: string;
  id: string;
  selectedVal: string;
  handleChange: (label: string | null) => void;
};

const Dropdown = styled.div`
  position: relative;
  color: #333;
  width: 100%;
  cursor: pointer;
`;

const Input = styled.input`
  line-height: 1.5;
  font-size: 1rem;
  background-color: #fff;
  border: none;
  border-radius: 8px 0px 0px 8px;
  box-sizing: border-box;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 45px;
  transition: all 200ms ease;
  width: 100%;
`;

const Label = styled.label`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 20px;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNhOGI2YzAiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTEzLDNjLTUuNTExLDAgLTEwLDQuNDg5IC0xMCwxMGMwLDUuNTExIDQuNDg5LDEwIDEwLDEwYzIuMzk2NTEsMCA0LjU5NzM4LC0wLjg1MTAxIDYuMzIyMjcsLTIuMjYzNjdsNS45NzA3LDUuOTcwN2MwLjI1MDgyLDAuMjYxMjQgMC42MjMyNywwLjM2NjQ4IDAuOTczNzEsMC4yNzUxMmMwLjM1MDQ0LC0wLjA5MTM2IDAuNjI0MTEsLTAuMzY1MDMgMC43MTU0NywtMC43MTU0N2MwLjA5MTM2LC0wLjM1MDQ0IC0wLjAxMzg4LC0wLjcyMjg5IC0wLjI3NTEyLC0wLjk3MzcxbC01Ljk3MDcsLTUuOTcwN2MxLjQxMjY2LC0xLjcyNDg4IDIuMjYzNjcsLTMuOTI1NzYgMi4yNjM2NywtNi4zMjIyN2MwLC01LjUxMSAtNC40ODksLTEwIC0xMCwtMTB6TTEzLDVjNC40MzAxMiwwIDgsMy41Njk4OCA4LDhjMCw0LjQzMDEyIC0zLjU2OTg4LDggLTgsOGMtNC40MzAxMiwwIC04LC0zLjU2OTg4IC04LC04YzAsLTQuNDMwMTIgMy41Njk4OCwtOCA4LC04eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg==")
      50% 50% no-repeat;
    background-size: 100%;
  }
`;

type OptionsProps = {
  show: boolean;
};

const Options: StyledComponent<
  "div",
  any,
  OptionsProps,
  any
> = styled.div.attrs(({ show }: OptionsProps) => ({
  style: {
    display: show ? "block" : "none",
  },
}))`
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;
`;

type OptionItemProps = {
  isSelected: boolean;
};

const OptionItem: StyledComponent<
  "div",
  any,
  OptionItemProps,
  any
> = styled.div.attrs(({ isSelected }: OptionItemProps) => ({
  style: {
    backgroundColor: isSelected ? "#f2f9fc" : "unset",
  },
}))`
  box-sizing: border-box;
  color: rgba(51, 51, 51, 0.8);
  cursor: pointer;
  display: block;
  padding: 8px 10px;
  &:hover {
    background-color: "#f2f9fc";
  }
`;

const SearchButton = styled.div`
  background-color: #f5432a;
  color: white;
  border: none;
  border-radius: 0px 8px 8px 0px;
  height: 38px;
  width: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.9;
  }
`;


const SearchableDropdown = ({
  options,
  label,
  id,
  selectedVal,
  handleChange,
}: Props) => {
  const [query, setQuery] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(selectedVal);


  const inputRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const selectOption = (option: any) => {
    setQuery(() => "");
    setSelectedValue(option[label]);
    setIsOpen((isOpen) => !isOpen);
  };

  const toggle = (e: any) => {
    setIsOpen(e && e.target === inputRef.current);
  };

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedValue) return selectedValue;

    return "";
  };

  const filter = (options: any) => {
    return options.filter(
      (option: any) =>
        option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  return (
    <>
    <Dropdown className="dropdown">
      <div>
        <div>
          <Label>
            <Input
              ref={inputRef}
              type="text"
              value={getDisplayValue()}
              placeholder="Choose a month"
              name="searchTerm"
              onChange={(e) => {
                setQuery(e.target.value);
                handleChange(null);
              }}
              onClick={toggle}
            />
          </Label>
        </div>
      </div>

      <Options show={isOpen} className={`options ${isOpen ? "open" : ""}`}>
        {filter(options).map((option: any, index: number) => {
          return (
            <OptionItem
              onClick={() => selectOption(option)}
              isSelected={option[label] === selectedVal}
              key={`${id}-${index}`}
            >
              {option[label]}
            </OptionItem>
          );
        })}
      </Options>
    </Dropdown>
    <SearchButton onClick={()=>{handleChange(selectedValue)}}>Search</SearchButton>
    </>
  );
};

export default SearchableDropdown;
