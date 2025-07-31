let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let result = document.getElementById("result");

yesBtn.addEventListener("click", function() {
    result.innerHTML = "Yay! ❤️ I LOVE YOU MERI JAAN 😘!";
});

// Function to move No button
function moveNoButton() {
    let x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    let y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// PC hover ke liye
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile touch ke liye
noBtn.addEventListener("touchstart", function(e) {
    e.preventDefault(); // accidental click se bachaane ke liye
    moveNoButton();
});
