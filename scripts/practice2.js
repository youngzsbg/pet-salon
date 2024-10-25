
$(document).ready(function(){


$("#btnToggle").on('click',function(){
$("#imgPractice").toggle();
});

//challenge 2
$(".answer").hide();
$(".question").on('click', function(){
    $(".answer").slideToggle("slow")
});

});




