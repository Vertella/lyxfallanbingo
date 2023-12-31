const parent = document.getElementById('bingo-card');
const bingoCard = document.createDocumentFragment();
const bingoCoin = new Image(220, 220);
bingoCoin.src = "images/kr.png";
const bingoCoinBack = new Image(220, 220);
bingoCoinBack.src = "images/kr1.png";


fetch('https://api.jsonbin.io/v3/b/658c20fa266cfc3fde6efd08')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let bingoText = data.record.bingotext.prompts;
    bingoText = shuffleshufflebingo(bingoText);

    i=0;
    bingoText.slice(0, 25).forEach(function (bingogay) {
      let bingoPrompt = bingogay;

      let bingoCon = document.createElement('div');
      bingoCon.classList.add("bingo-cell");
      bingoCon.addEventListener('click', () => toggleCell(bingoCon));

      let bingoCell = document.createElement('p');
      bingoCell.classList.add("bingo-text");

      if (i == 12) {
        let textNode = document.createTextNode('Free Space');
        bingoCell.appendChild(textNode);
        bingoCard.appendChild(bingoCon);
        bingoCon.appendChild(bingoCell);
      } else {
        let textNode = document.createTextNode(bingoPrompt);
        bingoCell.appendChild(textNode);
      }

      bingoCard.appendChild(bingoCon);
      bingoCon.appendChild(bingoCell);   
      i++;
    });

    parent.appendChild(bingoCard);
  });

  function shuffleshufflebingo(shufflebingo) {
    for (let i = shufflebingo.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shufflebingo[i], shufflebingo[j]] = [shufflebingo[j], shufflebingo[i]];
    }
    return shufflebingo;
  }


// Define an array to keep track of marked cells
const markedCells = [];

// Toggle cell marking
function toggleCell(cell) {
  cell.classList.toggle('bingo-cell-marked');
}

  /* Get the index of the clicked cell
  const index = Array.from(bingoCell.parentNode.parentNode.children).indexOf(BingoCell.parentNode);
    
  // Check if the cell is already marked
  const isMarked = markedCells.includes(index);

  // Update the array of marked cells
  if (isMarked) {
    markedCells.splice(markedCells.indexOf(index), 1); // Unmark cell
  } else {
    markedCells.push(index); // Mark cell
  }
  checkWin();
}


// Function to check for a Bingo win
function checkWin() {
  const bingoCells = document.querySelectorAll('.bingo-text');

  
  // Define winning patterns (rows, columns, diagonals)
  const patterns = [
    // Rows
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    // Columns
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    // Diagonals
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ];

  // Check each winning pattern
  for (const pattern of patterns) {
    const isBingo = pattern.every(index => markedCells.includes(index));
    if (isBingo) {
      alert('Bingo! You won!');
      return;
    }
  }
  alert('No Bingo yet. Keep playing!');
}*/