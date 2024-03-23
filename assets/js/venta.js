// import swal from "sweetalert";
// ul Venta
const data = [
  "Triumph(3)",
  "Suzuki(10)",
  "Yamaha(4)",
  "Honda(2)",
  "Ducati(1)",
  "Kawasaki(2)",
];
const d = document.querySelector("#nombres");
for (let item of data) {
  d.innerHTML += "<li class='items'>" + item + "</li>";
}

//card1
const dataCard1 = {
  src: '<img class="img" src="assets/img/triumph-daytona-675.jpg" alt="Daytona">',
  modelo: "Daytona",
  valor: "$9.500.000",
  comprar: "Comprar",
  uso: "urbano",
};

if (dataCard1.uso === "ambos") {
  const articuloSection = document.querySelector("#card1");
  articuloSection.innerHTML = `
    <card class="grid">
    <div class="card">
    <img class="img">${dataCard1.src}</img>
    <h5 class="modelo">${dataCard1.modelo}</h5>
    <p class="valor">${dataCard1.valor}</p>
    <p class="uso">Uso Pavimento y Tierra</p>
    <a href="#" class="btn" onclick="message()">${dataCard1.comprar}</a>
    </div>
    `;
} else {
  const articuloSection = document.querySelector("#card1");
  articuloSection.innerHTML = `
    <card class="grid">
    <div class="card">
    <img class="img">${dataCard1.src}</img>
    <h5 class="modelo">${dataCard1.modelo}</h5>
    <p class="valor">${dataCard1.valor}</p>
    <p class="uso">Uso Pavimento</p>
    <a href="#" class="btn" onclick="message()">${dataCard1.comprar}</a>
    </div>
    `;
}

//card2
const dataCard2 = {
  src: '<img class="img" src="assets/img/triumph-street-scrambler-2021.jpg" alt="Scrambler"',
  modelo: "Scrambler",
  valor: "$12.490.000",
  comprar: "Comprar",
  uso: "urbano",
};

if (dataCard1.uso === "ambos") {
  const articuloSection2 = document.querySelector("#card2");
  articuloSection2.innerHTML = `
        <card class="grid">
        <div class="card">
        <img class="img">${dataCard2.src}</img>
        <h5 class="modelo">${dataCard2.modelo}</h5>
        <p class="valor">${dataCard2.valor}</p>
        <p class="uso">Uso Pavimento y Tierra</p>
        <a href="#" class="btn" onclick="message()">${dataCard2.comprar}</a>
        </div>
        `;
} else {
  const articuloSection2 = document.querySelector("#card2");
  articuloSection2.innerHTML = `
        <card class="grid">
        <div class="card">
        <img class="img">${dataCard2.src}</img>
        <h5 class="modelo">${dataCard2.modelo}</h5>
        <p class="valor">${dataCard2.valor}</p>
        <p class="uso">Uso Pavimento</p>
        <a href="#" class="btn" onclick="message()">${dataCard2.comprar}</a>
        </div>
        `;
}

//card3
const dataCard3 = {
  src: '<img class="img" src="assets/img/triumph-street-triple-2106.jpg" alt="Triple">',
  modelo: "Street Triple 675",
  valor: "$10.690.000",
  comprar: "Comprar",
  uso: "urbano",
};

if (dataCard1.uso === "ambos") {
  const articuloSection3 = document.querySelector("#card3");
  articuloSection3.innerHTML = `
          <card class="grid">
          <div class="card">
          <img class="img">${dataCard3.src}</img>
          <h5 class="modelo">${dataCard3.modelo}</h5>
          <p class="valor">${dataCard3.valor}</p>
          <p class="uso">Uso Pavimento y Tierra</p>
          <a href="#" class="btn" onclick="message()">${dataCard3.comprar}</a>
          </div>
          `;
} else {
  const articuloSection3 = document.querySelector("#card3");
  articuloSection3.innerHTML = `
          <card class="grid">
          <div class="card">
          <img class="img">${dataCard3.src}</img>
          <h5 class="modelo">${dataCard3.modelo}</h5>
          <p class="valor">${dataCard3.valor}</p>
          <p class="uso">Uso Pavimento</p>
          <a href="#" class="btn" onclick="message()">${dataCard3.comprar}</a>
          </div>
          `;
}

function message() {
  swal({
    title: "Aun no Disponible",
    text: "Desea volver a la pagina principal?, o continuar  buscando otros modelos?",
    icon: "info",
    buttons: true,
    dangerMode: true,
  }).then((volver) => {
    if (volver) {
      location.href = "index.html";
    } else {
      swal("Por favor Continue!");
    }
  });
}
