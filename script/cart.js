const cartList = document.getElementById("cart_products");
const localData = JSON.parse(localStorage.getItem("cart"));

if (localData.length) {
  for (var i = 0; i < localData.length; i++) {
    const elem = document.createElement("div");

    console.log(localData[i]);
    elem.innerHTML = `
      <div class="test">
        <div class="test-list">
          <img src='${localData[i].imgPath}' alt=""/>
          <p>${localData[i].name}</p>
          <p class="test__tltle">${localData[i].cost}руб</p>
          <button class="btn__buy2">Заказать</button>
        </div>  
        
      </div>
    `;

    cartList.appendChild(elem);
  }
}
