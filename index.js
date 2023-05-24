 // if we add () then it will call the function as it a function call straight up and we want to call when the click event happens.
 // making a function inside the parameters makes the function an anonymus function.

for( var i=0;i<document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",
    function()
    {

     var buttonInnerHTML= this.innerHTML;
     makeSound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key)
{
    switch (key) {
        case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
            break;
        case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
            break;
        case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
            break;
        case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
            break;
        case "j":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
            break;
        case "k":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
            break;
        case "l":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
}


function buttonAnimation(currentkey)
{
     var activeButton= document.querySelector("."+currentkey);
     activeButton.classList.add("pressed");
     setTimeout(function()
     {
        activeButton.classList.remove("pressed")
     },100);
}

// Functions that take other functions as parameters are known as higher order functions

// this is used to access the current object like in the above loop this contains each element of the array of type button.

// Constructor functions are made not names using Camerl Casing and it is name like with first letter also being capital.