
function hart(id) {
  let element = document.getElementById(id);
  let elementvalue = element.innerText;
  let elementIntegerConvart = parseInt(elementvalue);
  return elementIntegerConvart;
}
// hard-Ubdet-fire
document.getElementById("like-noews").addEventListener("click", function (e) {
  e.preventDefault();
  let likeNumbers = hart("hard-count");
  likeNumbers++;
  document.getElementById("hard-count").innerText = likeNumbers;
});

// hard-Ubdet-National
document.getElementById("hard-2").addEventListener("click", function (e) {
  e.preventDefault();
  let likeNumbers = hart("hard-count");
  likeNumbers++;
  document.getElementById("hard-count").innerText = likeNumbers;
});

// hard-Ubdet-Polic
document.getElementById("hard-3").addEventListener("click", function (e) {
  e.preventDefault();
  let likeNumbers = hart("hard-count");
  likeNumbers++;
  document.getElementById("hard-count").innerText = likeNumbers;
});
// hard-Ubdet-railway
document.getElementById("hard-4").addEventListener("click", function (e) {
  e.preventDefault();
  let likeNumbers = hart("hard-count");
  likeNumbers++;
  document.getElementById("hard-count").innerText = likeNumbers;
});

// hard-Ubdet-Brak
document.getElementById("hard-5").addEventListener("click", function (e) {
  e.preventDefault();
  let likeNumbers = hart("hard-count");
  likeNumbers++;
  document.getElementById("hard-count").innerText = likeNumbers;
});

// hard-Ubdet-Ambulance
document.getElementById("hard-6").addEventListener("click", function (e) {
  e.preventDefault();
  let likeNumbers = hart("hard-count");
  likeNumbers++;
  document.getElementById("hard-count").innerText = likeNumbers;
});

let coins = 100 ;
let coneDisplay = document.getElementById('point-ofClick');
coneDisplay.innerText = coins;

//add all find element
document.getElementById('card-cointener').addEventListener('click', function (e) {
   e.preventDefault();
 if (e.target.className.includes("all-btn")) {
     let cardes = e.target;
      let findName = cardes.parentNode.parentNode.children[1].innerText;

      let findNumbers = parseInt(
        cardes.parentNode.parentNode.children[3].innerText
      );

    if(coins >= 20){
      coins = coins - 20;
      coneDisplay.innerText = coins;
      alert(` 📞 Calling ${findName} Service ${findNumbers}...` )
    }else{
      alert('❌আপনার বর্তমান কয়েন নেই কমপক্ষে কল করতে ২০ টি কয়েন লাগবে')
    }
  }

});


// Add Deleagitions With Cointener
document
  .getElementById("card-cointener")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("all-btn")) {
      
      let cardes = e.target;
      let findName = cardes.parentNode.parentNode.children[1].innerText;

      let findNumbers = parseInt(
        cardes.parentNode.parentNode.children[3].innerText
      );

      // date time
      const data = {
        date:new Date().toLocaleTimeString()
      };
      // Creat Cointenar
      let creatDivHiostrySections = document.getElementById("newaddesDiv");

      let addesNewDives = document.createElement("newaddesDiv");

      addesNewDives.innerHTML = ` 
            <div class=" flex justify-between items-center border-1 p-2 px-4 rounded-lg border-gray-200 bg-[#e8e6e6] mt-2 ">
                        <div>
                            <h3 class="text-[16px] font-bold">${findName}</h3>
                            <p class="mt-2 text-[16px] font-bold">${findNumbers}</p>
                        </div>

                        <div>
                             <h2 class="">${data.date}</h2>
                        </div>
                    </div>
        `;
      creatDivHiostrySections.appendChild(addesNewDives);
     
    }
    // Clear Btn Click And Removed All History
     document.getElementById('clears').addEventListener('click', function (e) {
        e.preventDefault();
         document.getElementById("newaddesDiv").innerText = "";
        console.log('Find Clear Btn');
       })
  });

   

