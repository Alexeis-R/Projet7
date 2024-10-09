import React from "react";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import banner2 from "../../../public/banner_about.jpg";
import Collapse from "../../components/Collapse";
import "./About.scss";

function About() {
  return (
    <Layout>
      <main className="main_container">
        <Banner bannerImg={banner2} />
        <div className="collapse_container">
          <Collapse title="Fiabilité">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conforme aux logements, et toutes les informations
              sont régulièrement vérifiées par nos équipes.
            </p>
          </Collapse>
          <Collapse title="Respect">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </Collapse>
          <Collapse title="Service">
            <p>
              La qualité du service est au coeur de notre engagement chez Kasa.
              Nous veillons à à ce que chaque intéraction, que ce soit avec nos
              hotes ou nos locataires, soit empreinte de respect et de
              bienveillance
            </p>
          </Collapse>
          <Collapse title="Sécurité">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </Collapse>
        </div>
      </main>
    </Layout>
  );
}

export default About;
