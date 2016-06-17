    //Adds random numbers displayed in the textbox.   

    var event1 = document.getElementById("button1")
    event1.addEventListener('click',myfirst,false);
        
    function myfirst()
    {
        var userinput1 = document.getElementById("input1").value;
        document.getElementById("demo").innerHTML = userinput1;
    }