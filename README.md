
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 The main difference between them is getElementById selector is finds one element by id.
 getElementsByClassName selector Finds element with specific class name.
 querySelector is Uses CSS selectors finds only the first matching element.
 Then querySelectorAll Returns all elements matching the css selector.


### 2. How do you create and insert a new element into the DOM?
 This is done in 3 steps. 

 Step 1: Create a new div element.
let newDiv = document.createElement("div");

 Step 2: Now add the text inside the div.
createDiv.innerText = "hello world";

 Step 3: Now the element needs to be inserted inside a parent.
document.body.appendChild(newDiv);

### 3. What is Event Bubbling? And how does it work?
Event Bubbling is a process where when an event occurs on a child element, that event goes step by step to the parent elements above. Event Bubbling works
When an element is clicked on, the event first works on that element's child.
Then it goes to its parent. Then further up to body,html,document

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation means we do not add an event to every child.
We add one event to the parent element.
it is useful to 
It requires less code.
It improves performance.
It works even for newly added elements.


### 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() Stops the browsers normal  action.
Example: Stops a form from submitting, stops a link from going to another page.

stopPropagation() Stops the event from going to the parent element.
But it does not stop the browsers default action.

---

