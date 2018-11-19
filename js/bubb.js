// arr = [5,3,4,4,5]
// for (var i = 0; i < arr.length-1; i++){
//     for (var j = 0; j < arr.length-1-i; j++){
//         if (arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//         }
//     }
// }
// console.log(arr);


 function a() {
     this.x = 100
 }
 a.prototype.get = function () {
     console.log(this.x)
     
 }
 
 