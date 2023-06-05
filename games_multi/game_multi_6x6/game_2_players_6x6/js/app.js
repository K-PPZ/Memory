import Grids_6x6 from '../../../../grids/grids_6x6/js/app';
new Grids_6x6;

let cards = document.getElementsByClassName("cards");
let moves = document.getElementById("num_moves");

let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

let minutes = 0;
let secondes = 0;

mins.innerText = minutes;
secs.innerText = secondes;

setInterval(() => {
    secondes ++;
    secs.innerText = secondes;

    if (secondes == 60) {
        minutes ++;
        secondes = 0;

        mins.innerText = minutes;
        secs.innerText = secondes;
    }
}, 1000);

let restart = document.getElementById("restart");

restart.addEventListener("click", () => {
    window.location.reload();
});



let num = 0;

let cards1;
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
        cards[i].innerText = cards[i].classList[1];
        cards[i].style.backgroundColor = "#BCCED9";
        num ++;
        moves.innerText = num;

        if (cards1) {
            if (cards1.classList[1] == cards[i].classList[1]) {
                cards[i].disabled = true;
                cards1.disabled = true;
                cards[i].style.backgroundColor = "#FDA214";
                cards1.style.backgroundColor = "#FDA214";
                cards1 = null;
                num ++;
            } else {
                setTimeout(() => {
                    cards[i].innerText = "";
                    cards1.innerText = "";
                    cards[i].style.backgroundColor = "#304859";
                    cards1.style.backgroundColor = "#304859";
                    cards1 = null;
                }, 1000);
            }
        } else {
            cards1 = cards[i];
        }
    });
}