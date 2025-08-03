(() => {
  // player turn
  const turnMessageField = document.querySelector(".turn-message");
  const container = document.querySelector(".boxes-container");
  const checkMove = checkEmptyBoxes();
  container.addEventListener("click", (e) => checkMove(e, turnMessageField));
  function checkEmptyBoxes() {
    const boxes = document.querySelectorAll(".box");
    let count = 0;
    let avatar = "";
    let inverseAvatar = "";

    function checkMove(e, turnMessageField) {
      boxes.forEach((box) => {
        if (!box.textContent) {
          count++;
        }
      });
      if (count % 2 !== 0) {
        avatar = "X";
        inverseAvatar = "O";
      } else {
        avatar = "O";
        inverseAvatar = "X";
      }
      turnMessageField.textContent = `Your turn ${inverseAvatar}`;

      if (e.target.classList.contains("box") && !e.target.textContent) {
        e.target.textContent = avatar;
      }

      checkResult();

      count = 0;
    }
    return checkMove;
  }

  // scoreboard
  const playerX = document.querySelector("#player-x-score");
  const playerO = document.querySelector("#player-o-score");
  const draw = document.querySelector("#draw-score");
  const scoreBoard = generateScoreBoard();
  function generateScoreBoard() {
    const Score = JSON.parse(localStorage.getItem("scores")) || {
      playerXScore: 0,
      playerOScore: 0,
      drawScore: 0,
    };
    function playerXWins() {
      Score.playerXScore++;
      playerX.textContent = Score.playerXScore;
    }
    function playerOWins() {
      Score.playerOScore++;
      playerO.textContent = Score.playerOScore;
    }
    function drawMatch() {
      Score.drawScore++;
      draw.textContent = Score.drawScore;
    }

    localStorage.setItem("scores", JSON.stringify(Score));

    return { playerXWins, playerOWins, drawMatch };
  }

  function checkResult() {
    const box1 = document.querySelector("#one");
    const box2 = document.querySelector("#two");
    const box3 = document.querySelector("#three");
    const box4 = document.querySelector("#four");
    const box5 = document.querySelector("#five");
    const box6 = document.querySelector("#six");
    const box7 = document.querySelector("#seven");
    const box8 = document.querySelector("#eight");
    const box9 = document.querySelector("#nine");
    let avatar = "";
    if (
      box1.textContent &&
      box1.textContent === box2.textContent &&
      box1.textContent === box3.textContent
    ) {
      avatar = box1.textContent;
      return announceResults(avatar, "win");
    } else if (
      box4.textContent &&
      box4.textContent === box5.textContent &&
      box4.textContent === box6.textContent
    ) {
      avatar = box4.textContent;
      return announceResults(avatar, "win");
    } else if (
      box7.textContent &&
      box7.textContent === box8.textContent &&
      box7.textContent === box9.textContent
    ) {
      avatar = box7.textContent;
      return announceResults(avatar, "win");
    } else if (
      box1.textContent &&
      box1.textContent === box4.textContent &&
      box1.textContent === box7.textContent
    ) {
      avatar = box1.textContent;
      return announceResults(avatar, "win");
    } else if (
      box2.textContent &&
      box2.textContent === box5.textContent &&
      box2.textContent === box8.textContent
    ) {
      avatar = box2.textContent;
      return announceResults(avatar, "win");
    } else if (
      box3.textContent &&
      box3.textContent === box6.textContent &&
      box3.textContent === box9.textContent
    ) {
      avatar = box3.textContent;
      return announceResults(avatar, "win");
    } else if (
      box1.textContent &&
      box1.textContent === box5.textContent &&
      box1.textContent === box9.textContent
    ) {
      avatar = box1.textContent;
      return announceResults(avatar, "win");
    } else if (
      box3.textContent &&
      box3.textContent === box5.textContent &&
      box3.textContent === box7.textContent
    ) {
      avatar = box3.textContent;
      return announceResults(avatar, "win");
    }
    checkDraw();
  }

  function announceResults(avatar, state) {
    const messageField = document.querySelector("#results>p");
    const resultsBoard = document.querySelector("#results-board");
    const gameBoard = document.querySelector("#gameboard");
    gameBoard.classList.add("hide");
    resultsBoard.classList.add("active");
    switch (state) {
      case "win":
        if (avatar === "X") {
          scoreBoard.playerXWins();
        } else {
          scoreBoard.playerOWins();
        }
        messageField.textContent = `PLAYER ${avatar} WINS!`;
        break;
      case "draw":
        scoreBoard.drawMatch();
        messageField.textContent = `IT'S A DRAW!`;
        break;
      default:
        messageField.textContent = "";
    }
  }

  // announce draw
  function checkDraw() {
    const boxes = document.querySelectorAll(".box");
    let count = 1;
    const avatar = "";
    boxes.forEach((box) => {
      if (!box.textContent) {
        count++;
      }
    });
    if (count === 1) {
      return announceResults(avatar, "draw");
    }
  }

  // restart game
  const restartBtn = document.querySelector("#restart-btn");
  restartBtn.addEventListener("click", restart);

  function restart() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => (box.textContent = ""));
    const resultsBoard = document.querySelector("#results-board");
    const gameBoard = document.querySelector("#gameboard");
    gameBoard.classList.remove("hide");
    resultsBoard.classList.remove("active");
    turnMessageField.textContent = `X goes first`;
  }

  // save the score object to localStorage.
})();
