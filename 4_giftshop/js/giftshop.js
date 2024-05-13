// DATA

const cardData = [
  {
    text: "100",
    image:"../assets/gift1.png",
  },
  {
    text: "200",
    image: "../assets/gift2.png",
  },
  {
    text: "300",
    image: "../assets/gift3.png",
  },
  {
    text: "500",
    image: "../assets/gift4.png"
  },
  {
    text: "800",
    image: "../assets/gift5.png",
  },
  {
    text: "1000",
    image: "../assets/gift6.png",
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

