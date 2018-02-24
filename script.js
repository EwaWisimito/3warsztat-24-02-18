console.log('Hello Ewa!')

// data types in JS

//primitives

//string
var textVariable = "Ewa"
console.log(textVariable)

//number
var numberVariable = 43
console.log(numberVariable)

//boolean
var boolVariable = true
console.log(boolVariable)

//null
var nullVariable = null
console.log(nullVariable)

//undefined
var undefinedVariable = undefined
console.log(undefinedVariable)

//objects

//objects with data
var simplestObj = {
    name: "Ewa",
    lastname: "Maj"
}
console.log(simplestObj)

//nested object with data

var nestedObj = {
    name: "Ewa",
    car: {
        brand: "Peugeot",
        model: 407
    }
}
console.log(nestedObj)
console.log(nestedObj.car.model)

//arrays
var simpleArray = [1,2,
    {name: 'Ala', array: [1,4,6]},
    3,4,5]
console.log(simpleArray)
console.log(simpleArray[4])
console.log(simpleArray[1].name)
