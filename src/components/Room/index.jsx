export const Room = ({ name, image, price }) => {
  return (
    <div class="card">
      <img class="card__image" src={image} />
      <div class="card__title">{name}</div>
      <div class="card__body">{price} kč na osobu</div>
    </div>
  );
};
