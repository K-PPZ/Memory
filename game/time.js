let timer;
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let minutes = 0;
let secondes = 0;
mins.innerText = minutes;
secs.innerText = secondes;

export function time (value) {
    if (value) {
        clearInterval(timer);
        return;
    }

   timer = setInterval(() => {
            secondes ++;
            secs.innerText = secondes;
        
            if (secondes == 60) {
                minutes ++;
                secondes = 0;
        
                mins.innerText = minutes;
                secs.innerText = secondes;
            }
    }, 1000);
}