import React from "react";
import styled, { StyledComponent } from "styled-components";
import home from "../icons/home.svg";
import python from "../icons/python.svg";
import pythonRed from "../icons/pythonRed.svg";
import java from "../icons/java.svg";
import javaRed from "../icons/javaRed.svg";
import r from "../icons/r.png";
import rRed from "../icons/rRed.png";
import logout from "../icons/logout.png";
import logoutRed from "../icons/logoutRed.png";
import calender from "../icons/calender.png";
import calenderRed from "../icons/calenderRed.png";
import message from "../icons/message.png";
import messageRed from "../icons/messageRed.png";
import { useIsMobileScreen } from "../useMediaQuery";

const FirstSection = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const SecondSection = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const ThirdSection = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-self: self-end;
  padding-bottom: 20px;
`;

type NavbarProps = {
  expanded: boolean;
};

const Navbar: StyledComponent<"div", any, NavbarProps, any> = styled.div.attrs(
  ({ expanded }: NavbarProps) => ({
    style: {
      width: expanded ? "270px" : "85px",
      minWidth: expanded ? "270px" : "85px",
    },
  })
)`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  height: 100vh;
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  transition: 0.5s;
  overflow-x: hidden;
  white-space: nowrap;
  align-items: flex-start;
  justify-content: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding-top: 30px;
  color: white;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  padding: 20px;
  cursor: pointer;
`;

type IconRowProps = {
  isExpanded: boolean;
};

const IconRow: StyledComponent<
  "div",
  any,
  IconRowProps,
  any
> = styled.div.attrs(({ isExpanded }: IconRowProps) => ({
  style: {
    gridTemplateColumns: isExpanded ? "1fr 3fr" : "auto",
  },
}))`
  display: grid;
  width: 100%;
  grid-gap: 8px;
  &:hover {
    color: #f6432a;
  }
`;

type IconTextProps = {
  isHovering: boolean;
};

const IconText: StyledComponent<
  "div",
  any,
  IconTextProps,
  any
> = styled.div.attrs(({ isHovering }: IconTextProps) => ({
  style: {
    color: isHovering ? "#f6432a" : "#ffffff",
  },
}))`
  padding: 20px;
  cursor: pointer;
`;

const SideNavbar = () => {
  const [pythonIcon, setPythonIcon] = React.useState(false);
  const [rIcon, setRIcon] = React.useState(false);
  const [javaIcon, setJavaIcon] = React.useState(false);
  const [calenderIcon, setCalenderIcon] = React.useState(false);
  const [messageIcon, setMessageIcon] = React.useState(false);
  const [logoutIcon, setLogoutIcon] = React.useState(false);

  const [expandedNavbar, setExpandedNavbar] = React.useState(false);

  const isMobileScreen = useIsMobileScreen();

  const toggleExpandedNavbar = () => {
    if (!isMobileScreen) {
      setExpandedNavbar(!expandedNavbar);
    }
  };

  const toggleIconOnHover = (iconType: string) => {
    switch (iconType) {
      case "python":
        setPythonIcon(true);
        break;
      case "r":
        setRIcon(true);
        break;
      case "java":
        setJavaIcon(true);
        break;
      case "calender":
        setCalenderIcon(true);
        break;
      case "message":
        setMessageIcon(true);
        break;
      case "logout":
        setLogoutIcon(true);
        break;
    }
  };

  const toggleIconOnHoverExit = (iconType: string) => {
    switch (iconType) {
      case "python":
        setPythonIcon(false);
        break;
      case "r":
        setRIcon(false);
        break;
      case "java":
        setJavaIcon(false);
        break;
      case "calender":
        setCalenderIcon(false);
        break;
      case "message":
        setMessageIcon(false);
        break;
      case "logout":
        setLogoutIcon(false);
        break;
    }
  };

  return (
    <Navbar
      expanded={expandedNavbar}
      onMouseEnter={toggleExpandedNavbar}
      onMouseLeave={toggleExpandedNavbar}
    >
      <FirstSection>
        <Logo>{expandedNavbar ? "compareX" : "CX"}</Logo>
      </FirstSection>

      <SecondSection>
        <IconRow
          isExpanded={expandedNavbar}
          onMouseEnter={() => toggleIconOnHover("home")}
          onMouseLeave={() => toggleIconOnHoverExit("home")}
        >
          <Icon src={home} />
          {expandedNavbar && <IconText isHovering={true}> Home </IconText>}
        </IconRow>

        <IconRow
          isExpanded={expandedNavbar}
          onMouseEnter={() => toggleIconOnHover("python")}
          onMouseLeave={() => toggleIconOnHoverExit("python")}
        >
          <Icon src={pythonIcon ? pythonRed : python} />
          {expandedNavbar && (
            <IconText isHovering={pythonIcon}> Python </IconText>
          )}
        </IconRow>
        <IconRow
          isExpanded={expandedNavbar}
          onMouseEnter={() => toggleIconOnHover("r")}
          onMouseLeave={() => toggleIconOnHoverExit("r")}
        >
          <Icon src={rIcon ? rRed : r} />
          {expandedNavbar && (
            <IconText isHovering={rIcon}> R Programming </IconText>
          )}
        </IconRow>
        <IconRow
          isExpanded={expandedNavbar}
          onMouseEnter={() => toggleIconOnHover("java")}
          onMouseLeave={() => toggleIconOnHoverExit("java")}
        >
          <Icon src={javaIcon ? javaRed : java} />
          {expandedNavbar && <IconText isHovering={javaIcon}> Java </IconText>}
        </IconRow>
        <IconRow
          isExpanded={expandedNavbar}
          onMouseEnter={() => toggleIconOnHover("calender")}
          onMouseLeave={() => toggleIconOnHoverExit("calender")}
        >
          <Icon src={calenderIcon ? calenderRed : calender} />
          {expandedNavbar && (
            <IconText isHovering={calenderIcon}> Calendar </IconText>
          )}
        </IconRow>
      </SecondSection>

      <ThirdSection>
        <IconRow
          isExpanded={expandedNavbar}
          onMouseEnter={() => toggleIconOnHover("message")}
          onMouseLeave={() => toggleIconOnHoverExit("message")}
        >
          <Icon src={messageIcon ? messageRed : message} />
          {expandedNavbar && (
            <IconText isHovering={messageIcon}> Message </IconText>
          )}
        </IconRow>
        <IconRow
          isExpanded={expandedNavbar}
          onMouseEnter={() => toggleIconOnHover("logout")}
          onMouseLeave={() => toggleIconOnHoverExit("logout")}
        >
          <Icon src={logoutIcon ? logoutRed : logout} />
          {expandedNavbar && (
            <IconText isHovering={logoutIcon}> Logout </IconText>
          )}
        </IconRow>
      </ThirdSection>
    </Navbar>
  );
};

export default SideNavbar;
