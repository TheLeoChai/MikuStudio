
let names = ["DSC_2618", "DSC_3160", "DSC_3359", "DSC_4486_square"]

function getDesc(name){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../description/" + name + ".txt", false);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            return xhr.responseText;
        }
    }
    xhr.send();
}