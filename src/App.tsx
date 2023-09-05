import React from "react";
import "./App.css";
import styled from "styled-components";

import Chatbot from "./chatbot";
import SideNavbar from "./navbar";
import ContentView from "./contentView";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

const App = () => {
  return (
    <PageContainer>
      <SideNavbar />
      <ContentView />
      <Chatbot />
    </PageContainer>
  );
};

export default App;
