let total = 0;
let images = document.getElementsByTagName("img")[0];
let button = document.getElementById("Roll");
let totalId = document.getElementById("total");
let score = document.getElementById("score");

button.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

  total = total + randomNumber;

  console.log(total);

  images.setAttribute("src", `img/dice${randomNumber}.png`);

  totalId.textContent = total;

  
   
    if (total >= 20) {
        score.textContent = "You have won.";
        console.log("You have won.");
    }

   
});