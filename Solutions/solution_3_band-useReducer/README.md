# React Band Page 6: useReducer 

Now we will make the final version of the Black Sabbath band page, by refactoring it to use `useReducer()` to manage state, rather than `useState()`.

**Note:** There is no problem with using `useState`() in an small app like this. This exercise is intended as an opportunity to practice using `useReducer()` in a more "real-world" context. :-)

### Instructions

1. Open `App.js`.

2. Replace your `useState()` state variables with a state **object**, created using `useReducer()`.

3. Replace all the `useState()` functions to update the old state variables with **dispatch** calls which send an action object to a reducer function. The reducer should be in charge of updating your state object in the desired way, based on the "type" of action dispatched.

**Remember:** When you are changing a property in state, remember that the state object will also have other properties you are not updating. To make sure these are also part of the new version of state, don't forget to also use the **spread operator**, like we saw this morning.

4. Finally, make sure that all references to the old state variables have been replaced by references to the new state **object**.

Now try to run the project and see if it works the same way as before. If you get any errors (in either the VS Code terminal or the browser console), make sure to read them carefully, as they will give you details about the problem so you can fix it. :-)

---

### Bonus

If you finish a little early, you are welcome to keep experimenting with `useReducer` in this project, or alternatively to keep building your "Sandbox" project from yesterday (as this could be a helpful portfolio project for you in the future). :-)