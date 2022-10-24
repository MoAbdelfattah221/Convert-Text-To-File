let textArea = document.querySelector("textarea");
let fileName = document.querySelector("input");
let selectBox = document.querySelector("select");
let button  = document.querySelector("button");

if(textArea.value === ""){
    button.style.cssText = "background-color: #17a2bb80;"
}

textArea.onkeydown = () => {
    button.style.cssText = "background-color: #17A2BB;"
}

selectBox.onchange = () => {
    let selectedOption = selectBox.options[selectBox.selectedIndex].text;
    button.innerHTML = `Save as ${selectedOption.split(" ")[0]} File`
}

button.onclick = () => {
    const blob = new Blob([textArea.value] , {type: selectBox.value});
    const fileURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = fileName.value;
    link.click()
}