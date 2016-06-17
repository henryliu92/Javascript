// - All If, Else If and Else statements has to be in a logical order. You can have as many 'else if' statements you want. Else overrides all other statements. 

    var event1 = document.getElementById("button1");
    event1.addEventListener('click', myfirst, false);
        
    function myfirst()
    {
        var userinput1 = parseInt(document.getElementById("input1").value);
                   
        if (userinput1 <0)
            {
                document.getElementById("demo").innerHTML = "The number is negative (below 0)";
            }
            else if (userinput1 <10)
            {
                document.getElementById("demo").innerHTML = "The number is smaller than 10";
            }  
            else if (userinput1 >10)
            {
                document.getElementById("demo").innerHTML = "The number is larger than 10";
            }
            else 
            {
                document.getElementById("demo").innerHTML = "You have not entered a number! Please enter a number.";
            }
    }