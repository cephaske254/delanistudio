$(document).ready(function(){
    $("#porfolio div").hover(function(){
        $(this).find("div").css({"display":"flex"})+;
    },function(){
        $(this).find("div").hide();
    });
});