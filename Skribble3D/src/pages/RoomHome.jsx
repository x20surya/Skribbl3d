import { useState } from "react";
import { Link } from "react-router-dom";

function RoomHome() {
  const [room, setRoom] = useState(null);

  return (
    <>
      <h1>Room Home</h1>
      <input className=" border-blue-900 border-2"
        type="number"
        value={room}
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />
      <Link to={`/room/${room || 1}`}>ok</Link>
    </>
  );
}

export default RoomHome;
