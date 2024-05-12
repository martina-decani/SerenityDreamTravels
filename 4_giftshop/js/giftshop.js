// CARDS GIFTSHOP
const cardData = [
    {
      importo: "100",
      image: "../../assets/gift1.png",
    },
    {
      importo: "200",
      image: "../assets/img_campeggio.png",
    },
    {
      importo: "300",
      image: "../assets/img_safari.png",
    },
    {
      importo: "500",
      image: "../assets/img_spa.png",
    
    },
    {
      importo: "800",
      image: "../assets/img_parco.png",
    },
    {
      importo: "1000",
      image: "../assets/img_yoga.png",
    },
    {
      importo: "Fuga d'amore stellare",
      image: "../assets/img_fuga.png",
    },
    {
      importo: "Settimana bianca lattea",
      image: "../assets/img_neve.png",
    },
  ];
  
  // FUNCTIONS
  
  const cardListElement = document.getElementById("card-list");

  cardListElement.innerHTML = "";

  cardData
    .filter((card) => {
      return planet ? card.planet === planet : true;
    })
    .filter((card) => {
      return type ? card.type === type : true;
    })
    .forEach((card) => {
      cardListElement.innerHTML += `
      <div class="card-container">
        <div class="front" style="background-image: url('${card.image}')">
          <div class="inner">
            <h1 class="card-title">${card.importo}</h1>
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