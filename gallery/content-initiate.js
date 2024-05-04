
let names = ["DSC_2618", "DSC_3160", "DSC_3359", "DSC_4486_square", "DSC_6731", "DSC_6748", "DSC_6763-Enhanced-NR-Edit", "DSC_6766-Edit", "DSC_6769", "DSC_6950-Edit", "DSC_7611", "DSC_7804", "DSC_7810", "DSC_7846", "DSC_7879", "DSC2058", "DSC_7924-Enhanced-NR"]

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