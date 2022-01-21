var kidsData = [
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/38/P00616311_b1.jpg",
    name: "MONCLER GRENOBLE ENFANT",
    category: "Alixan jacket",
    price: 945,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/18/P00516218_d2.jpg",
    name: "CANADA GOOSE KIDS",
    category: "Wool pom-pom beanie",
    price: 945,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d2/P00637418_b1.jpg",
    name: "VERSACE KIDS",
    category: "POLO T-shirt",
    price: 945,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e3/P00643276_b1.jpg",
    name: "GUCCI KIDS",
    category: "Printed cotton T-shirt",
    price: 945,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/34/P00617666_b1.jpg",
    name: "DOLCE & GABBANA KIDS",
    category: "Embroidered cotton shirt",
    price: 945,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/26/P00652238_b1.jpg",
    name: " GUCCI KIDS ",
    category: "Printed swim trunks",
    price: 945,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e1/P00617690_b1.jpg",
    name: " KENZO KIDS ",
    category: "Printed cotton jersey T-shirt",
    price: 945,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/c1/P00617840_b1.jpg",
    name: "POLO TEES & JEANS  ",
    category: "Jacket",
    price: 945,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/92/P00652231_b1.jpg",
    name: "MARC JACOBS KIDS ",
    category: "Cotton polo shirt",
    price: 945,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/aa/P00650082.jpg",
    name: "KENZO KIDS",
    category: "Tie-dye cotton T-shirt",
    price: 945,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/39/P00650880_b1.jpg",
    name: "BALMAIN KIDS",
    category: "cotton T-shirtt",
    price: 945,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/19/P00646264_b1.jpg ",
    name: "IL GUFO",
    category: "Logo cotton T-shirt",
    price: 945,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/6c/P00644523.jpg",
    name: "Kids Armani Summer Wear ",
    category: "ARMANI T_shirt",
    price: 95,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f5/P00653059_b1.jpg",
    name: "MARC JACOBS KIDS",
    category: "SWEATSHIRT",
    price: 595,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d1/P00652991_d2.jpg",
    name: "POLO RALPH LAUREN KIDS ",
    category: "Jacket",
    price: 75,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/aa/P00650082.jpg ",
    name: " MEN'S REEBOK TRAINING BAS POLO TEE ",
    category: "lofer shoes",
    price: 245,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d4/P00644506_b1.jpg",
    name: "Triple S sneakers",
    category: "yellow track",
    price: 22,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/32/P00617771_b1.jpg ",
    name: "POLO RALPH LAUREN KIDS ",
    category: "Jacket",
    price: 465,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/77/P00650076_d2.jpg",
    name: "Striped cotton piqu ",
    category: "POLO RALPH LAUREN KIDS",
    price: 945,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/69/P00634684_b1.jpg",
    name: " ZTAUR RUN SHOES ",
    category: "BALENCIAGA KIDS",
    price: 151,
  },
  {
    image_url:
      " https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f5/P00652224_b1.jpg",
    name: "STELLA MCCARTNEY KIDS",
    category: "Cotton sweatshirt and shorts set",
    price: 4211,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3c/P00637406_b1.jpg",
    name: " cotton jersey track jacket ",
    category: "Track",
    price: 1350,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a5/P00650693_b1.jpg",
    name: "MM6 MAISON MARGIELA KIDS",
    category: "Logo cotton sweater",
    price: 1350,
  },
  {
    image_url:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/70/P00650700_b1.jpg",
    name: "MM6 MAISON MARGIELA KIDS",
    category: "Logo cotton hoodie",
    price: 1350,
  },
];

// var kidsData = JSON.parse(localStorage.getItem("kidsData"));
var cartArray_kids = JSON.parse(localStorage.getItem("cartItem")) || [];
kidsData.map(function (data) {
  // console.log(data);
  var div = document.createElement("div");
  // img
  var img = document.createElement("img");
  img.setAttribute("src", data.image_url);
  // name
  var name = document.createElement("p");
  name.textContent = data.name;
  //
  var div1 = document.createElement("div");
  div1.setAttribute("class", "flexDiv");
  //category
  var category = document.createElement("p");
  category.textContent = data.category;
  // price
  var price = document.createElement("p");
  price.textContent = `$${data.price}`;
  //
  div1.append(category, price);
  // button
  var btn = document.createElement("button");
  btn.textContent = "Add to Cart";
  // add to cart things
  btn.addEventListener("click", function () {
    addToCart(data);
  });

  div.append(img, name, div1, btn);
  document.querySelector("#container1").append(div);
});
function addToCart(data) {
  console.log(data);
  // window.location.href = "cart_kids.html";
  cartArray_kids.push(data);
  // console.log(cartArray_kids);
  localStorage.setItem("cartItem", JSON.stringify(cartArray_kids));
}
