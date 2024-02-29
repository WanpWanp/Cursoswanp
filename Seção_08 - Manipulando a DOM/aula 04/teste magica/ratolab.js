let rato1 = document.querySelector(".teste>input").setAttribute("type","number");
let rato2 = document.querySelector(".teste>input").setAttribute("id","ratolab");

function mudartipo(t) {
    var rato1 = document.querySelector(".teste>input");
    if(rato1.hasAttribute("type")) {
        rato1.setAttribute("minLength","4");
        rato1.setAttribute("maxLength","4");
        rato1.setAttribute("value","0000");
        rato1.setAttribute("maxLength","4");
        rato1.setAttribute("maxLength","4");
    }
}