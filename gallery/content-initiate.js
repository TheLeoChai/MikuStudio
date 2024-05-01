
let names = ["DSC_2618", "DSC_3160", "DSC_3359", "DSC_4486_square"]

function switchDesc() {
    var slideName = $(".swiper-slide-visible").data("name");
    $("#" + slideName + "-desc").ready(function(){
        var slideName = $(".swiper-slide-visible").data("name");
        console.log("switching to " + slideName + "-desc");
        $(".back").removeClass("back").addClass("gone");
        $("#" + slideName + "-desc").addClass("back").removeClass("gone");
        console.log($("#" + slideName + "-desc").html());
    });
}