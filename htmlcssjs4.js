const btndate1=document.getElementById("date");
const btntime1=document.getElementById("time");
const para1=document.getElementById("demo");
const para2=document.getElementById("demo1");

function showtime(){
    const obj1=new Date();
    para1.innerHTML=obj1;
    
}

function showdate(){
    const obj2=new Date("24/Sep/2023");
     para2.innerHTML=obj2;
}


btndate1.addEventListener("click",showdate);
btntime1.addEventListener("click",showtime);