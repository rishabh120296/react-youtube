import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName, getRandomSentence } from "../utils/helper";

const ChatComponent = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  const [messageToSend, setMessageToSend] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      //console.log("API call");
      dispatch(
        addMessage({ name: generateName(), message: getRandomSentence() })
      );
    }, 1500);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="ml-2 grow flex flex-col gap-1">
      <div className="border-black bg-gray-100 border-2 border-solid overflow-y-scroll h-[400px] flex flex-col-reverse">
        {chatMessage.map((chat) => (
          <ChatMessage info={chat} />
        ))}
      </div>
      <form
        className=" w-full flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({ name: "Aarushi Gupta", message: messageToSend })
          );
          setMessageToSend("");
        }}
      >
        <input
          className="border-black border-2 border-solid grow h-9 p-2"
          placeholder="Type in your message here ..."
          value={messageToSend}
          onChange={(e) => setMessageToSend(e.target.value)}
        ></input>
        <button className="bg-red-300 rounded-md border-black border-solid border-2 p-2 w-24">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
