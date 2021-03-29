# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* the onClick handler grabs our current state of the app and is dispatched through our reducer  
* our reducer goes through switch cases to determine what happens to our dispatched value
* the value is then updated in the state
  
* TotalDisplay shows the total plus 1.
