// message to type
const text = "I know you said yess my baby🥺❤️ I just wanted to let you know that I love you soo much Rati!! Kego rata ka pelo yaka eyohle mbaaah❤️💋";

let index = 0;
const speed = 50;

// when YES clicked → show message
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
    }
}

// when NO clicked → show text under button
function showNo() {
    document.getElementById("noResult").innerText = "No 💔";
}

