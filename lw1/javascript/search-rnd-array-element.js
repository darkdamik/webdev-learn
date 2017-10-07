var c = 1;
var poisk;
var N = 9; 
var arr = [];
var isFound = false;
var vivod = "";

for (i = 0; i <= N; i++) { 
  arr[i] = Math.floor(Math.random() * (16 - 1)) + 1;  
  vivod = vivod + "Число " + c++ + ": " + arr[i] + "\n";
}
alert(vivod);

var poisk = prompt("Число для поиска: "); 
if ((poisk == "") || (isNaN(poisk)) || (poisk == null)) {
  alert("Ошибка ввода");
  windows.stop;
}

for (i = 0; i <= N; i++) {
  if (arr[i] == poisk) {
    isFound = true;
  }
}  	

if (!isFound) { 
  vivod = "Число: " + poisk + " не найдено";
} else {
  vivod = "Число: " + poisk + " найдено";
}
alert(vivod);