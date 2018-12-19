let changing =0;

let button_r = document.getElementById("button_r")
let button_l = document.getElementById("button_l")
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
       console.log("asdf")
        changing++
        console.log(changing)
        if(changing>6||changing<0)
        {
            console.log("ads")
            changing--; 
        }
    else{
        let text = document.getElementById('textContent')
        if(changing==0)
      {

      text.innerHTML= " Contest name :RECTIFY</br>"+
        "Description     :Challenger event based on logical analysis in top coder challenge pattern."+
"Date:            <br>   Round 1 - 12/10/2018(Friday)<br>"+
          	          "  Round 2 - 13/10/2018(Saturday)<br>"+
"Link     	<a href=http://engineernitk.org/compsoc.html style=text-decoration:none>           :http://engineernitk.org/compsoc.html</a><br>"+
"Number of Participants    :27<br>"

name.innerHTML="1.         K Hemanth,                final year,       	Computer Science<br> "+

"2.         Ashwin Joisa,             third year,     	Computer Science<br> "+

       "  3.         Dibyadarshan Hota,   third year,   	Computer Science <br>"

      }
      if(changing==1)
      {
      text.innerHTML=  " Contest name :Synthessence</br>"+
        "Description     :Synthessence was a Machine learning competition organised by NITK on Kaggle that deals with predicting a customer’s rating for a restaurant based on reviews and other features."+
"<br>Date:            <br>   10/10/2018(Friday) - 14/10/2018(Sunday)"+

"<br>Link     	<a href=https://www.kaggle.com/c/synthessence2k18 style=text-decoration:none>           :https://www.kaggle.com/c/synthessence2k18</a><br>"+
"<br>Number of Participants    :15<br>"
    
name.innerHTML=" 1. Moksh Jain third year	Information Technology<br><br>"+

"2. Sakshat Rao	second year	Electronics and Communication <br><br>"+

        " 3. Sathwik G S	final year	Electronics and communication"



}
if(changing==2)
{
    text.innerHTML="Contest Name: INSCRIPTION<br>"+

   " Description : A nation level programming contest hosted by NITK as a part of Engineer, its     "+
    "annual technical fest.<br>"+
    
   " <br>Date : 13/10/2018 - 14/10/2018<br>"+
    
   " <br>Link:<a href= https://www.hackerearth.com/challenge/college/inscription-18/ > https://www.hackerearth.com/challenge/college/inscription-18/</a>"+

    
   " <br><br>Number of participants : 96"
    
name.innerHTML="Devanshu Agarwal final year		Mechanical Engineering, IIT Roorkee<br><br>"+


"2.	Ajinkya Parab			Graduated	Computer Science and Engineering,NITK<br><br>"+


"3.	Saurabh Mishra		final year	IT,  IIIT Allahabad<br><br>"

}
if(changing==3)
    {
text.innerHTML="Contest Name : ECTF<br>"+

"<br>Description : ECTF was a beginner level jeopardy style ctf held by our very own "+
"<br>ReasonablySuspiciousActivity (RSA) during Engineer, the annual technical fest of NITK,"+
" to introduce people, with no experience, to ctfs."+

"<br>Date : Oct 12 18:00 - Oct 13 18:00"+ 

"<br>Link <a href = ectf.nitk.ac.in> : ectf.nitk.ac.in</a><br>"+

"<br>Number of teams registered (of max size 4) : 59"

name.innerHTML="1. Team :inv4sion<br> Shubham Maheshwari - IIT Roorkee<br><br>"+

"2. Team : Alconblue<br> Zoeb Mithaiwala - NITK - 4th yr, CSE<br><br>"+

"3. Team : miracle_hackers<br> T K Jeshventh Raja - NITK - 4th yr, CSE"+
          "  T K Bavishaa Sree - PESU ECC - 2nd yr, CSE <br><br>"+
         
"4. Team : Hmmmmmmm<br> Nishanth Hebbar - NITK - 3rd yr, IT"+
            "Shashank P - NITK - 3rd yr, CSE"+
            "Aditi Gupta - NITK - 3rd yr, CSE"+
            "Aakash Singh - NITK - 2nd yr, IT<br><br>"+

"5. Team Name : blnk<br>     Swati S Bhat - NITK - 4th yr, IT"+
   " Samvid Dharanikota - NITK - 4th yr, CSE 	"
_______________________________________________________


        }
if(changing==4)
{
    text.innerHTML="Contest Name Marathon<br>"+
   " No. of participants: around 80 people attended(26-27 teams)"
    
   name.innerHTML="1).Team 80Kistooless* - Ashwin Joisa(3rd Year CSE), Shashank P(3rd Year CSE), Hrishi Hiraskar(Final Year CSE)"+
   "<br><br>2). Team Anamika* - : Tejas R, Dibyadarshan, Chenna Keshava (All 3rd Year CSE)"+
   "<br><br>3). Team Doesn't matter* -: Parth Dodiya, Raghav Raghuwanshi, Avdesh Yadav (All 2nd Year CSE)"
}
    
    }

    }
    )

    }


    if(button_l){
        button_l.addEventListener('click',function(){
           // console.log("asdf")
            changing--;
            console.log(changing)
           if(changing>6||changing<0)
           {
               console.log("ads")
               changing++
           }
           else{
            let text = document.getElementById('textContent')
            if(changing==0)
          {
    
          text.innerHTML= " Contest name :RECTIFY</br>"+
            "Description     :Challenger event based on logical analysis in top coder challenge pattern."+
    "Date:            <br>   Round 1 - 12/10/2018(Friday)<br>"+
                            "  Round 2 - 13/10/2018(Saturday)<br>"+
    "Link     	<a href=http://engineernitk.org/compsoc.html style=text-decoration:none>           :http://engineernitk.org/compsoc.html</a><br>"+
    "Number of Participants    :27<br>"
    
    name.innerHTML="1.         K Hemanth,                final year,       	Computer Science<br> "+

"2.         Ashwin Joisa,             third year,     	Computer Science<br> "+

       "  3.         Dibyadarshan Hota,   third year,   	Computer Science <br>"

          }
          if(changing==1)
          {
          text.innerHTML=  " Contest name :Synthessence</br>"+
            "Description     :Synthessence was a Machine learning competition organised by NITK on Kaggle that deals with predicting a customer’s rating for a restaurant based on reviews and other features."+
    "<br>Date:            <br>   10/10/2018(Friday) - 14/10/2018(Sunday)"+
    
    "<br>Link     	<a href=https://www.kaggle.com/c/synthessence2k18 style=text-decoration:none>           :https://www.kaggle.com/c/synthessence2k18</a><br>"+
    "<br>Number of Participants    :15<br>"
        
    name.innerHTML=" 1. Moksh Jain third year	Information Technology<br><br>"+
    
    "2. Sakshat Rao	second year	Electronics and Communication <br><br>"+
    
            " 3. Sathwik G S	final year	Electronics and communication"
    
    
    
    }
    if(changing==2)
    {
        text.innerHTML="Contest Name: INSCRIPTION<br>"+
    
       " Description : A nation level programming contest hosted by NITK as a part of Engineer, its     "+
        "annual technical fest.<br>"+
        
       " <br>Date : 13/10/2018 - 14/10/2018<br>"+
        
       " <br>Link:<a href= https://www.hackerearth.com/challenge/college/inscription-18/ > https://www.hackerearth.com/challenge/college/inscription-18/</a>"+
    
        
       " <br><br>Number of participants : 96"
        
    name.innerHTML="Devanshu Agarwal final year		Mechanical Engineering, IIT Roorkee<br><br>"+
    
    
    "2.	Ajinkya Parab			Graduated	Computer Science and Engineering,NITK<br><br>"+
    
    
    "3.	Saurabh Mishra		final year	IT,  IIIT Allahabad<br><br>"
    
    }
    if(changing==3)
        {
    text.innerHTML="Contest Name : ECTF<br>"+
    
    "<br>Description : ECTF was a beginner level jeopardy style ctf held by our very own "+
    "<br>ReasonablySuspiciousActivity (RSA) during Engineer, the annual technical fest of NITK,"+
    " to introduce people, with no experience, to ctfs."+
    
    "<br>Date : Oct 12 18:00 - Oct 13 18:00"+ 
    
    "<br>Link <a href = ectf.nitk.ac.in> : ectf.nitk.ac.in</a><br>"+
    
    "<br>Number of teams registered (of max size 4) : 59"
    
    name.innerHTML="1. Team :inv4sion<br> Shubham Maheshwari - IIT Roorkee<br><br>"+
    
    "2. Team : Alconblue<br> Zoeb Mithaiwala - NITK - 4th yr, CSE<br><br>"+
    
    "3. Team : miracle_hackers<br> T K Jeshventh Raja - NITK - 4th yr, CSE"+
              "  T K Bavishaa Sree - PESU ECC - 2nd yr, CSE <br><br>"+
             
    "4. Team : Hmmmmmmm<br> Nishanth Hebbar - NITK - 3rd yr, IT"+
                "Shashank P - NITK - 3rd yr, CSE"+
                "Aditi Gupta - NITK - 3rd yr, CSE"+
                "Aakash Singh - NITK - 2nd yr, IT<br><br>"+
    
    "5. Team Name : blnk<br>     Swati S Bhat - NITK - 4th yr, IT"+
       " Samvid Dharanikota - NITK - 4th yr, CSE 	"
    _______________________________________________________
    
    
            }
    if(changing==4)
    {
        text.innerHTML="Contest Name Marathon<br>"+
       " No. of participants: around 80 people attended(26-27 teams)"
        
       name.innerHTML="1).Team 80Kistooless* - Ashwin Joisa(3rd Year CSE), Shashank P(3rd Year CSE), Hrishi Hiraskar(Final Year CSE)"+
       "<br><br>2). Team Anamika* - : Tejas R, Dibyadarshan, Chenna Keshava (All 3rd Year CSE)"+
       "<br><br>3). Team Doesn't matter* -: Parth Dodiya, Raghav Raghuwanshi, Avdesh Yadav (All 2nd Year CSE)"
    }
        
        }
    
          
        
        
        
        
        
        
        
        

        }
        )

    }
