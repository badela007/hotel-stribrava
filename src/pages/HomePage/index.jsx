import { Rooms } from '../../components/Rooms';
import './style.css';

export const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRooms] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const data = await response.json();
      setRooms(data.result);
    };

    fetchRooms();
  }, []);
  console.log(rooms);
  return (
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

      <section class="dark">
        <div class="container">
          <h2>Naše pokoje</h2>
          <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>

          <Rooms />
        </div>
      </section>

      <section class="light">
        <div class="container">
          <h2>Heading</h2>
          <div class="columns-2">
            <div class="column">
              <img src="img/image1.svg" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                accusantium, dolor quisquam doloremque quod nobis temporibus
                ducimus sapiente consectetur distinctio assumenda, nisi suscipit
                saepe. Vero.
              </p>
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
          <img src="./images/mapa.png" />
        </div>
      </section>
    </div>
  );
};
