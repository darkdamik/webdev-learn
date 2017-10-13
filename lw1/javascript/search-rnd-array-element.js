var c = 1;
var searchElement;
var max_elements = 9; 
var arr = [];
var isFound = false;
var conclusion = "";

for (i = 0; i <= max_elememnts; i++) { 
  arr[i] = Math.floor(Math.random() * (16 - 1)) + 1;  
  conclusion = conclusion + "Число " + c++ + ": " + arr[i] + "\n";
}
alert(conclusion);

var searchElement = prompt("Число для поиска: "); 
if ((searchElement == "") || (isNaN(searchElement)) || (searchElement == null)) {
  alert("Ошибка ввода");
  windows.stop;
}

for (i = 0; i <= max_elements; i++) {
  if (arr[i] == searchElemenrt) {
    isFound = true;
  }
}  	

if (!isFound) { 
  conclusion = "Число: " + searchElement + " не найдено";
} else {
  conclusion = "Число: " + searchElement + " найдено";
}
alert(conclusion);
