import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Logement.scss";
import Layout from "../../components/Layout";
import Collapse from "../../components/Collapse";
import Tags from "../../components/Tags";
import Rating from "../../components/Rating";
import Carrousel from "../../components/Carrousel";

function Logement() {
  const { logementId } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLogements() {
      try {
        const response = await fetch("/logements.json");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        const data = await response.json();

        const logementData = data.find((item) => item.id === logementId);

        if (!logementData) {
          throw new Error("Logement non trouvé");
        }
        setLogement(logementData);
      } catch (error) {
        setError(error.message);
        navigate("/error");
      }
    }
    fetchLogements();
  }, [logementId]);

  if (error) {
    return (
      <Layout>
        <main className="main_container">
          <p>{error}</p>
        </main>
      </Layout>
    );
  }

  if (!logement) {
    return (
      <Layout>
        <main className="main_container">
          <p>Chargement des données...</p>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="main_container">
        <div key={logement.id} className="logement_item">
          <Carrousel pictures={logement.pictures} />
          <div className="logement_item_content">
            <div className="logement_item_text_tags">
              <div className="logement_item_text">
                <h3 className="logement_item_title">{logement.title}</h3>
                <p className="logement_item_location">{logement.location}</p>
              </div>
              <div className="logement_item_tags">
                <Tags tags={logement.tags} />
              </div>
            </div>
            <div className="logement_item_host_rating">
              <div className="host">
                <p className="logement_item_host_name">
                  {logement.host.name.split(" ")[0]}
                  <br />
                  {logement.host.name.split(" ")[1]}
                </p>
                <img
                  className="logement_item_host_picture"
                  src={logement.host.picture}
                  alt={logement.host.name}
                />
              </div>
              <Rating value={logement.rating} max={5} />
            </div>
          </div>
          <div className="logement_item_collapse">
            <Collapse
              className="logement_item_collapse_item"
              title="Description"
            >
              <p>{logement.description}</p>
            </Collapse>
            <Collapse
              className="logement_item_collapse_item"
              title="Équipements"
            >
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Logement;
