// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// ---------------- Envelope Click ----------------

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
      document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// ---------------- NO Button Logic ----------------

function moveNoButton() {
  // Get button position relative to viewport
  const rect = noBtn.getBoundingClientRect();

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Smaller movement on mobile
  const maxMove = screenWidth < 600 ? 70 : 200;

  let moveX = (Math.random() - 0.5) * maxMove * 2;
  let moveY = (Math.random() - 0.5) * maxMove * 2;

  // Prevent moving outside screen
  const futureLeft = rect.left + moveX;
  const futureRight = rect.right + moveX;
  const futureTop = rect.top + moveY;
  const futureBottom = rect.bottom + moveY;

  if (futureLeft < 0 || futureRight > screenWidth) {
    moveX = -moveX;
  }

  if (futureTop < 0 || futureBottom > screenHeight) {
    moveY = -moveY;
  }

  noBtn.style.transition = "transform 0.25s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

// Desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

// ---------------- YES Button ----------------

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";
    finalText.style.display = "block";
});
