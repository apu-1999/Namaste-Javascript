document.querySelector("#grandParent").addEventListener('click', () => {
    console.log("GrandParent Element Clicked!");
}, true);

document.querySelector("#parent").addEventListener('click', () => {
    console.log("Parent Element Clicked!");
}, true);

document.querySelector("#child").addEventListener('click', () => {
    console.log("Child Element Clicked!");
}, true);

/*Clicking child:-
-> Gradparent->Parent->Child
Clicking parent:-
Gradparent->Parent
Clicking grandparent
 Gradparent*/

 // To stop the propagation of event handlers, we use stopPropagation() mthod
//In case of capturing
/*document.querySelector("#grandParent").addEventListener('click', (e) => {
    console.log("GrandParent Element Clicked!"); 
    e.stopPropagation();
}, true); 

document.querySelector("#parent").addEventListener('click', () => {
    console.log("Parent Element Clicked!");
}, true); 

document.querySelector("#child").addEventListener('click', () => {
    console.log("Child Element Clicked!");
}, true); */
/*Clicking child:-
-> Gradparent bcoz of stopPropagation
*/