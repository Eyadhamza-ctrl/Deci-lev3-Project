let themes = ["theme1.css", "theme2.css", "theme3.css"];
let currentTheme = 0;

function switchTheme() {
    currentTheme = (currentTheme + 1) % themes.length;
    document.getElementById("themeStylesheet").href = themes[currentTheme];
}

function press(value) {
    document.getElementById("calc-display").value += value;
}

function clearDisplay() {
    document.getElementById("calc-display").value = "";
}

function calculate() {
    try {
        document.getElementById("calc-display").value = eval(document.getElementById("calc-display").value);
    } catch {
        document.getElementById("calc-display").value = "Error";
    }
}
