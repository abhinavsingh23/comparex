import React from "react";
import styled from "styled-components";
import messageIcon from "./message.png";
import botIcon from "./botIcon.png";
import userIcon from "./userIcon.png";
import plusIcon from "./plusIcon.svg";
import closeIcon from "./closeIcon.svg";

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 25px;
`;

const ChatWindow = styled.div`
  height: 440px;
  width: 360px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 5px;
  position: relative;
`;

const ChatHeader = styled.div`
  height: 45px;
  width: 96%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding-left: 4%;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
`;

const MessageIcon = styled.img`
  height: 28px;
  width: 28px;
  float: right;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const CloseIcon = styled.img`
  height: 30px;
  width: 30px;
  float: right;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const ChatbotMessageRow = styled.div`
  display: flex;
  padding: 60px 10px 0px 10px;
  flex-direction: row;
  align-items: center;
`;

const UserMessageRow = styled.div`
  display: flex;
  padding: 20px 10px 0px 10px;
  flex-direction: row-reverse;
  align-items: center;
`;

const BotIcon = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const HorizontalSpacer = styled.div`
  width: 10px;
`;

const MessageArea = styled.div`
  max-width: 60%;
  border-radius: 15px;
  padding: 10px;
  background-color: #d4d8e4;
  color: #0d0c0c;
  font-weight: 500;
`;

const PlusIcon =  styled.img`
    width: 20px;
    height: 20px;
`;

const InputArea = styled.div`
    position: absolute;
    bottom:0;
    width: -webkit-fill-available;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
    border: none;
    border-radius: 12px;
    width: 100%;
    height: 30px;
    padding: 0px 10px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
`;



const Chatbot = () => {
  const [showChatWindow, setShowChatWindow] = React.useState(false);

  const onChatOpen = () => {
    setShowChatWindow(true);
  };

  return (
    <ChatbotContainer id="abcc">
      {showChatWindow && (
        <ChatWindow>
          <ChatHeader> AI Assistant </ChatHeader>

          <ChatbotMessageRow>
            <BotIcon src={botIcon} />
            <HorizontalSpacer />
            <MessageArea> How can i help you today?</MessageArea>
          </ChatbotMessageRow>

          <UserMessageRow>
            <BotIcon src={userIcon} />
            <HorizontalSpacer />
            <MessageArea>
              Hi, can you help me understand new features of product A?
            </MessageArea>
          </UserMessageRow>

            <InputArea>
                <PlusIcon src={plusIcon}/>
                <HorizontalSpacer />

                <Input placeholder="Type your message here ..."/>
            </InputArea>

        </ChatWindow>
      )}

      {showChatWindow ? (
        <CloseIcon
          src={closeIcon}
          onClick={() => {
            setShowChatWindow(false);
          }}
        />
      ) : (
        <MessageIcon src={messageIcon} onClick={onChatOpen} />
      )}
    </ChatbotContainer>
  );
};

export default Chatbot;
