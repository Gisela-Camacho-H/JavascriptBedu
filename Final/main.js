function myFunction() {
    var side1 = document.getElementById("input").value;
    var side2 = document.getElementById("input1").value;
    var side3 = document.getElementById("input2").value;
    var s = (parseInt(side1) + parseInt(side2) + parseInt(side3))/2;
    var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
  document.getElementById("result").innerHTML = "The area of the triangle is: " + area;
  }
  function cToF(){
  const cTemp = document.getElementById("cel").value;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
  document.getElementById("result1").innerHTML = message;
  }
  function fToC(){
  const fTemp = document.getElementById("fah").value;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
  document.getElementById("result2").innerHTML = message;
  } 
  function square(){
      const x = document.getElementById("num").value; 
      const square = x * x;
      const message = `the square of ${x} is ${square}.`;
      document.getElementById("result3").innerHTML = message;
  }
  function credit(){
      const age = document.getElementById("age1").value;
      const age2 = parseInt(age);
          if (age2 > 21){
              document.getElementById("result4").innerHTML = "Yes, you can have a credit card";
          }else if (age2 < 18){
              document.getElementById("result4").innerHTML = "You can't have a credit card"; 
          }else{
              document.getElementById("result4").innerHTML = "You need to prove independent income";  
          }
      }
      var getArgentinaTime = function(){
      document.getElementById("argentinaTime").innerHTML= new Date().toLocaleString("en-US",{timeZone:'America/Argentina/Buenos_Aires',timeStyle:'medium', hourCycle: 'h24'});
      }
      getArgentinaTime();
      setInterval(getArgentinaTime,1000);

      var getSpainTime = function(){
      document.getElementById("spainTime").innerHTML= new Date().toLocaleString("en-US",{timeZone:'Europe/Madrid',timeStyle:'medium', hourCycle: 'h24'});
      }
      getSpainTime();
      setInterval(getSpainTime,1000);

      var getMexicoCityTime = function(){
      document.getElementById("mexicoCityTime").innerHTML= new Date().toLocaleString("en-US",{timeZone:'America/Mexico_City',timeStyle:'medium', hourCycle: 'h24'});
      }
      getMexicoCityTime();
      setInterval(getMexicoCityTime,1000);

      var getGermanyTime = function(){
      document.getElementById("germanyTime").innerHTML= new Date().toLocaleString("en-US",{timeZone:'Europe/Berlin',timeStyle:'medium', hourCycle: 'h24'});
      }
      getGermanyTime();
      setInterval(getGermanyTime,1000);

      var getLondonTime = function(){
      document.getElementById("londonTime").innerHTML= new Date().toLocaleString("en-US",{timeZone:'Europe/London',timeStyle:'medium', hourCycle: 'h24'});
      }
      getLondonTime();
      setInterval(getLondonTime,1000);

      var getNewYorkTime = function(){
      document.getElementById("newYorkTime").innerHTML= new Date().toLocaleString("en-US",{timeZone:'America/New_york',timeStyle:'medium', hourCycle: 'h24'});
      }
      getNewYorkTime();
      setInterval(getNewYorkTime,1000);

      window.addEventListener("keydown", function(event) {
        if (event.key == "Enter") {
          document.body.style.background = "black";
          document.body.style.color = "white";
        }
        if (event.key == "Enter" && event.ctrlKey) {
            document.body.style.background = "rgb(182, 245, 224)";
            document.body.style.color = "black";
          }

      });
