import { FadeInSection } from "./FadeInSection";
function Work() {
  return (
    <div id="work-border-container">
      <div id="work-container-page">
        <section className="work">
          <section className="work-header">
            <h2>Undergraduate Researcher</h2>
            <h3>Jan. 2020 – Aug. 2021</h3>
          </section>
          <div className="image-work">
            <img src={require("./images/sio2-graphene.gif")} alt="BCOSC card" />
          </div>
          <section className="work-description">
            <ul>
              <li>
                Utilized LAMMPS scripts to run molecular dynamics simulations to
                analyze SiCO glass layer properties and visualized large
                simulation data sets using KaleidaGraph and Excel.
              </li>
              <br></br>
              <li>
                Key Results: Simulations reduced experimental time from 1–2
                weeks to just 1–2 days.
              </li>
              <br></br>
              <li>
                Presentation at Annual Celebration of Excellence by Students
                (ACES), UTA, Sept. 2020. (Poster) ‘Investigation of 2D-Diffusion
                in Silicon Oxycarbides (SiCO)’
              </li>
            </ul>
          </section>
        </section>
        <section className="work">
          <section className="work-header">
            <h2>NSF-PIRE Program - Research Analysis </h2>
            <h3>Summer 2020</h3>
          </section>
          <div className="image-work">
            <img src={require("./images/NSF-logo.png")} alt="BCOSC card" />
          </div>
          <section className="work-description">
            <ul>
              <li>
                Sponsored by NSF to continue research in SiCO glass layer
                properties and uncover insights in diffusion mechanisms with
                molecular dynamic simulations in LAMMPS.
              </li>
              <br></br>
              <li>
                Presentation at National Science Foundation-PIRE workshop on
                polymer derived ceramic SiCO.
              </li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Work;
