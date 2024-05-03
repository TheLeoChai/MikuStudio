
let names = ["DSC_2618", "DSC_3160", "DSC_3359", "DSC_4486_square"]

function loadDesc() {
    var slideName = $(".swiper-slide-visible").data("name");
    $(window).on("load", function(){
        console.log("switching to " + slideName + "-desc");
        $(".back").removeClass("back").addClass("gone");
        $("#" + slideName + "-desc").addClass("back").removeClass("gone");
        console.log($("#" + slideName + "-desc").html());
    });
}

function switchDesc() {
    var slideName = $(".swiper-slide-visible").data("name");
    console.log("switching to " + slideName + "-desc");
    $(".back").removeClass("back").addClass("gone");
    $("#" + slideName + "-desc").addClass("back").removeClass("gone");
    console.log($("#" + slideName + "-desc").html());
}