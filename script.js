function hello(name, numberOfLogs){
    for( i=0; i<numberOfLogs; i++){
    console.log('Hello' + name + '!')
    }
}
hello('Mateusz', 1)
hello('Ala', 2)
hello('Ela', 3)

var secondsCounter = 1

var intervalID = setInterval (
    function (){
        console.log(secondsCounter++)
    },
    1000
)

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