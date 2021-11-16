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

