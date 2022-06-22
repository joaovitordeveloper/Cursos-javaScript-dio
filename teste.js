//var y = 0; comentario de linha
/* comentario de varias linhas*/
//funções o () e onde vai declarar os atributos.

function soma(a, b) {

  return a + b;
}

//abaixo chamando a função.

soma(3, 5);

//console.log("Hello word!");

function returnEvenValues(array) {

  let evenNums = [];
  for (let i = 0; i < array.length; i++) {

    if (array[i] % 2 === 0) {
      evenNums.push(array[i]);
    } else {
      console.log(`${array[i]} não e par!`);
    }
  }
  console.log("Os números pares são:", evenNums);
}

let array = [1, 2, 3, 4, 5, 7, 8];

returnEvenValues(array);