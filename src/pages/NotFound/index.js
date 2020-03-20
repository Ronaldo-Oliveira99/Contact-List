import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found">
    Página não encontrada
    <Link to="/">Voltar</Link>
  </div>
);

export default NotFound;
