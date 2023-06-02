export default class Grids_4x4 {
    constructor() {
        let main = document.getElementById("main");

        for (let i = 0; i < 4; i++) {
            let line = document.createElement("div");
            line.classList.add("line");
    
            for (let y = 0; y < 4; y++) {
                let card = document.createElement("button");
                card.classList.add("cards");
                line.appendChild(card);
            }
    
            main.appendChild(line);
        }
    }
}