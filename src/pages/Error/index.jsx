import React from "react";
import { Link } from 'react-router-dom'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Error.scss";

function ErrorPage() {
  return (
    <div>
      <Header />
      <div className="error_container">
        <h1 className="error_container_title">404</h1>
        <p className="error_container_text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to ='/'>Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
