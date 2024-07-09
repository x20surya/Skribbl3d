import io from "socket.io-client";
import { useEffect, useMemo } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Room() {
  const socket = useMemo(() => io.connect("http://localhost:3000"), []);

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
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });

    socket.on("receive_message", (data) => {
      setMessageReveived(data.message);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <input
        placeholder="Message.."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        onClick={() => {
          sendMessage();
          setMessage("");
        }}
      >
        send{" "}
      </button>
      <h1>{messageReceived}</h1>
    </>
  );
}

export default Room;
