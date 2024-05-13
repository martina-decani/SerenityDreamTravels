// DATA

const cardData = [
  {
    title: "Crociera tra le nebulose",
    planet: "Via Lattea",
    type: "Romantico",
    text: "Un viaggio romantico attraverso la vastità della Via Lattea, con crociere serali per osservare le splendide nebulose galattiche.",
    image:"../assets/gift1.png",
  },
  {
    title: "Campeggio stellare",
    planet: "Luna",
    type: "Avventura",
    text: "Un'avventura emozionante sulla Luna, con tende spaziali e escursioni notturne per esplorare la superficie lunare.",
    image: "../assets/img_campeggio.png",
  },
  {
    title: "Safari Astrale",
    planet: "Tatooine",
    type: "Famiglia",
    text: "Un'esperienza ideale per le famiglie su Tatooine, con safari interstellari per osservare creature aliene e paesaggi spettacolari.",
    image: "../assets/img_safari.png",
  },
  {
    title: "SPA Galattica",
    planet: "Santorinius",
    type: "Romantico",
    text: "Un rifugio romantico su Santorinius, dove le coppie possono rilassarsi e rigenerarsi con trattamenti spa esclusivi sotto il cielo stellato.",
    image: "../assets/img_spa.png",
  
  },
  {
    title: "Parco divertimenti celeste",
    planet: "Starland",
    type: "Famiglia",
    text: "Un'esperienza divertente per tutta la famiglia a Starland, con giostre spaziali, spettacoli interattivi e esibizioni di fuochi d'artificio cosmici.",
    image: "../assets/img_parco.png",
  },
  {
    title: "Yoga interstellare",
    planet: "Serenitopia",
    type: "Romantico",
    text: "Un ritiro romantico a Serenitopia, dove le coppie possono praticare yoga sotto la guida di maestri interstellari e connettersi con l'universo.",
    image: "../assets/img_yoga.png",
  },
  {
    title: "Fuga d'amore stellare",
    planet: "Etherealis",
    type: "Romantico",
    text: "Un'avventura romantica a Etherealis, con serate sotto le stelle, cene gourmet e suite spaziali per un'esperienza indimenticabile.",
    image: "../assets/img_fuga.png",
  },
  {
    title: "Settimana bianca lattea",
    planet: "Bumbafria",
    type: "Avventura",
    text: "Un'esperienza avventurosa a Bumbafria, con sport invernali sulla neve e panorami mozzafiato della Via Lattea.",
    image: "../assets/img_neve.png",
  },
];

// FUNCTIONS

  const cardListElement = document.getElementById("card-list");

  cardListElement.innerHTML = "";

  cardData
    .forEach((card) => {
      cardListElement.innerHTML += `
      <div class="card-container">
        <div class="front" style="background-image: url('${card.image}')">
          <div class="inner">
            <h1 class="card-title">${card.title}</h1>
            <h2 class="card-text">${card.planet}</h2>
          </div>
        </div>
        <div class="back" style="background-image: >
          <div class="inner">
            <p class="card-text">${card.text}</p>
            <a href="#" class="btn btn-secondary">Scopri di più</a>
          </div>
        </div>
      </div>
      `;
    });

