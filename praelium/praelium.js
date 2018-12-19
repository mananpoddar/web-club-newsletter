 let text = document.getElementById('text_in')
 let description = document.getElementById('description')
 let winners = document.getElementById('winners')
let opacity = document.getElementById('opacity')
 description.addEventListener('click',function(){
    

opacity.setAttribute('style',"opacity:1")
text.innerHTML=" A 24 hour online coding <br>"+
    "team contest for NITK students and IEEE student members<br> allowing teams of upto 3 members.  "+
    "<br><br>Date:Oct 6 2018 , 5:00 pm IST to Oct 7 2018 , 5:00 pm IST <br>    "
text.setAttribute('style',"margin-top:4em;font-size: 1.5em")
})

winners.addEventListener('click',function(){

 text.innerHTML =
          	 
 "1.K Hemanth,  final year,  Computer Science<br><br>"+

"      2.Pawan Rahangdale, third year, Computer Science<br><br>"+

" 3.Vichitr Gandas, third year, Computer Science<br><br>"

text.setAttribute('style',"margin-top:4em;font-size: 1.5em")
opacity.setAttribute('style',"opacity:1")

})