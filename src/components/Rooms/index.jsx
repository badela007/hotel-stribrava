import { useEffect, useState } from "react";
import { Room } from "../../components/Room";
import { RoomDetail } from "../RoomDetail";

export const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleSelectedRoom = () => {
    setSelectedRoom()
  }

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
    <>
    <div class="cards-row">
      {rooms.map((room) => (
        <Room onSelect={handleSelectedRoom} key={room.id} name={room.name} image={`http://localhost:4000/assets/${room.image}`} price={room.price} />
      ))}
    </div>
    <div>
    <RoomDetail id={room.id} name={selectedRoom} description={room.description} image={room.image} onSelect={setSelectedRoom}/>
    </div>
    </>
  );
};

