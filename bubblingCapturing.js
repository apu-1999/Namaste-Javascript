document.querySelector("#grandParent").addEventListener('click', () => {
    console.log("GrandParent Element Clicked!"); 
}, true); //Capturing

document.querySelector("#parent").addEventListener('click', () => {
    console.log("Parent Element Clicked!");
}, true); //Bubbling

document.querySelector("#child").addEventListener('click', () => {
    console.log("Child Element Clicked!");
}, false); //Capturing


// To improve the performance as per developer's convenience
/* In case of grand->true, parent->false, child->true
Clicking child:-
-> Gradparent->Child->Parent

In case of grand->true, parent->true, child->false
Clicking child:-
-> Gradparent->Parent->Child
Bcoz a/c to W3C, capturing happens then followed by bubbling
That's how we can control our event propagation of different even handlers
*/

