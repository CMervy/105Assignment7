// function createMulti(){
//     var userinput = Number(window.prompt(`Select a number`))
//     for(let i=1; i<11; i++){
//         let item = document.createElement(`li`)
//         item.innerHTML = `${userinput} * ${i} = ${userinput * i}`
//         document.getElementById(`ul`).appendChild(item)
//     }
// }


function pickaKeller(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return `rgb(${r}, ${g}, ${b})`;
}
var buttons = document.querySelectorAll(`button`); // selects every button

var firstColors = [];

buttons.forEach(function(btn){ // loops through each button and applies this function
    var keller = pickaKeller() // creates the variable of the color for each utton
    btn.style.backgroundColor = keller; // Applies the color 
    btn.innerHTML = keller; // Applies the color
    firstColors.push(keller) // Adds the color to the firstColors array
})

function colorChange(choice){
    buttons.forEach(function(btn,index){ // loops through every button and applies the change selected by the user
        if(choice === `red`){
            btn.style.backgroundColor = `red`
            btn.innerHTML = `Red`
        }
        else if(choice === `green`){
            btn.style.backgroundColor = `green`
            btn.innerHTML = `Green`
        }
        else if(choice === `blue`){
            btn.style.backgroundColor = `blue`
            btn.innerHTML = `Blue`
        }
        else if(choice === `random`){
            var random = pickaKeller()
            btn.style.backgroundColor = random
            btn.innerHTML = random
        }
        else if(choice === `reset`){
            btn.style.backgroundColor = firstColors[index]
            btn.innerHTML = firstColors[index]
        }
    })
}







