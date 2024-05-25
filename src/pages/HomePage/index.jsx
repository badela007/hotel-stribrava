import { RoomDetail } from '../../components/RoomDetail';
import { useEffect, useState } from 'react';
import { Rooms } from '../../components/Rooms';
import './style.css';

export const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(0);

  useEffect(() => {
    const fetchedRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const data = await response.json();
      setRooms(data.data);
    };

    fetchedRooms();
  }, []);
  console.log(selectedRoomId);

  return (
    <>
      <div className="container">
        <div class="banner">
          <div class="banner__stripe">
            <div class="container">
              <h1>Template</h1>
              <p class="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                sequi.
              </p>
            </div>
          </div>
        </div>

        <Rooms pokoje={rooms} onSelect={setSelectedRoomId} />
      </div>
      <div>
        {selectedRoomId === null ? (
          'Vyberte si pokoj'
        ) : (
          <>
            <section className="light">
              <div class="container">
                <RoomDetail />
              </div>
            </section>
          </>
        )}
      </div>
      <section class="dark">
        <div class="container columns-2">
          <div class="columns">
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              mollitia ut pariatur eos error sunt blanditiis repellat similique
              aperiam temporibus.
            </p>
          </div>
          <img src="img/image1.svg" />
        </div>
      </section>
    </>
  );
};
