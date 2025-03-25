document.addEventListener("DOMContentLoaded", (e) => {

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








    // Example 3
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





    //Example 4: Button Clicked
    // document.querySelector("button").addEventListener("click", (banana) => {
    //     console.log("Button Clicked!");
    //     console.log(banana);

    // });





    //Example 5: Event Bubbling
    // document.getElementById("parent").addEventListener("click", (e) => {
    //     console.log("Parent Clicked");
    // });

    // document.querySelector(".child").addEventListener("click", (e) => {
    //     console.log("Child Clicked");
    //     e.stopPropagation(); // Stops bubbling!
    // });






    //Example 6: Event Delegation
    // document.getElementById("parent").addEventListener("click", (event) => {
    //     console.log("parent clicked, but not anyone buttons")
    //     if (event.target.tagName === "BUTTON") {
    //       console.log("Button Clicked:", event.target.textContent);
    //     }
    //   });





    
    // Example 7: Asynchroncity of Event Handling
    document.querySelector(".child").addEventListener("click", () => {
        console.log("Button Clicked!");

        setTimeout(() => {
            console.log("Now we are inside setTimeout (delayed execution)");
        }, 0);

        console.log("Event Listener Finished Executing");

        
    });





































    // Solution to HARD 
    // class EventEmitter {
    //     constructor() {
    //       this.events = {};
    //     }
      
    //     on(event, callback) {
    //       if (!this.events[event]) {
    //         this.events[event] = [];
    //       }
    //       this.events[event].push(callback);
    //     }
      
    //     emit(event, data) {
    //       if (this.events[event]) {
    //         this.events[event].forEach(callback => callback(data));
    //       }
    //     }
    //   }
      
    //   const eventBus = new EventEmitter();
      
    //   eventBus.on("greet", (name) => console.log(`Hello, ${name}!`));
      
    //   eventBus.emit("greet", "Sohum");





})