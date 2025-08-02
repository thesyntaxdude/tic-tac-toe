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
