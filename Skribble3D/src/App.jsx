import { Link, Route, Routes } from "react-router-dom";
import Room from "./pages/Room";
import Home from "./pages/Home";
import RoomHome from "./pages/RoomHome";

function App() {
  return (
    <>
      <Link className=" text-blue-600" to="/">
        Home
      </Link>

      <Link to="/room">Room</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<RoomHome />} />
        <Route path="/room/:id" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
