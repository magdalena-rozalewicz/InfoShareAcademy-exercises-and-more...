const section1 = document.querySelector(".main_section1")

const clockDisplay = document.createElement("h2");
clockDisplay.setAttribute = ("class", "clock")
clockDisplay.style.color = "rgb(57, 96, 172)";
clockDisplay.style.padding = "12px";
clockDisplay.style.backgroundColor = "rgba(57, 96, 172, 0.3)";

section1.append(clockDisplay);




(function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    clockDisplay.innerText = `Więc NIE zwlekaj..... czas ucieka ! ${h} : ${m} : ${s}`;
    setTimeout(startTime, 1000);
})()

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

