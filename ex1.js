//example 1
var allImages1 = document.images;
console.log("All images (default collection):", allImages1);

var allImages2 = document.getElementsByTagName("img");
console.log("All images (getElementsByTagName):", allImages2);

    
var cityDropdown = document.getElementsByName("City")[0];
var cityOptions = cityDropdown.options;
console.log("All City dropdown options:", cityOptions);

  
var allTables = document.getElementsByTagName("table");
var secondTable = allTables[1];
var rowsInSecondTable = secondTable.getElementsByTagName("tr");
console.log("Rows in second table:", rowsInSecondTable);


var fontBlueElements = document.getElementsByClassName("fontBlue");
console.log("All elements with class 'fontBlue':", fontBlueElements);


document.getElementsByTagName("table")[1].getElementsByTagName("a")[0].href = "https://training.com";
document.getElementsByTagName("table")[1].getElementsByTagName("a")[0].innerText = "Training";

  
var imgs = document.getElementsByTagName("img");
imgs[imgs.length - 1].style.border = "2px solid pink";

function showChecked() {
    var cbs = document.forms["regForm"].querySelectorAll("input[type=checkbox]:checked");
    var vals = [];
    for (var i = 0; i < cbs.length; i++) vals.push(cbs[i].value);
    alert("Checked: " + vals.join(", "));
  }

 
document.getElementById("example").style.background = "pink";

  
