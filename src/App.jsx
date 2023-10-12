import "./App.css";
import one from "./assets/images/1.png";
import two from "./assets/images/2.png";
import three from "./assets/images/3.png";

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>Globe Roamer</h1>
      </header>
      <div className="featured">
        <img src={one} alt="balloons" className="img" />
        <div>
          <h2>Balloon Magic</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem voluptate corporis cupiditate repudiandae nihil sunt
            sit! Aliquid optio neque facere id mollitia accusamus atque enim
            fugit ipsam, eum porro aliquam. Dolor, tempora suscipit a
            temporibus, magni dolore architecto fugiat incidunt, laboriosam
            ipsum et sit. Quos quibusdam temporibus, repellendus ipsa cum, iure
            asperiores necessitatibus maxime assumenda nesciunt sunt ut!
            Asperiores, nemo. Dolore suscipit unde quo, culpa eos iste, neque
            rem error rerum distinctio debitis! Necessitatibus minus nam iure
            fugiat qui quae quidem quam, optio reprehenderit dignissimos in
            eius, aspernatur, commodi harum.
          </p>
        </div>
      </div>
      <article className="one">
        <img src={one} alt="balloons" className="img" />
        <div>
          <h3>Balloon Magic</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex labore
            facere fugit laudantium soluta? Nisi distinctio eos doloribus quam!
            Iusto pariatur quas culpa suscipit consectetur laborum similique
            ipsam, maxime dicta?
          </p>
        </div>
      </article>
      <article className="two">
        <img src={two} alt="van" className="img" />
        <div>
          <h3>Road to Freedom</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex labore
            facere fugit laudantium soluta? Nisi distinctio eos doloribus quam!
            Iusto pariatur quas culpa suscipit consectetur laborum similique
            ipsam, maxime dicta?
          </p>
        </div>
      </article>
      <article className="three">
        <img src={three} alt="lake" className="img" />
        <div>
          <h3>Clear Lake</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex labore
            facere fugit laudantium soluta? Nisi distinctio eos doloribus quam!
            Iusto pariatur quas culpa suscipit consectetur laborum similique
            ipsam, maxime dicta?
          </p>
        </div>
      </article>
    </div>
  );
}

export default App;
