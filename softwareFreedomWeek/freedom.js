let changing =0;

let button_r = document.getElementById("button_r")
let button_l = document.getElementById("button_l")
let imageContent = document.getElementById("imageContent")
let name = document.getElementById("name")

button_r.addEventListener('mouseover',function(){
    button_r.setAttribute('style','background-color:#D3D3D3;font-size:5em')
})

button_l.addEventListener('mouseover',function(){
    button_l.setAttribute('style','background-color:#D3D3D3;font-size:5em')
})

button_r.addEventListener('mouseleave',function(){
    button_r.setAttribute('style','font-size:5em')
})


button_l.addEventListener('mouseleave',function(){
    button_l.setAttribute('style','font-size:5em')
})


if(button_r){
button_r.addEventListener('click',function(){
   // console.log("asdf")
    changing++
    if(changing>6||changing<0)
    {
        console.log("ads")
        changing--;
    }
else{
    let text = document.getElementById('textContent')
  //  text.setAttribute('class','font_cool')

   // text.setAttribute('class','font_cool animated fadeInleft')
    if(changing==0)
    {
        text.innerHTML="Session 1:<br><br>"+
        "Speaker: Anumeha Agarwal<br><br>"+
       " Date: 27/08/18<br>"+
        "Venue: CSE Department Seminar Hall<br>"+
        "Topic: Building real world web applications with MEAN Stack<br><br>"+
        "Description: Anumeha Agarwal, 2018 GSoCer, gave a talk on how to use MonogDB, Angular,"+ 
        "NodeJS, what they are used for and how they work together.<br>"
        imageContent.setAttribute('src','anumeha1.png')
        name.innerHTML="Anumeha Agrawal<br>"

    }
    if(changing==1)
    {
        text.innerHTML="Session 2:<br><br>"+
        "Speaker: Moksh Jain<br><br>"+
        "Date: 28/08/18<br>"+
        "Venue: CSE Department Seminar Hall<br>"+
        "Topic: An exploration of the world of decentralized applications<br><br>"+
        "Description: Moksh Jain, the co-head of Intelligence at web club gave a talk on Decentralized apps and the block chain."+
        "<br></br>"
        imageContent.setAttribute('src','moksh2.png')
        name.innerHTML="Moksh Jain<br>"

    }
    if(changing==2)
    {
        text.innerHTML="Session 3:<br><br>"+
        "Speaker: Praveen Gupta<br><br>"+
        "Date: 29/08/18<br>"+
        "Venue: CSE Department Seminar Hall<br>"+
        "Topic: Jitsi Meet - Are real time subtitles with translations possible in a video conference<br><br>"+
        "Description: Praveen Gupta, GSoCer 2018, gave a talk on he completed his open source GSoC project for Jitsi describing the pros and cons of various decisions made during his project."
        imageContent.setAttribute('src','praveen3.png')
        name.innerHTML="Praveen Gupta<br>"

    }
    if(changing==3)
    {
        text.innerHTML="Session 4:<br><br>"+
        "Speaker: Sagar Bharadwaj<br><br>"+
        "Date: 29/08/18<br>"+
        "Venue: CSE Department Seminar Hall<br>"+
        "Topic: Mozilla Firefox - The hidden secrets<br><br>"+
        "Description: Sagar Bharadwaj, GSoCer 2018, talked about the hidden secrets in Firefox. Essential shortcuts, quick hacks etc."
        imageContent.setAttribute('src','sagar4.png')
        name.innerHTML="Sagar Bharadwaj<br>"


    }
    if(changing==4)
    {
        text.innerHTML="Session 5:<br><br>"+
        "Speaker: Hrishikesh Hiraskar<br><br>"+
        "Date: 30/08/18<br>"+
        "Venue: CSE Department Seminar Hall<br>"+
        "Topic: Learn VIM and fall in love with CLI<br><br>"+
        "Description: Hrishi Hiraskar, GSoC 2018 student at Haiku, Head of Development Group, Web Club, showed us ways to edit text faster like a master using VIM."
        imageContent.setAttribute('src','hrishi5.png')
        name.innerHTML="Hrishikesh Hiraskar<br>"


    }
    if(changing==5)
    {
        text.innerHTML="Session 6:<br><br>"+
        "Speaker: Salman Shah<br><br>"+
        "Date: 30/08/18<br>"+
        "Venue: CSE Department Seminar Hall<br>"+
        "Topic: Introduction to using Free Softwares for software development<br><br>"+
        "Description:Salman Shah, GSoC 2018 student at Internet Archive, Convener of IEEE-NITK, Co-head of Development Group, Web Club, talked about using free software for developing your career in Computer Science."
        imageContent.setAttribute('src','salman6.png')
        name.innerHTML="Salman Shah<br>"


    }
    if(changing==6)
    {
        text.innerHTML="Session 7:<br><br>"+
        "Speaker: Dr Mohit P Tahiliani<br><br>"+
        "Date: 31/08/18<br>"+
        "Venue: CSE Department Seminar Hall<br>"+
        "Topic: Leveraging Open Source opportunities to build successful career in computer science<br><br>"+
        "Description:  Dr. Mohit P Tahiliani, Assistant Professor, Dept. of CSE, NITK, Google Summer of Code (GSoC) mentor under the ns-3 organisation for 2 consecutive years, part of the core team, ns-3 (An open source network simulator) organisation. He talked about on how to go about developing a profile for both jobs and further studies."
        imageContent.setAttribute('src','mohitSir.png')
        name.innerHTML="Prof. Mohit Tahilani <br>"

    }
    
}
})

}


