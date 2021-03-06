import React from "react";
import Contact from "./components/Contact";
import Whiskeerson from "./images/mr-whiskerson.png";
import Fluffy from "./images/fluffykins.png";
import Felix from "./images/felix.png";
import Pumpkin from "./images/pumpkin.png";
import "./style.css";

export default function App() {
  return (
    <div className="contacts">
      <Contact
        img={Whiskeerson}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={Fluffy}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={Felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img={Pumpkin}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}
