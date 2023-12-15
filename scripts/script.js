
const parent = document.getElementById('bingo-card');
const bingoCard = document.createDocumentFragment();
const bingoCoin = new Image(220, 220);
bingoCoin.src = "images/kr.png";
const bingoCoinBack = new Image (220, 220);
bingoCoinBack.src = "images/kr1.png";

fetch('./lyx.json')
.then((response) => {
  return response.json();
})
.then((data) => {
  
  let bingoText = data.bingotext;
  i = 0;
  
   bingoText.forEach(function(bingogay) {
    let bingoCell = document.createElement('div');
    //let image = document.createElement('img')
    //let prompt = document.createElement('p');
    
    bingoCell.classList.add("bingo-cell");
    //bingoCell.style.backgroundImage = bingoCoin;
    //image.classList.add("coinImg");

    bingoPrompt = `${bingoText.prompt[i]}`;


    //bingoCell.appendChild(image);
    bingoCell.appendChild(bingoPrompt);
    bingoCard.appendChild(bingoCell);
    i++;
  });
  parent.appendChild(bingoCard);
  console.log(data);
});




/*let prompts;

fetch('./lyx.json')
    .then(response => response.json())
    .then(data => {
    prompts = data;

    const randomIndex = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomIndex];

    document.addEventListener("DOMContentLoaded", function() {
        bingoPrompts().then(prompt => {
            var elements = document.querySelectorAll('.bingo-text');
            for(var i = 0; i < elements.length; i++){
                var str = elements[i].innerHTML;
                console.log(elements);
                elements[i].innerHTML = str.replace("",randomPrompt);
            }
        });
    });
})*/

