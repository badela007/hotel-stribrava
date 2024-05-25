export const Room = ({ name, id, image, price, onSelect }) => {
  return (
    <div class="card" onClick={() => onSelect(id)}>
      <img class="card__image" src={image} />
      <div class="card__title">{name}</div>
      <div class="card__body">{price} kč na osobu</div>
    </div>
  );
};
