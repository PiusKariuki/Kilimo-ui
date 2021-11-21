import { useState, useEffect, useRef, useContext } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const useChat = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState<any>(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState<any>(null);
  const [err, setErr] = useState<any>(null);

  const socket = useRef<any>();
  const scrollRef = useRef<any>();

  const handleStart = () => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data: { sender: any; text: any }) =>
      setArrivalMessage({
        sender: data.sender,
        text: data.text,
        createdAt: Date.now(),
      })
    );
  };

  const handleArrival = () => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev: any) => [...prev, arrivalMessage]);
  };

  const handleLog = (user: any) => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users: any) =>
      setOnlineUsers(
        user.followings.filter((f: any) =>
          users.some((u: any) => u.userId === f)
        )
      )
    );
  };

  const getConversations: Function = async (user: any) => {
    try {
      const res = await axios.get(`/conversations/${user._id}`);
      setConversations(res.data);
    } catch (e) {
      setErr(e);
    }
  };

  const getMessages:Function = async () => {
    try {
      const res = await axios.get(`/messages/${currentChat?._id}`);
      setMessages(res.data);
    } catch (e) {
      setErr(e);
    }
  };

  const handleSubmit = async (e: any, user: any) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member: any) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (e) {
      setErr(e);
    }
  };

  const handleScroll = () =>
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });

  return {
    messages,
    arrivalMessage,
    currentChat,
    handleStart,
    handleArrival,
    handleLog,
    getConversations,
    getMessages,
    handleSubmit,
    handleScroll
  };
};

export default useChat;
