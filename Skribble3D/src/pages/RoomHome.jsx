import { useState } from "react";
import { Link } from "react-router-dom";

function RoomHome() {
  const [room, setRoom] = useState("");

  return (
    <>
      <h1>Room Home</h1>
      <input
        className=" border-blue-900 border-2"
        type="number"
        value={room}
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />

      <Link to={`/room/${room}`}>ok</Link>
    </>
  );
}

export default RoomHome;
