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

  // scoreboard variables
  const playerX = document.querySelector("#player-x-score");
  const playerO = document.querySelector("#player-o-score");
  const draw = document.querySelector("#draw-score");
  const scoreBoard = generateScoreBoard();
  function generateScoreBoard() {
    const Score = {
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
      return announceResults(avatar);
    } else if (
      box4.textContent &&
      box4.textContent === box5.textContent &&
      box4.textContent === box6.textContent
    ) {
      avatar = box4.textContent;
      return announceResults(avatar);
    } else if (
      box7.textContent &&
      box7.textContent === box8.textContent &&
      box7.textContent === box9.textContent
    ) {
      avatar = box7.textContent;
      return announceResults(avatar);
    } else if (
      box1.textContent &&
      box1.textContent === box4.textContent &&
      box1.textContent === box7.textContent
    ) {
      avatar = box1.textContent;
      return announceResults(avatar);
    } else if (
      box2.textContent &&
      box2.textContent === box5.textContent &&
      box2.textContent === box8.textContent
    ) {
      avatar = box2.textContent;
      return announceResults(avatar);
    } else if (
      box3.textContent &&
      box3.textContent === box6.textContent &&
      box3.textContent === box9.textContent
    ) {
      avatar = box3.textContent;
    } else if (
      box1.textContent &&
      box1.textContent === box5.textContent &&
      box1.textContent === box9.textContent
    ) {
      avatar = box1.textContent;
      return announceResults(avatar);
    } else if (
      box3.textContent &&
      box3.textContent === box5.textContent &&
      box3.textContent === box7.textContent
    ) {
      avatar = box3.textContent;
      return announceResults(avatar);
    }
  }

  function announceResults(avatar) {
    console.log(`PLAYER ${avatar} WINS!`);
    // show a modal dialog box here so user can't interact with game after declaring winner
    // allow user to restart game by resetting the boxes.
  }

  // add a function to update the scoreboard.
  // save the score object to localStorage.
})();
