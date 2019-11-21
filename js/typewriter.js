var run = 1;
var txt = '';
var speed = 210;
var i = 0;

function startTerminal(r) {
    i = 0;
    run = r
    if (run == 1) {
        txt = "Welcome ..."
        typeWriter()
    } else if (run == 2) {
        txt = "Codeero"
        typeWriter()
    } else if (run == 5) {
        txt = "Case Study: Web"
        typeWriter()
    } else if (run == 7) {
        txt = "Case Study: Mobile"
        typeWriter()
    } else if (run == 9) {
        txt = "Case Study: Enterprise"
        typeWriter()
    } else if (run == 11) {
        txt = "Case Study: VR"
        typeWriter()
    }
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("terminal-input")
            .innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (run == 1) {
        setTimeout(clearText, 550)
    }
}

function clearText() {
    var text = document.getElementById("terminal-input")
        .innerHTML
    console.log("text-length is: ", document.getElementById("terminal-input")
        .innerHTML.length)
    if (text.length > 0) {
        document.getElementById("terminal-input")
            .innerHTML = text.substring(0, text.length - 1)
        console.log(text.length)
        setTimeout(clearText, speed)
    } else {
        run += 1
        startTerminal(run);
    }
}