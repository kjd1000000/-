// arr = [1,1,1,2,2,2,3,5,6,5]
// var obj = {}
// for (var i = 0; i < arr.length; i++){
    
//     console.log(obj[arr[i]])
//     if (obj[arr[i]]===undefined) {
//         obj[arr[i]] = true

//     }
//     else{
//         arr.splice(i,1)
//         i--
//     }
// }
// console.log(arr);

// console.log();



// var arr = [12,3,1213,34,123124,21]
// var obj = {}
// console.log(obj)
// for (var i = 0; i < arr.length; i++){
//     obj[arr[i]] = arr[i]
// }
// var newarr = []
// for (var key in obj){
//     newarr.push(obj[key])
// }
// console.log(newarr)


//原有数组更改
var arr =  [12,3,1213,34,123124,21]
var obj = {}
for (var i = 0; i < arr.length; i++){
    var cur = arr[i]
    if (obj[cur]===cur) {
        arr.splice(i,1)
        arr[i]=arr[arr.length-1]
        arr.length--
        i--
        continue
    }
    obj[cur] = cur
}
console.log(arr)

newarr = []
var arr =  [12,3,1213,34,123124,21]
len =
for (var i = 0; i < arr.length; i++){
    var cur = arr[i]
    if (newarr.indexOf(cur)===-1){
        newarr.push(cur)
    }
}
var time = new Date()
console.log(time.getDate())
console.log(time.getDay())


console.log(time.getFullYear())
console.log(time.getMonth()+1)

console.log(time.getHours())
console.log(time.getMinutes())
console.log(time.getMilliseconds())
console.log(Date.now())
console.log(time.getTime())

