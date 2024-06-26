export const RoomDetail = ({ id, name, description, image }) => {
  return (
    <>
      <section class="light">
        <div class="container">
          <h2>{name}</h2>
          <div class="columns-2">
            <div class="column">
              <img src={image} />
              <p>{description}</p>
            </div>
            <form>
              <div class="form-fields">
                <label htmlFor="field1" class="field-label">
                  Field 1:
                </label>
                <input id="field1" class="field-input" type="text" />

                <label htmlFor="field2" class="field-label">
                  Field 2:
                </label>
                <input id="field2" class="field-input" type="text" />

                <label htmlFor="select" class="field-label">
                  Select:
                </label>
                <select id="select" class="field-input">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </select>

                <label htmlFor="check1" class="field-label">
                  Checkbox 1:
                </label>
                <input id="check1" class="field-input" type="checkbox" />
              </div>
              <button class="wide">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
