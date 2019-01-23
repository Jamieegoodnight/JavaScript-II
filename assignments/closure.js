// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function royalDecree(messengername, decree){
  console.log(`${messengername}, go forth and tell all my subjects ${decree}`);

  function message(){
    const king="King Aethelstan IX"
    console.log(`I, ${messengername}, hereby do say unto you all gathered herewith henceforth and therein that ${king} says, "${decree}"`);
  }
  message();
}

royalDecree("John", "I declare war on Estonia!");

//

const deathSentence=function(){
  let condemned=0;
  return function(){
    condemned++;
    console.log(`I hereby and verily condemn ${condemned} people to death, on this day!`)
    return condemned; 
  };
}

const proclamation=deathSentence();
proclamation();

// // ==== Challenge 2: Create a counter function ====
// const counter = () => {
//   // Return a function that when invoked increments and returns a counter variable.
// };
// // Example usage: const newCounter = counter();
// // newCounter(); // 1
// // newCounter(); // 2


const counter=()=>{
  let count=0;
  return()=>{
    count++;
    return count;
  };
};

const newCounter=counter();
newCounter();
newCounter(); 
newCounter(); 































/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
