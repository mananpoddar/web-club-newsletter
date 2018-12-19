let changing =0;

let button_r = document.getElementById("button_r")
let button_l = document.getElementById("button_l")
let textContent = document.getElementById("textContent")


button_l.addEventListener('click',function(){
    console.log("adsf")
textContent.innerHTML="Session 1<br><br>"+
"Speakers - Omkar Prabhu, Nishanth Hebbar<br>"+
"Date - 5/10/18<br>"+
"Venue - Main Seminar Hall<br>"+
"Topics - Version Control Systems and Introduction to Git.<br>"+
"Description - It was a session on basics of Git. The participants"+
 "were introduced to GitHub and given insights on how to contribute to"+
 " Open Source by teaching them how to make a Pull Request on GitHub."
textContent.setAttribute('class','font_cool container  animated fadeInLeft')

textContent.setAttribute('style',"font-size:1.5em;margin-left: 9em;")

})


button_r.addEventListener('click',function(){
    textContent.innerHTML="Session 2<br><br>"+
    "Speakers - Utkarsh Patil, Salman Shah<br>"+
   " Date - 7/10/18<br>"+
    "Venue - Main Seminar Hall<br>"+
    "Topics - Git (branches, merging and rebasing) , Contributing to Open Source<br>"+
    "Description - The first half of the session was a continuation to the previous session . "+
    "Utkarsh Patil talked on how to use <br>git branches and leverage their use to enhance working"+
    " on projects. In the other half of the session, Salman Shah,talked about how one can"+

    " get started with contributing to Open Source and shared his experience." 

    textContent.setAttribute('class','font_cool container  animated fadeInLeft')
    textContent.setAttribute('style',"font-size:1.5em;margin-left: 9em;")
}

)
    
