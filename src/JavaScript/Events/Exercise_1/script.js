const btn = document.getElementById("btn");

btn.addEventListener("dblclick", () => alert("Doble clic"));
btn.addEventListener("click", () => {
    setTimeout(() => alert("Click"), 150);
})

/*
let clickTimes = 0;
btn.addEventListener("click", () => {
    clickTimes++
    setTimeout(() => {
        if (clickTimes >= 2) {
            alert("Doble clic");
        } else if (clickTimes == 1) {
            alert("Click")
        }
        clickTimes =0
    }, 150)
})
*/

document.getElementById("element").addEventListener("mousemove", (event) => {
    console.log(event.pageX, event.pageY)
});

document.body.addEventListener("keydown", (event) => {
    if (event.key == 'Enter') {
        alert("Enter")
    }
})