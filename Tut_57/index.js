// 1. for loop    -> loop a block of code No. of Time
// 2. for-in loop -> loop through the keys of an object
// 3. for-of loop -> loops through the value of an object
// 4. while loop  -> loops a block based o a specific condition
// 5. do-while loop -> while loop variant which runs atleast once



//for loop : 
//syntax :
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

let a = 1;
for(let i=0; i<100; i++){
    b = a + i;
    console.log(b);
}

// for-in loop :

let object = {
    name: "Kishor",
    role: "Programmer",
    company: "CodeWithHarry AI",
}

//syntax :

// for( key in object){
//    element = object[key];
//     console.log(key, element)
// }



//for-of loop :

for (const name of "Harry") {
    console.log(name)
}

// syntax:

// for (const iterator of object) {
    
// }

// while loop :

// syntax :
// while (condition) {
    
// }

i = 0; 
while (i<6) {
    console.log(i);
    i++;
}

// do-while loop :

// syntax:
// do {
    
// } while (condition);

let j = 10;
do {
    console.log(j)
    j++;
} while (i<6);

let i = 0;
do {
    console.log(i)
    i++;
} while (i<6);