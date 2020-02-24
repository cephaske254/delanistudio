$(document).ready(function(){
    //SCROLL TO ABOUT US ON CLICK
    $("#scrolldown").click(function(){
        window.location.href='#textcont';
    });
    //HOVER ACTION FOR THE PORTFOLIO IMAGES
    $("#porfolio div").hover(function(){
        $(this).find("div").css({"display":"flex"});
    },function(){
        $(this).find("div").hide();
    });

    //TOGGLE ONCLICK ON THE WHAT WE DO SESCTION
    $(".col-sm").click(function(){
        $(this).find(".visible-desc").slideToggle();
        $(this).find(".hidden-desc").slideToggle();
    });


    $("button[type=submit][name=submit]").click(function(){
            var name = $("input[type=text][name=name]").val();
            var email = $("input[type=email][name=email]").val();
            var message = $("textarea[name=message]").val();
            if(name && email && message !== null){
                alert("Hello " + name+ ",  we have received your message. Thank You for reaching out to us!")
            }else {
                alert("Failed! Remember to fill all the fields. Your Email is considered confidential")
            }
    });
});