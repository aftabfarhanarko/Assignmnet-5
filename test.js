
document
  .getElementById("producat-box-sections")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("btn-all")) {
      //    alert('click This ');

      // Card Find Img
      let cardsBtn = e.target;
      let producatImg = cardsBtn.parentNode.children[0].children[0].src;

      // Card Find Producat Name
      let cardName = e.target;
      let producatName = cardName.parentNode.children[1].children[1].innerText;

      // Card Find Producat Price

      let cardPrice = e.target;
      let producatPrice =cardPrice.parentNode.children[1]
      .children[2].children[0].innerText;

      // Total Price
      let total = document.getElementById("totalprices").innerText;

      let producatPriceTotal = Number(producatPrice) + Number(total);

    //   Find cardes
       let cardesCointernar = document.getElementById('addes');
      // Add Cardes
      let newCard = document.createElement("addes");

      newCard.innerHTML = `
         <div class="border-1 border-gray-300 flex items-center justify-between py-2 px-2 rounded-lg bg-[#eeebeb] mb-2">
            <img src="${producatImg}" alt="">
                <div>
                  <h2 class="font-bold text-[18px]">${producatName}</h2>
                  <p class="font-bold text-[18px] text-red-600">${producatPrice}tk</p>
                </div>                         
         </div>
      
      `;
   
      cardesCointernar.appendChild(newCard);}
    })

    // Tesxt
    // Heart click Event
let countNeagitive = 20;
// Fire Service Number Functions
// document.getElementById("fireCard").addEventListener("click", function (e) {
//   if (e.target.className.includes("fireService-btn")) {
//     alert("Calling Fire Service 102...");

//     let numberPoint = parseInt(
//       cardes.parentNode.parentNode.children[3].innerText
//     );
//     console.log(findName, numberPoint);
//   }
// });

//  let points = document.getElementById('point').innerText;
//      let ubdate = points - countNeagitive;
//     // points.value = ubdate;
//     points.innerText = ubdate;
//     console.log(ubdate);

// // National Emergency Service Number Functions
// document.getElementById("national-btn").addEventListener("click", function () {
//   alert("Calling National Emergency Service 999...");

//   let points = parseInt(document.getElementById("point").innerText);
//   let ubdate = points - 20;
//   points.innerText = console.log(points);
// });
// // Polic Service Number Functions
// document.getElementById("polic-btn").addEventListener("click", function () {
//   alert("Calling Polic Service 102...");

  // let points = parseInt(document.getElementById('point').innerText);
  //  let ubdate = points - 20;
  // points.innerText =
  // console.log(points);
// });
// // Bangladesh Railway Service Number Functions
// document.getElementById("railway-btn").addEventListener("click", function () {
//   alert("Calling Bangladesh Railway Service 131...");

  // let points = parseInt(document.getElementById('point').innerText);
  //  let ubdate = points - 20;
  // points.innerText =
  // console.log(points);
// });
// BRAC Bank Service Number Functions
// document.getElementById("brakBank-btn").addEventListener("click", function () {
//   alert("Calling BRAC Bank Service 16221...");

  // let points = parseInt(document.getElementById('point').innerText);
  //  let ubdate = points - 20;
  // points.innerText =
  // console.log(points);
// });
// // Ambulance Service Number Functions
// document.getElementById("ambulince-btn").addEventListener("click", function () {
//   alert("Calling Ambulance Service 123456...");

  // let points = parseInt(document.getElementById('point').innerText);
  //  let ubdate = points - 20;
  // points.innerText =
  // console.log(points);
// });
