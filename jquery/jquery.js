$("#skill").click(function(){
    $(".card").hide();
    $(".medias-sociais").hide();
    $(".card-skill").removeClass("hide");
});

$("#more").click(function(){
    $(".skills-1").addClass("hide");
    $(".skills-2").removeClass("hide");
});

$("#back").click(function(){
    $(".card-skill").addClass("hide");
    $(".card").show();
    $(".medias-sociais").show();
    $(".skills-1").removeClass("hide");
    $(".skills-2").addClass("hide");
});