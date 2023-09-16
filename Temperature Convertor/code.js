document.getElementById("convert-btn").onclick = function(){
        let temp;
        if(document.getElementById("celcius").checked){
            temp = document.getElementById("inp-temp").value;
            temp = Number(temp);
            temp = toCelcius(temp);
            document.getElementById("out-msg").innerHTML = "The converted temperature to Celcius is : " + temp + "°C";

        }
        else if(document.getElementById("fahrenheit").checked){
            temp = document.getElementById("inp-temp").value;
            temp = Number(temp);
            temp = toFahrenheit(temp)
            document.getElementById("out-msg").innerHTML = "The converted temperature to fahrenheit is : " + temp + "°F";

        }
        else{
            alert("Please select an Option !");
        }


        function toCelcius(temp){
            return (temp-32)*5/9;
        }
        function toFahrenheit(temp){
            return temp*9/5 + 32;
        }

}