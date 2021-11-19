/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a, b) {
    return a + b
  }
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(num) {
    if (num % 2 == 0) return true //"even"
    return false //"odd"
  }
  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name) {
    return `Hi, ${name}! Come on in.`
  }
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age) {
    if (age >= 18) return true // 18 or over
    else return false // under 18
  }
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(age) {
    /*if (age < 18)*/ 
    return (18 - age)
  }
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(age, name) {
    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
    if (isAnAdult(age)) return greet(name)
    return `${name} ,go learn JS and come back in ${yearsToAdulthood(age)} years`
  }
  
//   if (age < 18) return `Go learn JS and come back in ${18 - age} year`
//     else return `Come on in.`