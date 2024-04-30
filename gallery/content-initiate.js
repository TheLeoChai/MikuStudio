
let names = ["DSC_2618", "DSC_3160", "DSC_3359", "DSC_4486_square"]

function switchDesc(slideID) {
    console.log("switching to " + names[slideID] + "-desc");
    $(".back").removeClass("back").addClass("gone");
    $("#" + names[slideID] + "-desc").addClass("back").removeClass("gone");
}