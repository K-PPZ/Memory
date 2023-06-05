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
let good = 0;



let restart = document.getElementById("restart");

restart.addEventListener("click", () => {
    window.location.reload();
});



let num = 0;


let cards1;
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
        
        if (num < 1) {
            time();
        }

        function time (t) {
            let timer = setInterval(() => {
                    secondes ++;
                    secs.innerText = secondes;
                
                    if (secondes == 60) {
                        minutes ++;
                        secondes = 0;
                
                        mins.innerText = minutes;
                        secs.innerText = secondes;
                    }
            }, 1000);
            if (t) {
                clearInterval(timer);
            }
        }

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
                good ++;
                console.log(good);
                if (good == cards.length/2) {
                    time(true);
                    console.log("good " + good);
                }
                console.log(good);
                console.log(cards.length/2);
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

console.log(cards.length/2);