// * USEREDUCER() INTRODUCTION

// useReducer() is another hook which was released with React 16.8.

// It's an alternative to the useState() hook.
// It helps us to manage complex state in a React app.

// * When should I use useReducer()?

// In a smaller app, state variables created with useState() should work fine.
// However, as your app gets bigger, you may need more and more state variables.
// This can become challenging to keep track of, and relies on a lot of calls to "setter" functions in different places.
// This can make the app harder to read, and maintain.

// ? Can I just create one useState() object containing all my state values (like in a class-based component)?

// For example...

//        "setter function"
//                ^
const [state, setState] = useState({/*...*/});

// This could partly solve the above problem...
// ... but if you have complex state, this would mean a complex state object!
// To update this state object, you would have to call the "setter" function every time...

setState(/*exactly what the new value of the state object should be */);

// Remember - every time you want to update state...
// You have to call the "setter" function, and *define the new value of the state variable*!

// * The problem with this...
// This would mean that, if you used a single "useState()" state object to hold all your state's values...
// You would have to call its "setter" function EVERY TIME you wanted to update ANY part of your state.
// This would put a lot of "setter" function calls throughout your app...
// This could quickly get complicated, repetitive, and hard to maintain!

// * In this situation, with complex state, and/or many state variables, useReducer() can be a big help.

// Using useReducer() lets you keep complex state in a single object, like in a class-based component.
// But it also lets you define all the ways you may want to update that state, in a single place!
// This is a lot easier than calling a "setter" function with new logic EVERY TIME you want to update the state.

/* 
* Summary:

? Should you choose useState() or useReducer()?
It is fairly straightforward to decide. Use useState if:
The states are simple types such as boolean, string etc, or shallow objects
There are only a handful you are managing
State setters are not littered all over the place in your component.
Otherwise use useReducer.

? Source: https://rajeshnaroth.medium.com/why-use-reducer-hooks-for-state-management-in-react-c9528f615ddf
*/

// * Let's look at an example app to see how useReducer() can work in practice...