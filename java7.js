function findlarge(){
    var x = document.getElementById("text1").value;
    var y = document.getElementById("text2").value;
    if(x>y){
        document.getElementById("result").innerHTML = x+" "+"is larger";
    }
    else{
        document.getElementById("result").innerHTML = y+" "+"is larger";
    }
}