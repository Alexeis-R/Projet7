import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import "./Error.scss";

function ErrorPage() {
  return (
    <Layout>
      <div className="error_container">
        <h1 className="error_container_title">404</h1>
        <p className="error_container_text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </Layout>
  );
}

export default ErrorPage;