if(button_l){
    button_l.addEventListener('click',function(){
       // console.log("asdf")
        changing--;
       if(changing>6||changing<0)
       {
           console.log("ads")
           changing++
       }
       else{
        let text = document.getElementById('textContent')
        if(changing==0)
        {
            text.innerHTML="Session 1:<br><br>"+
            "Speaker: Anumeha Agarwal<br><br>"+
           " Date: 27/08/18<br>"+
            "Venue: CSE Department Seminar Hall<br>"+
            "Topic: Building real world web applications with MEAN Stack<br><br>"+
            "Description: Anumeha Agarwal, 2018 GSoCer, gave a talk on how to use MonogDB, Angular,"+ 
            "NodeJS, what they are used for and how they work together.<br>"
            imageContent.setAttribute('src','anumeha1.png')
            name.innerHTML="Anumeha Agrawal<br>"
    
        }
        if(changing==1)
        {
            text.innerHTML="Session 2:<br><br>"+
            "Speaker: Moksh Jain<br><br>"+
            "Date: 28/08/18<br>"+
            "Venue: CSE Department Seminar Hall<br><br>"+
            "Topic: An exploration of the world of decentralized applications"+
            "Description: Moksh Jain, the co-head of Intelligence at web club gave a talk on Decentralized apps and the block chain."+
            "<br></br>"
            imageContent.setAttribute('src','moksh2.png')
            name.innerHTML="Moksh Jain<br>"
    
        }
        if(changing==2)
        {
            text.innerHTML="Session 3:<br><br>"+
            "Speaker: Praveen Gupta<br><br>"+
            "Date: 29/08/18<br>"+
            "Venue: CSE Department Seminar Hall<br>"+
            "Topic: Jitsi Meet - Are real time subtitles with translations possible in a video conference<br><br>"+
            "Description: Praveen Gupta, GSoCer 2018, gave a talk on he completed his open source GSoC project for Jitsi describing the pros and cons of various decisions made during his project."
            imageContent.setAttribute('src','praveen3.png')
            name.innerHTML="Praveen Gupta"
    
        }
        if(changing==3)
        {
            text.innerHTML="Session 4:<br><br>"+
            "Speaker: Sagar Bharadwaj<br><br>"+
            "Date: 29/08/18<br>"+
            "Venue: CSE Department Seminar Hall<br><br>"+
            "Topic: Mozilla Firefox - The hidden secrets<br><br>"+
            "Description: Sagar Bharadwaj, GSoCer 2018, talked about the hidden secrets in Firefox. Essential shortcuts, quick hacks etc."
            imageContent.setAttribute('src','sagar4.png')
            name.innerHTML="Sagar Bharadwaj<br>"
    
    
        }
        if(changing==4)
        {
            text.innerHTML="Session 5:<br><br>"+
            "Speaker: Hrishikesh Hiraskar<br>"+
            "Date: 30/08/18<br>"+
            "Venue: CSE Department Seminar Hall"+
            "Topic: Learn VIM and fall in love with CLI"+
            "Description: Hrishi Hiraskar, GSoC 2018 student at Haiku, Head of Development Group, Web Club, showed us ways to edit text faster like a master using VIM."
            imageContent.setAttribute('src','hrishi5.png')
            name.innerHTML="Hrishikesh Hiraskar<br>"
    
    
        }
        if(changing==5)
        {
            text.innerHTML="Session 6:<br><br>"+
            "Speaker: Salman Shah<br>"+
            "Date: 30/08/18<br>"+
            "Venue: CSE Department Seminar Hall<br>"+
            "Topic: Introduction to using Free Softwares for software development<br><br>"+
            "Description:Salman Shah, GSoC 2018 student at Internet Archive, Convener of IEEE-NITK, Co-head of Development Group, Web Club, talked about using free software for developing your career in Computer Science."
            imageContent.setAttribute('src','salman6.png')
            name.innerHTML="Salman Shah<br>"
    
    
        }
        if(changing==6)
        {
            text.innerHTML="Session 7:<br><br>"+
            "Speaker: Dr Mohit P Tahiliani<br>"+
            "Date: 31/08/18<br>"+
            "Venue: CSE Department Seminar Hall<br>"+
            "Topic: Leveraging Open Source opportunities to build successful career in computer science<br><br>"+
            "Description:  Dr. Mohit P Tahiliani, Assistant Professor, Dept. of CSE, NITK, Google Summer of Code (GSoC) mentor under the ns-3 organisation for 2 consecutive years, part of the core team, ns-3 (An open source network simulator) organisation. He talked about on how to go about developing a profile for both jobs and further studies."
            imageContent.setAttribute('src','mohitSir.png')
            name.innerHTML="Prof. Mohit Tahilani <br>"
    
        }
    }
    })
    
    }