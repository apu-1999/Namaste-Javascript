/*document.querySelector("#grandParent").addEventListener('click',() => {
   console.log("GrandParent Element Clicked!"); 
},false);

document.querySelector("#parent").addEventListener('click',() => {
    console.log("Parent Element Clicked!"); 
 },false);

 document.querySelector("#child").addEventListener('click',() => {
    console.log("Child Element Clicked!"); 
 },false);*/

 /*Clicking child:-
  Child->Parent-> Gradparent
  Clicking parent:-
  Parent-> Gradparent
  Clicking grandparent
   Gradparent*/

// To stop the propagation of event handlers, we use stopPropagation() mthod
//In case of bubbling
document.querySelector("#grandParent").addEventListener('click', () => {
    console.log("GrandParent Element Clicked!"); 
}, false); 

document.querySelector("#parent").addEventListener('click', () => {
    console.log("Parent Element Clicked!");
}, false); 

document.querySelector("#child").addEventListener('click', (e) => {
    console.log("Child Element Clicked!");
    e.stopPropagation();
}, false); 
