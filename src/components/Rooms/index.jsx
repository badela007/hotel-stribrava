import { useEffect, useState } from "react";
import { Room } from "../../components/Room";

export const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchedRooms = async () => {
      const response = await fetch("http://localhost:4000/api/rooms");
      const data = await response.json();
      setRooms(data.data);
    };

    fetchedRooms();
  }, []);
  console.log(rooms);

  return (
    <div class="cards-row">
      {rooms.map((room) => (
        <Room name={room.name} image={`http://localhost:4000/assets/${room.image}`} price={room.price} />
      ))}
    </div>
  );
};
