// Method 1 : push() - Add to the END
//Add an element to the last 

const numbers1 = [10, 20, 30];

numbers1.push(40);

console.log(numbers1);

//Method 2 : pop() - Remove from the end 
//Removes the last element and returns it:

const numbers2 = [10, 20, 30, 40];

const removedItem = numbers2.pop();

console.log("Removed:", removedItem);
console.log("Remaining array:", numbers2);

//Method 3 : unshift() - Add to the beginning
// Adds one or more elements to the start of the array:

const numbers3  = [10, 20, 30];

numbers3.unshift(5);

console.log(numbers3);

//Method 4 : shift() - Remove from the beginning
//Removes the first element and shifts all remaining elements down:

const numbers4 = [5, 10, 20, 30];

const removedFirst = numbers4.shift();

console.log("Removed:", removedFirst);
console.log("Remaining array:", numbers4)

