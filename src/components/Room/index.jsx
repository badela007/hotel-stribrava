export const Room = ({ id, name, image, price, onSelect }) => {
  const handleSelect = () => {
    onSelect(id);
  };

  return (
    <div onClick={handleSelect} class="card">
      <img class="card__image" src={image} />
      <div class="card__title">{name}</div>
      <div class="card__body">{price} kč na osobu</div>
    </div>
  );
};
