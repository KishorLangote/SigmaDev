// let arr = [1, 4, 2, 5, 6]
// arr[0] = 545 // Arrays are muttable (changable)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[3])
// console.log(arr[4]) 
 
// Arrays methods : 

// concat :

// let a1 = [1, 4, 3, 7]
// let a2 = [5, 6, 8, 6, 3, 2]
// let a3 = [8, 4, 30, 9, 1]

// console.log(a1.concat(a2, a3))

// sort :

// let b = [5, 8 , 6, 9]
// console.log(b.sort())

// splice :

// let number = [1, 2 ,3, 8, 9, 62]
// // console.log(number.splice(1, 2))
// console.log(number.splice(1, 4))
// console.log(number)


// let number = [1, 2 ,3, 8, 9, 62, 87, 20, 58]
// console.log(number.splice(2, 4))
// console.log(number)

// const numbers = [1, 2, 3, 4, 5 ]
// console.log(numbers.splice(1, 3, 23, 24))
// console.log(numbers)

// slice:
 
// const num = [1, 4, 5, 8, 9]
// // console.log(num.slice(3))
// console.log(num.slice(1, 4))
// tostring - conversts an arrray to a string of comma separeted values.
let n = [1, 2, 5, 8, 7]
console.log(n.toString())

// join() - join the all arrays elements using a separator. 

let num = [4, 5, 8, 12, 6, 3]
console.log(num.join("-"))

// pop : Removes last element from the arrays.

let nm = [1, 4, 5, 6, 7]
console.log(nm.pop(2))
console.log(nm)

// push : Add a new element at the end of the arrays.
let a = [4, 3, 2, 6, 4]
console.log(a.push(5))
console.log(a)

// shift : remove first element and return. 

let g = [4, 3, 3, 5, 6, 7]
console.log(g.shift())
console.log(g)

// upshift : add element to the beginning of the arrays. 

let addelement = [4, 6, 7 ,7, 3]
console.log(addelement.unshift(2, 6))
console.log(addelement)

// delete : array element deleted using delete operator. 

let d = [2, 4, 6, 7, 4, 1, "kishor"]
console.log(delete[2])

// reverse : reverse the element in the source arrays.

let p = [4, 6,8, 89, 90, 1, 7]
console.log(p.reverse())

