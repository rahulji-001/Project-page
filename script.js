const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const proposalText = document.getElementById("proposalText");
const result = document.getElementById("result");

let bgImages = ["images.jpg", "pup.jpg"];
let messages = [
    "Will you marry me Sakshi ji? 💍",
    "Ek baar soch le 😏",
    "Baav mat khao 😜",
    "Maan bhi jao 🥺",
    "Mere se achha nhi milega 😉"
];

let clickCount = 0;

// No button click ka function
noBtn.addEventListener("click", () => {
    // Background & text change
    clickCount++;
    document.body.style.backgroundImage = `url('${bgImages[clickCount % bgImages.length]}')`;
    proposalText.innerText = messages[clickCount % messages.length];

    // Button ko random position me ghumana
    let x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    let y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Yes button click ka function
yesBtn.addEventListener("click", () => {
    result.innerText = "Yay! ❤️ Mujhe pata tha tum maan jaogi 😍";
});
