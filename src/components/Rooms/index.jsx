import { Room } from '../../components/Room';

export const Rooms = ({ pokoje, onSelect }) => {
  return (
    <>
      <section className="dark">
        <div class="container">
          <h2>Naše pokoje</h2>
          <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
          <div class="cards-row">
            {pokoje.map((room) => (
              <Room
                onSelect={onSelect}
                key={room.id}
                id={room.id}
                name={room.name}
                image={`http://localhost:4000/assets/${room.image}`}
                price={room.price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
