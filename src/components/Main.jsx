import React from "react";
import Card from "./Card";
import clanovi from "../clanovi";

function CreateCard(clan) {
  return <Card name={clan.name} img={clan.slika} opis={clan.opis} />;
}

function Main() {
  return (
    <main>
      {clanovi.map(CreateCard)}
      {/* <Card
        // key={2}
        name={clanovi[0].name}
        img={clanovi[0].slika}
        opis={clanovi[0].opis}
      />
      <Card
        // key={2}
        name={clanovi[1].name}
        img={clanovi[1].slika}
        opis={clanovi[1].opis}
      />
      <Card
        // key={2}
        name={clanovi[2].name}
        img={clanovi[2].slika}
        opis={clanovi[2].opis}
      /> */}
    </main>
  );
}

export default Main;
