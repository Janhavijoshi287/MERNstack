let selectedElements = document.querySelectorAll("#myTable tr td:nth-child(odd)");

for(let i = 0; i < selectedElements.length; i++) {
  selectedElements[i].setAttribute("style", "background-color: red;");
  selectedElements[i].innerHTML = "X"
}

function changeBGColor(element){
    console.log("Clicked", element);
    element.setAttribute("style", "background-color: blue;");
}