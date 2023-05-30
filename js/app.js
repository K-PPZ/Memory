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