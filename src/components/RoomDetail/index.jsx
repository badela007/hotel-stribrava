export const RoomDetail = ({ id, name, description, image }) => {
  return (
    <>
      <h2>{name}</h2>
      <div class="columns-2">
        <div class="column">
          <img src={image} />
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
