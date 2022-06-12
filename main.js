function removeBox(){
    let box = document.getElementById("clarify-box");
    if (box) box.remove();
}

function removeCards(){
    for (let i = 0; i < 5; ++i){
        let card = document.querySelector(".ytp-ce-element");
        card.remove();
    }
}

let boxTries = 0, cardTries = 0;
var boxInterval = setInterval(() => {
    removeBox();
    if (++boxTries >= 3) {
        window.clearInterval(boxInterval);
    }
}, 1000);

var cardInterval = setInterval(() => {
    removeCards();
    if (++cardTries >= 3) {
        window.clearInterval(cardInterval);
    }
}, 1000);
