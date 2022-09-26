//Done in regular javascript

// const newItem = document.createElement("li");
// const newItemText = document.createTextNode("Vegan Sausage");
// newItem.appendChild(newItemText);
// const groceryList = document.getElementById("list");
// groceryList.appendChild(newItem)

// Done in jQuery
///This will execute only AFTER the document is created
$(document).ready(() => {

  $('#div1').on('click', (event) => {
    //Prevents bubbling, or event propagation from occuring(calling all other events up the DOM tree)
    event.stopPropagation()
    console.log("Outter Div")
  })
  $('#div2').on('click', (event) => {
    event.stopPropagation()
    console.log("Middle Div")
  })
  $('#div3').on('click', (event) => {
    event.stopPropagation()
    console.log("Winner")
  })
  $('#div3').on('click', (event) => {
    
    //This will any further events from occuring.
    event.stopImmediatePropagation()
    event.stopPropagation()
    console.log("You collected all the coins")
  })
  $('#div3').on('click', (event) => {
    event.stopImmediatePropagation()
    event.stopPropagation()
    console.log("You defeated all the enemies")
  })
  $('#div3').on('click', (event) => {
    event.stopPropagation()
    console.log("BOO!")
  })
  //Example of how to add and remove classes

})

//Short hand of document ready

// $(() => {
//   const newItem = $("<li>Vegan Sausage</li>")
//   $("#list").append(newItem)

// })


