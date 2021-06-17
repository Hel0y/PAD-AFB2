//1
function someFun(a, callback) {
    console.log("this poiting to interview");
    return  1
}

//2
function someFn(x) {
    const returnFunction = (value) => {
      switch (value) {
        case 3:
          return 4
        case 1:
          return 5
        case 5:
          return 10
        }
    }
}

//3
function calculator(n1, n2){
    return function(callback){
        callback(n1, n2);
    }
}

//4
/* 
O resultado apresentado será o seguinte: 4, 1, 5, 1
*/

//5
function Tabuada(n){
for (let index = 0; index < array.length; index++) {
console.log(`${num} X ${index} = ${num * index}`);   
}
}
