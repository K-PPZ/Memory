let cards = document.getElementsByClassName("cards");
let points = document.getElementById("points");

let num = 0;
points.innerText = num + " / 3";

let colors = ["red", "green", "yellow"];
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
console.log(cards_random);


function register (cards, cards2) {
    if (cards == cards2) {
        num ++;
        points.innerText = num + " / " + 3;
    } else {
        cards.style.backgroundColor = "blue";
        cards2.style.backgroundColor = "blue";
    }
    // console.log("CARDS " + cards + " " + cards2);
}

let cards1;
let cards2;

for (let j = 0; j < cards.length; j++) {
    cards[j].classList.add(cards_random[j]);
}

// let register;
let value = true;


function first_card (value) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
            // console.log(cards[i].classList[1]);
            cards[i].style.backgroundColor = cards[i].classList[1];
    
            cards1 = cards[i].classList[1];
            // register(cards1, cards2);
            console.log("false");
            value = false;
            validation(value);

        });
    }
    // if (value == true) {
    //     second_card(value);
    // }
}
// first_card();

function second_card (value) {
    for (let h = 0; h < cards.length; h++) {
        cards[h].addEventListener("click", () => {
            // console.log(cards[h].classList[1]);
            cards[h].style.backgroundColor = cards[h].classList[1];


            cards2 = cards[h].classList[1];
            register(cards1, cards2);

            console.log("true");

            value = true;
            validation(value);

        });
    }
}

function validation (value) {
    if (value) {
        first_card(value);
    }
    if (value == false) {
        second_card(value);
    }
}
validation(value);