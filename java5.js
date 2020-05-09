var x = [];
function iterate(){
    for(var j = 0; j<16; j++){
       
       x[j] = j ;  
       console.log(x[j]);
    }
    for(var j = 0; j<16; j++){
    
   
        if(x[j]%2==0)
        {
            document.getElementById("result1").innerHTML += x[j]+" " +"Number is even" +"</br>";
            
        }
        else{
            document.getElementById("result1").innerHTML += x[j]+" " +"Number is odd" +"</br>";
        }
    
}
}