function getRandom (max) {
  return parseInt(Math.random() * max);
}

const maxElements = 10;

function searchNumber (arr, i, Element) {
  if (arr[i] == Element) {
    return true;
  }
  
  if (i + 1 >= maxElements) {
    return false;
  }
  
  return searchNumber(arr, i + 1, Element);
}

var randomArray = [];
var out = '';
for (i = 0; i < maxElements; i++) {
  randomArray[i] = getRandom(15);
  out += randomArray[i] + ' ';
}
console.log('Заполненый случайный массив: ');
console.log(out);

(function () {
  out = '';
  let searchValue = prompt('Введите искомое число:', 0);
  if (searchValue === null){
    alert('Произведена отмена!');
    return;
  }
  searchValue = searchValue.split('');
  let clearedSearchValue = '';
  searchValue.forEach(function (ch) {
    if (ch != ' ') {
      clearedSearchValue += ch;
    }
  });
  
  if (clearedSearchValue === '') {
    alert('Вводимое значение не является положительным целым числом!');
    return;
  }
	
  searchValue = +clearedSearchValue;
  
  if (isNaN(searchValue) || searchValue < 0) {
    alert('Вводимое значение не является положительным целым числом!');
    return;
  }
  
  if (searchNumber(randomArray, 0, parseInt(searchValue))) {
    out = 'Элемент ' + searchValue + ' найден!';
  }
  else {
    out = 'Элемент ' + searchValue + ' не найден!';
  }
  
  console.log(out);
})();
