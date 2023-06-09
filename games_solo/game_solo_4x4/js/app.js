import { time } from '../../../game/time';
import Grids_4x4 from '../../../grids/grids_4x4/js/app';
new Grids_4x4;

let cards = document.getElementsByClassName("cards");
let moves = document.getElementById("num_moves");
let moves_win = document.getElementById("num_moves_win");

let name_player = document.getElementById("name");
let best_mins = document.getElementById("best_min");
let best_secs = document.getElementById("best_secs");
let best_moves = document.getElementById("best_num_moves_win");
let best_mins_num = 0;
let best_secs_num = 0;
let best_moves_num = 0;
// best_mins.innerText = best_mins_num;
// best_secs.innerText = best_secs_num;
// best_moves.innerText = best_moves_num;




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
                    localStorage.setItem("best_moves", moves.innerText);
                    let data_moves = localStorage.getItem("best_moves");

                    // localStorage.setItem("best_secs", secs.innerText);
                    // let data_secs = localStorage.getItem("best_secs");
                    // console.log(data_secs_1);

                    localStorage.setItem("best_mins", mins.innerText);
                    let data_mins = localStorage.getItem("best_mins");

                    if (best_secs_num == 0) {
                        localStorage.setItem("best_secs", secs.innerText);
                        let data_secs = localStorage.getItem("best_secs");
                    }
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