import io from "socket.io-client";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const socket = io.connect("http://localhost:3000");

function Room() {
  const { id } = useParams();
  //Room State
  const [room, setRoom] = useState(id);

  //Messages
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReveived] = useState("");

  socket.emit("join_room", room);

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReveived(data.message);
    });
  }, [socket]);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <input
        placeholder="Message.."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={sendMessage}>send </button>
      <h1>{messageReceived}</h1>
    </>
  );
}

export default Room;
