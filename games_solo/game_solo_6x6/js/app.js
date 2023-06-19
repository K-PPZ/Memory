import Grids_6x6 from '../../../grids/grids_6x6/js/app';
import { time } from '../../../game/time';
new Grids_6x6

let cards = document.getElementsByClassName("cards");
let moves = document.getElementById("num_moves");
let moves_win = document.getElementById("num_moves_win");

let restart = document.getElementById("restart");
let restart_win = document.getElementById("restart_win");
restart.addEventListener("click", () => {
    window.location.reload();
});
restart_win.addEventListener("click", () => {
    window.location.reload();
});

let paires = 0;
let num = 0;

let section_win = document.getElementById("section_win");
let cards1;
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {

        if (num < 1) {
            time();
        }

        cards[i].innerText = cards[i].classList[1];
        cards[i].style.backgroundColor = "#BCCED9";
        num ++;
        moves.innerText = num;
        moves_win.innerText = num + " Moves";

        if (cards1) {

            if (cards1.classList[1] == cards[i].classList[1]) {
                cards[i].disabled = true;
                cards1.disabled = true;
                cards[i].style.backgroundColor = "#FDA214";
                cards1.style.backgroundColor = "#FDA214";
                cards1 = null;
                paires ++;

                if (paires == cards.length/2) {
                    section_win.classList.remove("win_hidden");
                    time(true);
                }
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