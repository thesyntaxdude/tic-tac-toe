(() => {
  (() => {
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
        count = 0;
      }
      return checkMove;
    }
  })();

  (() => {
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
  })();
})();
