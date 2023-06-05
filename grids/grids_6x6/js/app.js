export default class Grids_6x6 {
    constructor() {
        let main = document.getElementById("main");

        for (let i = 0; i < 6; i++) {
            let line = document.createElement("div");
            line.classList.add("line");
    
            for (let y = 0; y < 6; y++) {
                let card = document.createElement("button");
                card.classList.add("cards");
                line.appendChild(card);
            }
    
            main.appendChild(line);
        }

        
        let cards = document.getElementsByClassName("cards");

        let colors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
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
    }
}