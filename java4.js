var x = 0;
var array = Array();
var sum  = 0;
function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}
function display_array(){
    var e = "";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = "  +array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}
function sumsquare() {
    
  for(var i=0; i<array.length; i++)   
  { 
     sum = sum+(array[i]*array[i]);
    }
    
  
    document.getElementById("Result1").innerHTML = sum;  
} 
  