// silder

let slider_btn_left=document.getElementById("slider_btn_left");
let slider_btn_right=document.getElementById("slider_btn_right");
let slider_image=document.getElementsByClassName("slider_box");
let first_slide=document.getElementById("first_slide");
let flag=3;
    setInterval(function()
        {
            controller(1)
        },5000);

 function controller(x)
{
    flag=flag+x
    silderfunc(flag);
}


function silderfunc(num)
{
    first_slide.style.display="none";
    console.log("num "+num);
    console.log("flag" +flag)
    for(let i of slider_image)
    {
       i.style.display="none";
    }

    if(flag==5)
    {
        flag=0;
        num=0;
    }

    if(flag<0)
    {
        flag=4;
        num=4;
    }
    slider_image[num].style.display="block";

    console.log("new num "+num)
     console.log(" new flag "+flag)
    
}

//slider end

//countdown

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML =  hours + " : "
  + minutes + " : " + seconds +" Left";
  document.getElementById("countdown").style.fontSize="18px";
  document.getElementById("countdown").style.color="grey";
  document.getElementById("countdown").style.cursor="wait";


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//countdown ends

