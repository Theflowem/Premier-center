$(document).ready(function () {
  PopUpHide();
  sayTnxHide();
});

const paints = [
  {
    id: 1,
    name: "Краска 'УНИКОМ' для бетона",
    cost: 3400,
  },
  {
    id: 2,
    name: "Краска по металлу 'ДАКРИЛ'",
    cost: 4200,
  },
  {
    id: 3,
    name: "Дорожная краска 'ДАКРИЛ'",
    cost: 3350,
  },
  {
    id: 4,
    name: "Краска по дереву «ДАЛКИД»",
    cost: 3200,
  },
  {
    id: 5,
    name: "Краска по металлу металлик “УНИКОМ”",
    cost: 5700,
  },
  {
    id: 6,
    name: "Краска по бетонному полу 'ДАКРИЛ'",
    cost: 3700,
  },
  {
    id: 7,
    name: "Краска 'УНИКОМ' для бетонных полов",
    cost: 3400,
  },
  {
    id: 8,
    name: "Краска 'УНИКОМ' для деревянного пола",
    cost: 3800,
  },
];

const emal = [
  {
    id: 1,
    name: "Двухкомпонентная эмаль по металлу",
    cost: 7000,
  },
  {
    id: 2,
    name: "Защитная спецэмаль RP-1",
    cost: 6750,
  },
  {
    id: 3,
    name: "Эмаль по металлу 'ЭПОКСТОН' 2К",
    cost: 6700,
  },
  {
    id: 4,
    name: "Грунт-эмаль по ржавчине 'ЭПОКСТОН'",
    cost: 6900,
  },
  {
    id: 5,
    name: "Однокомпонентная  эмаль 'ПОЛИУРЕТОН'",
    cost: 7400,
  },
  {
    id: 6,
    name: "Эмаль по бетонному полу 'ЭПОКСТОН' 2К",
    cost: 6500,
  },
  {
    id: 7,
    name: "Краска эмаль  «ДАЛКИД»",
    cost: 3400,
  },
];

const grunt = [];

// {
//   id: 16,
//   name: "Грунтовка антикоррозионная Текс",
//   cost: 1484,
// },
// {
//   id: 17,
//   name: "Грунтовка Лакра ГФ-021 серая 1 кг",
//   cost: 155,
// },
// {
//   id: 18,
//   name: "Грунтовка антикоррозионная Текс",
//   cost: 200,
// },
// {
//   id: 19,
//   name: "Грунтовка Tikkurila Rostex Super",
//   cost: 1100,
// },
// {
//   id: 20,
//   name: "Грунт-краска Teknos Futura 3 2,7 л",
//   cost: 1100,
// },

var cartArray = [];

document.onclick = function (e) {
  const element = e.target;
  const type = element.dataset.type;

  // console.log("123");
  console.log(e.target);

  if (element.id === "add_cart" && type === "paints") {
    const id = element.dataset.id;
    const imgSrc = element.dataset.img;

    console.log({ id });
    console.log({ imgSrc });

    const findedElement = paints.find((i) => i.id === Number(id));
    findedElement.imgPath = imgSrc;
    cartArray.push(findedElement);

    console.log(cartArray);

    localStorage.setItem("cart", JSON.stringify(cartArray));
  }

  if (element.id === "add_cart" && type === "emal") {
    const id = element.dataset.id;

    console.log({ id });

    const findedElement = emal.find((i) => i.id === Number(id));
    findedElement.imgPath = imgSrc;
    cartArray.push(findedElement);

    console.log(cartArray);

    localStorage.setItem("cart", JSON.stringify(cartArray));
  }

  if (element.id === "add_cart" && type === "grunt") {
    const id = element.dataset.id;

    console.log({ id });

    const findedElement = grunt.find((i) => i.id === Number(id));
    findedElement.imgPath = imgSrc;
    cartArray.push(findedElement);

    console.log(cartArray);

    localStorage.setItem("cart", JSON.stringify(cartArray));
  }

  if (element.className === "btn__buy") {
    PopUpShow();
  }

  if (element.id === "close__popup") {
    PopUpHide();
  }

  if (element.id === "order") {
    PopUpHide();
    sayTnxShow();
  }

  if (element.id === "close__order") {
    sayTnxHide();
  }
};

function PopUpShow() {
  $("#popup1").show();
}
function PopUpHide() {
  $("#popup1").hide();
}

function sayTnxShow() {
  $("#popup2").show();
}

function sayTnxHide() {
  $("#popup2").hide();
}

