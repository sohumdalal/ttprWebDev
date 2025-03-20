// document.addEventListener("DOMContentLoaded", (e) => {

//Example 1: Simple console Logs
// console.log(" I am now running JS in my browser")
// const parent = document.getElementById("parent")
// parent.textContent = "hello!"







//Example 2: DOM element Creation
// const domDiv = document.createElement("div")
// const domDivContent = document.createTextNode("Hello!")
// domDiv.appendChild(domDivContent)
// document.body.insertBefore(domDiv, parent)
// domDiv.id = "domDiv"
// domDiv.style.color = "red"








//Example 3
// const children = document.querySelectorAll(".child");

// children.forEach(child => {
//     child.addEventListener("click", () => {
//         if (child.style.backgroundColor === "lightgray") {
//             child.style.backgroundColor = "lightblue";
//         } else {
//             child.style.backgroundColor = "lightgray";
//         }
//     });
// });



// })

document.addEventListener("DOMContentLoaded", (event) => {

    const parent = document.getElementById("parent")
    // parent.textContent = "hello!"

    const domDiv = document.createElement("div")
    const domDivContent = document.createTextNode("Hello!")
    domDiv.appendChild(domDivContent)
    document.body.insertBefore(domDiv, parent)
    domDiv.id = "domDiv"
    domDiv.style.color = "red"





})