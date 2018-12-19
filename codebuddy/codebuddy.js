
let im1 = document.getElementById('1stImage')
let im2 = document.getElementById('2ndImage')
let im2_set = document.getElementById('im2_set')
let im1_set = document.getElementById('im1_set')


let flag =0;
im1.addEventListener('mouseover',function(){
if(flag==0){
    im1.setAttribute('width','1000em')
    im2.setAttribute('width','0.2em')
    //im1.setAttribute('height','800em')
    //_set.setAttribute('class','container')
}
})

im1.addEventListener('mouseleave',function(){
    
        im1.setAttribute('width','500em')
        im2.setAttribute('width','500em')
      //  console.log("asdf")
       
    
})


im2.addEventListener('mouseover',function(){
    if(flag==0){
        im2.setAttribute('width','1000em')
        im1.setAttribute('width','0.2em')
       im2_set.setAttribute('class','container')
    }
    })
    
    im2.addEventListener('mouseleave',function(){
        
            im2.setAttribute('width','500em')
            im1.setAttribute('width','500em')
            
            console.log("asdf")
           
        
    })