const userText = document.getElementById("usertext");
const outputText = document.getElementById("output-text");
const userColor = document.getElementById("usercolor");
const fontSize = document.getElementById("fontsize");

const fontStyleArr = {
    bold: false,
    italic: false,
    underline: false
};

const printValue = e => {
    outputText.innerText = e.target.value;
}

userText.addEventListener("input", printValue);

userColor.addEventListener("input", e => {
    outputText.style.color = e.target.value;
    document.getElementById("color-value").innerText = e.target.value;
    outputText.style.fontFamily = "ubuntu";
    // var color1 = `rgb(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`;
    // var color2 = `rgb(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`;
    // var color = `linear-gradient(45deg, ${color1}, ${color2})`;
    // document.body.style.backgroundColor = color;
});

fontSize.addEventListener("input", e => {
    outputText.style.fontSize = e.target.value + "px";
    document.getElementById("font-size-value").innerText = e.target.value + "px";
});

const fontStyleChange = e => {
    switch (e.innerText) {
        case "Bold": fontStyleArr.bold = !fontStyleArr.bold; break;
        case "Italic": fontStyleArr.italic = !fontStyleArr.italic; break;
        case "Underline": fontStyleArr.underline = !fontStyleArr.underline; break;
        default: return;
    }

    outputText.style.fontWeight = fontStyleArr.bold ? "bold" : "initial";
    outputText.style.fontStyle = fontStyleArr.italic ? "italic" : "initial";
    outputText.style.textDecoration = fontStyleArr.underline ? "underline" : "initial";
}
