let timer;
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let mins_win = document.getElementById("mins_win");
let secs_win = document.getElementById("secs_win");
let minutes = 0;
let secondes = 0;
mins.innerText = "0" + minutes;
secs.innerText = "0" + secondes;
mins_win.innerText = "0" + minutes;
secs_win.innerText = "0" + secondes;

export function time (value) {
    if (value) {
        clearInterval(timer);
        return;
    }

   timer = setInterval(() => {
            secondes ++;
            secs.innerText = secondes;
            secs_win.innerText = secondes;
        
            if (secondes == 60) {
                minutes ++;
                secondes = 0;
        
                mins.innerText = minutes;
                secs.innerText = secondes;

                mins_win.innerText = minutes;
                secs_win.innerText = secondes;
            }

            if (secondes < 10) {
                secs.innerText = "0" + secondes;
                secs_win.innerText = "0" + secondes;
            }

            if (minutes < 10) {
                mins.innerText = "0" + minutes;
                mins_win.innerText = "0" + minutes;
            }
            
    }, 1000);
}