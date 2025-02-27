const themes = ["assets/css/theme1.css", "assets/css/theme2.css", "assets/css/theme3.css"];
        
        function switchTheme() {
            let selectedIndex = document.getElementById("themeSelect").value;
            document.getElementById("themeStylesheet").href = themes[selectedIndex];
        }

        function displayWelcomeMessage() {
            let username = document.getElementById("username").value;
            if (username) {
                document.getElementById("welcomeMessage").innerText = "Welcome, " + username + "!";
            } else {
                document.getElementById("welcomeMessage").innerText = "Please enter your username.";
            }
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
