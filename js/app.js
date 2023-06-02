let inputs_theme = document.getElementsByClassName("inputs_theme");
let inputs_numbers = document.getElementsByClassName("inputs_numbers");
let inputs_grid = document.getElementsByClassName("inputs_grid");

for (let i = 0; i < inputs_theme.length; i++) {
    inputs_theme[i].addEventListener("click", () => {
        for (let y = 0; y < inputs_theme.length; y++) {
            inputs_theme[y].classList.remove("input_active");
        }
        inputs_theme[i].classList.add("input_active");
    });
}

for (let i = 0; i < inputs_numbers.length; i++) {
    inputs_numbers[i].addEventListener("click", () => {
        for (let y = 0; y < inputs_numbers.length; y++) {
            inputs_numbers[y].classList.remove("input_active");
        }
        inputs_numbers[i].classList.add("input_active");
    });
}

for (let i = 0; i < inputs_grid.length; i++) {
    inputs_grid[i].addEventListener("click", () => {
        for (let y = 0; y < inputs_grid.length; y++) {
            inputs_grid[y].classList.remove("input_active");
        }
        inputs_grid[i].classList.add("input_active");
    });
}


let numbers_player;
let numbers_grids;
// link_game(numbers_player, numbers_grids);

let btn_1_player = document.getElementById("btn_1_player");
btn_1_player.addEventListener("click", () => {
    numbers_player = "btn_1_player";
    link_game(numbers_player, numbers_grids);
});

let btn_2_players = document.getElementById("btn_2_players");
btn_2_players.addEventListener("click", () => {
    numbers_player = "game_2_players";
    link_game(numbers_player, numbers_grids);
});

let btn_3_players = document.getElementById("btn_3_players");
btn_3_players.addEventListener("click", () => {
    numbers_player = "game_3_players";
    link_game(numbers_player, numbers_grids);
});

let btn_4_players = document.getElementById("btn_4_players");
btn_4_players.addEventListener("click", () => {
    numbers_player = "game_4_players";
    link_game(numbers_player, numbers_grids);
});


let btn_4x4 = document.getElementById("btn_4x4");
btn_4x4.addEventListener("click", () => {
    numbers_grids = "4x4";
    link_game(numbers_player, numbers_grids);
});

let btn_6x6 = document.getElementById("btn_6x6");
btn_6x6.addEventListener("click", () => {
    numbers_grids = "6x6";
    link_game(numbers_player, numbers_grids);
});

let btn_start = document.getElementById("btn_start");

if (numbers_player == null && numbers_grids == null) {
    link_game("btn_1_player", "4x4");
} else if (numbers_player == null && numbers_grids != null) {
    link_game("btn_1_player", "6x6");
}
// console.log(numbers_grids);
// console.log(numbers_player);


function link_game (num_player, num_grids) {
    if (num_player == "btn_1_player") {
        btn_start.href = `games_solo/game_solo_${num_grids}/game_solo_${num_grids}.html`;
    } else {
        btn_start.href = `games_multi/game_multi_${num_grids}/${num_player}_${num_grids}/game_multi_${num_grids}.html`;
    }
}