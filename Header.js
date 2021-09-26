import React, { useState, useEffect } from "react";
import Interval from "./Interval";
import { ContactForm } from "./Contact";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  library.add(faThumbsUp);
  library.add(faThumbsDown);
  const [countPositive, setCountPositive] = useState(0);
  const [countNegative, setCountNegative] = useState(0);

  return (
    <>
      <Interval />

      {/* J'affiche la valeur de "count" */}
      <p>Avis positifs : {countPositive}</p>

      {/* En cliquant sur ce bouton, j'ajoute 1 à la valeur de mon compteur */}
      <button onClick={() => setCountPositive(countPositive + 1)}>
        <FontAwesomeIcon icon="thumbs-up" />
      </button>
      <p>Avis négatifs: {countNegative}</p>
      {/* En cliquant sur ce bouton, je soustrais 1 à la valeur de mon compteur */}
      <button onClick={() => setCountNegative(countNegative + 1)}>
        <FontAwesomeIcon icon="thumbs-down" />
      </button>
      <br />
      <br />
      <ContactForm />
    </>
  );
}
export default Header;
