// Select color input
const colorInput = document.querySelector("#colorPicker");
colorInput.addEventListener("change", colorSelection, false);

const Canvas = document.querySelector("#pixelCanvas");

function colorSelection(){
  let colorChoice = colorInput.value;
  Canvas.style.color = colorChoice;
  return colorChoice;
}

// Select size input

// When size is submitted by the user, call makeGrid()
const submit = document.querySelector("[type='submit']");
submit.addEventListener("click", makeGrid);

function makeGrid(event) {
  clearCanvas();
  const n = document.getElementById("inputHeight").value;
  const m = document.getElementById("inputWidth").value;
  event.preventDefault();
  for (let i =0; i <= n; i++){
    let createRow = document.querySelector("#pixelCanvas").insertRow();
    for (let j = 0; j <= m; j++){
      createRow.insertCell();
    }
  }



  document.getElementById("pixelCanvas").addEventListener("click", function(event) {
 if(event.target && event.target.nodeName == "TD") {

   event.target.style.backgroundColor = colorSelection();}
  });
  console.log(n, m);
}


function clearCanvas(){
 let tbl = document.getElementById("pixelCanvas");
while (tbl.tBodies[0].hasChildNodes()) {
tbl.tBodies[0].removeChild(tbl.tBodies[0].lastChild);}
}
