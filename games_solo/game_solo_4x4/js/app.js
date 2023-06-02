import Grids_4x4 from '../../../grids/grids_4x4/js/app';
new Grids_4x4;

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

let colors = ["1", "2", "3", "4", "5", "6", "7", "8"];
let colors_2 = [];
let colors_3 = [];

function cards_colors (colors) {
    while (colors_2.length < colors.length) {

        let random_colors = Math.floor(Math.random() * (colors.length - 0)) + 0;

        if (colors_2.includes(colors[random_colors])) {
            random_colors = Math.floor(Math.random() * (colors.length - 0)) + 0;
        } else {
            colors_2.push(colors[random_colors]);
        }
    }


    while (colors_3.length < colors.length) {

        let random_colors = Math.floor(Math.random() * (colors.length - 0)) + 0;
        
        if (colors_3.includes(colors[random_colors])) {
            random_colors = Math.floor(Math.random() * (colors.length - 0)) + 0;
        } else {
            colors_3.push(colors[random_colors]);
        }
    }
}
cards_colors(colors);

let cards_random = [];
for (let y = 0; y < colors.length; y++) {
    cards_random.push(colors_2[y]);
    cards_random.push(colors_3[y]);
}

for (let j = 0; j < cards.length; j++) {
    cards[j].classList.add(cards_random[j]);
}

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