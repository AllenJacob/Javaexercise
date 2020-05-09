function display(){
    var x = document.getElementById("text1").value;
    document.getElementById("result").innerHTML = "Entered text is "+x;
}
function truncate(){
    var y = document.getElementById("text1").value;
    console.log(y.length);
    if(y.length>=8){
        document.getElementById("result1").innerHTML = y.slice(0,5)+"....";

    }
    else{
        document.getElementById("result1").innerHTML = y;
    }
}