let cards = document.getElementsByClassName("cards");
let points = document.getElementById("points");

let num = 0;
points.innerText = num + " / " + cards.length/2;

let colors = ["red", "green", "yellow", "blue", "purple", "pink"];
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
        cards[i].style.backgroundColor = cards[i].classList[1];

        if (cards1) {
            if (cards1.classList[1] == cards[i].classList[1]) {
                cards[i].disabled = true;
                cards1.disabled = true;
                cards1 = null;
                num ++;
                points.innerText = num + " / " + cards.length/2;
            } else {
                setTimeout(() => {
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