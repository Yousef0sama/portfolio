$(function(){

    $(window).scroll(function(){
        $(".nav").css({"margin-top": ($(window).scrollTop() + 30) + "px", "margin-left":($(window).scrollLeft()) + "px"}, );
    });

    $(".bars").click(function () { 
        $(".bars").hide();
        $(".X").show();
        $(".X").css("display", "inline-block");
        $(".menu").animate({"width" : "200px" , "height" : "25%" , "padding" : "30px", "padding-bottom" : "20px"}, 1000);
    });
    $(".X").click(function () { 
        $(".X").hide();
        $(".bars").show();
        $(".bars").css("display", "inline-block");
        $(".menu").animate({"width" : "0px" , "height" : "0px" , "padding" : "0px"}, 1000);
    });


    let y = 2021;
    let ny = new Date().getFullYear();
    let xy = ny - y;

    if (xy < 10) {
        xy = "0"+xy;
    }

    $("#years").text("+"+xy);
    $("#proj").text("+05");

    $(".dark").click(function () {
        $(".dark").hide();
        $(".light").show();
        $(".light").css("display", "inline-block");
        $("body").addClass("dark-mode");
        $("body").removeClass("light-mode");
    });

    $(".light").click(function () {
        $(".light").hide();
        $(".dark").show();
        $("body").addClass("light-mode");
        $("body").removeClass("dark-mode");
    });

    $(".down-a").click(function () {
        $(".down-a").hide();
        $(".up-a").show();
        $("ul.f").slideDown(100);
    });

    $(".up-a").click(function () {
        $(".up-a").hide();
        $(".down-a").show();
        $("ul.f").slideUp(100);
    });

    $(".down-b").click(function () {
        $(".down-b").hide();
        $(".up-b").show();
        $("ul.b").slideDown(100);
    });

    $(".up-b").click(function () {
        $(".up-b").hide();
        $(".down-b").show();
        $("ul.b").slideUp(100);
    });

    $("#html-p").css("width", $("#html").text());
    $("#css-p").css("width", $("#css").text());
    $("#sass-p").css("width", $("#sass").text());
    $("#bs-p").css("width", $("#bs").text());
    $("#js-p").css("width", $("#js").text());
    $("#jq-p").css("width", $("#jq").text());
    $("#php-p").css("width", $("#php").text());
    $("#mysql-p").css("width", $("#mysql").text());

    $(".left").click(function () {
        if ($("#aa").hasClass("active")) {
            $("#cc").addClass("active");
            $("#aa").removeClass("active");
            $("#a").hide();
            $("#c").show();
        } else if ($("#bb").hasClass("active")) {
            $("#aa").addClass("active");
            $("#bb").removeClass("active");
            $("#b").hide();
            $("#a").show();
        } else if ($("#cc").hasClass("active")) {
            $("#bb").addClass("active");
            $("#cc").removeClass("active");
            $("#c").hide();
            $("#b").show();
        }
    });

    $(".right").click(function () {
        if ($("#aa").hasClass("active")) {
            $("#bb").addClass("active");
            $("#aa").removeClass("active");
            $("#a").hide();
            $("#b").show();
        } else if ($("#bb").hasClass("active")) {
            $("#cc").addClass("active");
            $("#bb").removeClass("active");
            $("#b").hide();
            $("#c").show();
        } else if ($("#cc").hasClass("active")) {
            $("#aa").addClass("active");
            $("#cc").removeClass("active");
            $("#c").hide();
            $("#a").show();
        }
    });

    $("#aa").click(function (e) {
        $("#aa").addClass("active");
        $("#bb").removeClass("active");
        $("#cc").removeClass("active");
        $("#a").show();
        $("#b").hide();
        $("#c").hide();
    });

    $("#bb").click(function (e) {
        $("#bb").addClass("active");
        $("#aa").removeClass("active");
        $("#cc").removeClass("active");
        $("#b").show();
        $("#a").hide();
        $("#c").hide();
    });

    $("#cc").click(function (e) {
        $("#cc").addClass("active");
        $("#bb").removeClass("active");
        $("#aa").removeClass("active");
        $("#c").show();
        $("#b").hide();
        $("#a").hide();
    });

    // $("#send").click(function () { 
    //     window.open('mailto:test@example.com', '_blank');        
    // });


    function sendEmail(e) {

        let firstName = $("#Fname").val();
        let lastName = $("#Lname").val();
        let fallName = firstName + " " + lastName;
        let email = $("#mail").val();
        let masg = $("#msg").val();

        e.preventDefault();
        window.open(`mailto:yousefosama1885@gmail.com?from:${email}&subject=I want a website&body=hello I'm ${fallName} I want a website contain that : ${masg}`);
    }

    $("form").submit(sendEmail);


});