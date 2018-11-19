var dom = document.getElementById("contain")
var lis = document.getElementsByTagName('li')
var divs = dom.getElementsByTagName('div')
console.log(lis)
console.log(divs);

function change(n) {
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = ''
        divs[i].className = ''
    }
    lis[n].className = 'active'
    divs[n].className = 'active'
}
for (var i = 0; i < lis.length; i++) {
    lis[i].index = i
    lis[i].onclick = function() {
        // 绑定事件里面的this，指的就是绑定的对象
        change(this.index)
    }
}
