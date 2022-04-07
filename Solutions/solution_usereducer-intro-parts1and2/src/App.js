// Import useReducer
import React, { useEffect, useReducer } from "react";
import "./App.css";

// * LIVE CODING GOAL:
// When we finish, I want us to have a simple app with a "counter" div and 2x buttons.
// Click one button will add 1 to the count.
// Clicking the other button will subtract 1 from the count.
// The current value of "count" will be held in state, and managed with useReducer().
// When we click a button, the state will update, the component will re-render and we will see the latest count value.

// =====================================================================
// * To set up state using useReducer, we will take *3* steps...
//   Step 1 - Create state in the App component using useReducer()
//   Step 2 - Create an initial ("starting") state for the App component
//   Step 3 - Create a reducer
// =====================================================================

// * Step 2
// Create an initial state for the App component
// For now, this only has one property ("count"). In a real use case, it would have more!
const initialState = { 
    count: 0,
    name: ""
}

// * Step 3
// Create a reducer
// ? What is a reducer?
// Remember the array method .reduce()? This is similar - we define some logic which resolves to a SINGLE value.
// This lets you manage a single "state" object containing multiple values.
// (This works in a similar way to this.setState() in a class-based component).
const reducer = (state, action) => {
    // When we want to update the state, we have to find out what "type" of action we just performed...
    // ? What type of action did I just perform?
    switch(action.type) {
        case "increment":
            // The return value will be your new state value
            return { ...state, count: state.count + 1 }
        case "decrement":
            return { ...state, count: state.count - 1 }
        case "multiplyByTen":
            return { ...state, count: state.count * 10 }
        case "reset":
            return { ...state, count: 0 }
        case "updateName":
            return { ...state, name: action.payload }
        default:
            return state;
    }
}

const App = () => {

    // * Step 1
    //   A. The "state" variable will contain your whole state. The "updater" function is called "dispatch".
    //   B. The "dispatch" function will let *you* decide how to update the state in each case.
    //   C. We also need to define a starting value for your state, for when the app first loads
    //   D. Finally, we need to define a REDUCER function - in what ways do you want to update the state?
    
    //        A        B                      D           C
    const [ state, dispatch ] = useReducer(reducer, initialState);

    // Log the state after every re-render of the app component
    useEffect(() => {
        console.log("New state:", state);
    }, [state])

    // Function to add 1 to state.count
    const addOne = () => {
        // Using dispatch to trigger a particular "action"
        // Based on its "type", the reducer will update your state in the way you want.
        // In this case, the action being dispatched is of the type "increment"...
        // When received by the reducer, this will mean the "count" property of state is increased by 1
        dispatch({ type: "increment" })
    }

    // Function to subtract 1 from state.count
    const subtractOne = () => {
        dispatch({ type: "decrement" })
    }

    const multiplyBy10 = () => {
        dispatch({ type: "multiplyByTen" })
    }

    const resetCount = () => {
        dispatch({ type: "reset" })
    }

    // Use an action object with "type" and "payload" properties to update state.name
    const updateName = event => {
        // "payload" = data we want to give the reducer function, which it can use
        dispatch({ type: "updateName", payload: event.target.value })
    }

    return (
        <div>
            <div>Count: {state.count}</div>
            <button onClick={addOne}>+</button>
            <button onClick={subtractOne}>-</button>
            <button onClick={multiplyBy10} >*10</button>
            <button onClick={resetCount} >Reset</button>

            <div>
                <input placeholder="Type your name!" value={state.name} onChange={updateName}></input>
                <div>Name: {state.name}</div>
            </div>
        </div>
    )
}

export default App;