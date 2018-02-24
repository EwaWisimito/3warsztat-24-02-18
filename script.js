

(function(){
var secondsCounter = 1

var intervalID = setInterval (
    function (){
        console.log(secondsCounter++)
    },
    1000
)

setTimeout(
    function(){
        clearInterval(intervalID)
    },
    5000
)
})()

var globalVariable = 'GLOBAL'

function add(a, b){
    var someVariable = 123
    globalVariable = 321
    console.log(globalVariable)
    return a + b
}

var result = add(3,5)

console.log(result)

console.log(someVariable)