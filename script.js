let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let spantext = document.querySelector("#spanText");
let isclicked = false;

div2.addEventListener("click", () => {
  if (isclicked) {
    document.body.style.backgroundColor = "white";
    spantext.innerText = "OFF";
    div1.style.border = "2px solid black";
    div2.style.border = "2px solid black";
    div2.classList.add("white");
  } else {
    document.body.style.backgroundColor = "black";
    spantext.innerText = "ON";
    div1.style.border = "2px solid white";
    div2.style.border = "2px solid white";
    div2.classList.add("dark");
  }
  isclicked = !isclicked;
});
