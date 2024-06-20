// DATA GIFT CARDS

const cardData = [
  {
    text: "100",
    image: "../assets/gift1.png",
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
    image: "../assets/gift1.png",
  },
];

// GIFTCARDS

const cardListElement = document.getElementById("card-list");

cardListElement.innerHTML = "";

cardData.forEach((card) => {
  cardListElement.innerHTML += `
    <div class="card-container">
      <div class="front" style="background-image: url('${card.image}')">
        <div class="inner">
          <img src="../assets/logo.svg" class="card-logo" alt="logo" class="logo">
        </div>
      </div>
      <div class="back" style="background-image: url('../../assets/cardback.png')">
        <div class="inner">
          <div class="card-text-container">
            <p class="card-text">${card.text}</p>
            <img src="../../assets/iconavaluta.svg" class="currency-icon">
          </div>
        </div>
      </div>
    </div>
    `;
});

// SMART BOX DATA

const smartBoxData = [
  {
    text: "Safari Astrale",
    image: "../assets/img_safari.png",
    value: "31.000",
    link: "../3.2_tour/tour.html",
  },
  {
    text: "Fuga d'amore spaziale",
    image: "../assets/img_fuga.png",
    value: "57.100",
    link: "../3.1_viaggio/viaggio.html",
  },
  {
    text: "Settimana Bianca Lattea",
    image: "../assets/img_neve.png",
    value: "10.000",
  },
  {
    text: "Campeggio Stellare",
    image: "../assets/img_campeggio.png",
    value: "20.000",
  }
];


// SMART BOX
const smartBoxListElement = document.getElementById("smart-box-list");

smartBoxListElement.innerHTML = "";

smartBoxData.forEach((box) => {
  let boxHTML = `
    <div>
      <div class="box-image" style="background-image: url('${box.image}')">
        <div class="box-text"><h1>${box.text}</h1></div>
      </div>
      <div class="box-value"><p>${box.value}</p><img src="../../assets/iconavalutanera.svg" class="currency-iconn"></div>
    </div>`;

  if (box.link) {
    boxHTML = `<a href="${box.link}">${boxHTML}</a>`;
  }

  smartBoxListElement.innerHTML += boxHTML;
});
