var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "";   
    
   for (var y=0; y<1; y++)
   {
     e = "Element " + y + " = "  +array[y] + "<br/>";
     if(array[y]%2==0)
     {
      document.getElementById("Result1").innerHTML = "Not a Prime number."
     }
     else
     {
      document.getElementById("Result1").innerHTML = "It is a Prime number."
     }
   }
   document.getElementById("Result").innerHTML = e;
}