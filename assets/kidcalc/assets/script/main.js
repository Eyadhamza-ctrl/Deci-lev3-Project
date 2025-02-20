const themes = ["assets/css/theme1.css", "assets/css/theme2.css", "assets/css/theme3.css"];
let currentThemeIndex = 0;

        function switchTheme() {
            currentThemeIndex = (currentThemeIndex + 1) % themes.length;
            document.getElementById("themeStylesheet").href = themes[currentThemeIndex];
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
