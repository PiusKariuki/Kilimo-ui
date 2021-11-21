import React, { useState, useEffect, useRef, useContext } from "react";
import useChat from "../hooks/useChat";
import { useSelector } from "react-redux";

const Chat = (): JSX.Element => {
  const user = useSelector<any>((state) => state?.User);
  const {
    messages,
    arrivalMessage,
    currentChat,
    handleStart,
    handleArrival,
    handleLog,
    getConversations,
    getMessages,
    handleSubmit,
    handleScroll,
  } = useChat();

  useEffect(() => handleStart());
  useEffect(() => handleArrival(), [arrivalMessage, currentChat]);
  useEffect(() => handleLog(user), [user]);
  useEffect(() => getConversations(user), [user]);
  useEffect(() => getMessages(), [currentChat]);
  useEffect(() => handleScroll(), [messages]);

  return <>

  </>;
};

export default Chat;
