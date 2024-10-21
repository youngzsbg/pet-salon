console.log("Welcome to JQuery Library")

// getting an element by ID
// document.getElementById("red"); // Javascript
// $("#red"); // Jquery

// To change css property of id
// #id   method  key ,  value
$("#red").css("color","red").css("background-color","black")
$("#blue").css("color","blue").css("background-color", "gray")
$("#pink").css("color","pink").css("background-color","aqua")

// getting element by CLASS

$(".title-two").css("color","green").css("font-size","48px");

// add a border to the paragraph with-border

$(".with-border").css("border","3px solid black")

$(".my-border").click(function(){
    console.log("My border was clicked");
    $(this).css("border","3px solid black");
    $(this).addClass("error");
})

//getting elemeny by TAGS

$("h3").css("background-color","gray").css("cursor","pointer")

let myTitle= $("h3");

myTitle.mouseover(function(){
    $(this).css("background-color","green");
});

myTitle.mouseleave(function(){
    $(this).css("background-color","lightgray");
});