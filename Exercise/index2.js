function sefl(){
let str = prompt('nhap 1 so')
let arr = str.split(''); // empty string separator
console.log( arr ); // [ "a", "b", "c", "d", "e", "f", "g" ]
// var arr = [1,2,3,4];
let total=0;
for(i=0;i<arr.length;i++) {
    total += parseInt(arr[i]);
  
}
console.log( parseInt(str) + total)
}