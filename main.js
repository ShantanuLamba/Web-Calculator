
function myfun(){
    var mul = document.getElementById("one").value;
    var mull = document.getElementById("two").value;
    
    document.getElementById("resulty").innerHTML = mul*mull ;
}
function myfund(){
    var dd = document.getElementById("oned").value;
    var ddd =document.getElementById("twod").value;

    document.getElementById("resultyd").innerHTML = dd/ddd;
}
function myfuns(){
    var s = document.getElementById("ones").value;
    var ss = document.getElementById("twos").value;

    document.getElementById("resultys").innerHTML = s-ss;
}
function myfuna(){
    var a = parseInt(document.getElementById("onea").value);
    var aa = parseInt (document.getElementById("twoa").value);

    document.getElementById("resultya").innerHTML = a+aa;
}