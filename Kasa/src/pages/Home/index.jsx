import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import banner1 from "../../../public/banner.jpg";
import Thumbs from "../../components/Thumbs";
import "./Home.scss";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    async function fetchLogements() {
      try {
        const response = await fetch("./logements.json");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        const data = await response.json();
        setLogements(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLogements();
  }, []);

  return (
    <Layout>
      <main className="main_container">
        <Banner bannerImg={banner1} text="Chez vous, partout et ailleurs" />
        <div className="thumbs_container">
          <section className="thumbs">
            {logements.length > 0 ? (
              logements.map((logement) => (
                <Link key={logement.id} to={`/logement/${logement.id}`}>
                  <Thumbs title={logement.title} cover={logement.cover} />
                </Link>
              ))
            ) : (
              <p>Chargement en cours...</p>
            )}
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
