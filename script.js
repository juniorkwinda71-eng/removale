// CLEAR OLD SAVED ANSWER
localStorage.removeItem("ratiAnswer");

// message to type
const text = "I know you said yess my baby🥺❤️ I just wanted to let you know that I love you soo much Rati!! Kego rata ka pelo yaka eyohle mbaaah❤️💋";

let index = 0;
const speed = 50;

// when cover YES clicked
function startMessage() {
    document.getElementById("coverCard").classList.add("hidden");
    document.getElementById("mainCard").classList.remove("hidden");
    typeMessage();
}

// typing effect
function typeMessage() {
    if (index < text.length) {
        document.getElementById("message").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeMessage, speed);
    } else {
        document.getElementById("choices").classList.remove("hidden");
        showSavedAnswer();
    }
}

// save answer
function selectAnswer(answer) {
    localStorage.setItem("ratiAnswer", answer);
    showSavedAnswer();
}

// show saved answer
function showSavedAnswer() {
    const saved = localStorage.getItem("ratiAnswer");

    if (saved) {
        document.getElementById("result").innerText = "She selected: " + saved;
    }
}

