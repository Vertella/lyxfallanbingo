const parent = document.getElementById('bingo-card');
const bingoCard = document.createDocumentFragment();
const bingoCoin = new Image(220, 220);
bingoCoin.src = "images/kr.png";
const bingoCoinBack = new Image(220, 220);
bingoCoinBack.src = "images/kr1.png";


fetch('https://api.jsonbin.io/v3/b/657c22d71f5677401f0e2135')
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
        bingoCell.addEventListener('click', () => toggleCell(bingoCell));
        
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

// Toggle cell marking
function toggleCell(cell) {
  bingoCell.classList.toggle('marked');
  checkWin(); // Check for Bingo after each cell click
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
}